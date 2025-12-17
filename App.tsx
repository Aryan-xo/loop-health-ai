import React, { useState, useEffect, useRef } from 'react';
import { GoogleGenAI, LiveServerMessage, Modality, Type, FunctionDeclaration } from '@google/genai';
import { Mic, MicOff, Activity, MapPin, Building2, AlertCircle, Loader2 } from 'lucide-react';
import { searchHospitals, Hospital } from './services/hospitalData';
import { AudioStreamer } from './utils/audioUtils';
import { Device } from '@twilio/voice-sdk';

// --- Tool Definition ---
const searchHospitalsTool: FunctionDeclaration = {
  name: 'find_hospitals',
  parameters: {
    type: Type.OBJECT,
    description: 'Search for hospitals in the network database. Use this to find hospitals by city or specific name.',
    properties: {
      city: {
        type: Type.STRING,
        description: 'The city to search in (e.g., "Bangalore", "New Delhi", "Pune"). Infer the city from the user query if possible.',
      },
      keyword: {
        type: Type.STRING,
        description: 'A keyword to filter by name or address (e.g., "Apollo", "Eye", "Heart"). Optional.',
      },
    },
    required: ['city'],
  },
};

const endInteractionTool: FunctionDeclaration = {
  name: 'end_interaction',
  parameters: {
    type: Type.OBJECT,
    description: 'Ends the conversation immediately. Use this when the user asks an out-of-scope question.',
    properties: {},
  },
};

const SYSTEM_INSTRUCTION = `
You are "Loop AI", a thoughtful, professional, and empathetic hospital network assistant. 
Your goal is to help users navigate their hospital network efficiently.

**CRITICAL PROTOCOLS:**

1.  **EMERGENCY DETECTION**: If the user mentions a life-threatening situation (e.g., "Heart attack", "Heavy bleeding", "Unconscious"), DO NOT SEARCH.
    -   IMMEDIATELY say: "This sounds like a medical emergency. Please call 112 or an ambulance immediately. Do not wait."

2.  **Tool Usage**: You DO NOT have the hospital list in memory. You MUST use 'find_hospitals' to check.
    -   Query: "Bangalore hospitals" -> Tool: { city: "Bangalore" }
    -   Query: "Manipal in Bangalore" -> Tool: { city: "Bangalore", keyword: "Manipal" }

3.  **Concise Presentation**: 
    -   When results are found, DO NOT read the full JSON.
    -   Summarize: "I found [X] hospitals. The closest match is [Name] in [Address]."
    -   Ask if they want more details.

4.  **Handoff**: If the user asks non-healthcare questions ("Poem", "Math"), politely refuse and call 'end_interaction'.
    -   Say: "I'm sorry, I specialize only in hospital network queries. Let me connect you to a human agent."

5.  **Tone**: Be warm but efficient. Use Indian English spelling/terms if appropriate.
`;

const App: React.FC = () => {
  const [isConnected, setIsConnected] = useState(false);
  const [isConnecting, setIsConnecting] = useState(false);
  const [isSpeaking, setIsSpeaking] = useState(false);
  const [isCalling, setIsCalling] = useState(false); // New state for VoIP call
  const [transcripts, setTranscripts] = useState<{ source: 'user' | 'agent'; text: string }[]>([]);
  const [searchResults, setSearchResults] = useState<Hospital[] | null>(null);
  const [error, setError] = useState<string | null>(null);

  // Refs for managing the session and audio
  const streamerRef = useRef<AudioStreamer | null>(null);
  const aiClientRef = useRef<GoogleGenAI | null>(null);
  const sessionRef = useRef<any>(null);
  const deviceRef = useRef<Device | null>(null);
  const connectionTimeoutRef = useRef<NodeJS.Timeout | null>(null);

  // Initialize AI Client
  useEffect(() => {
    if (!process.env.API_KEY) {
      setError("API Key is missing. Please check your configuration.");
    }
    aiClientRef.current = new GoogleGenAI({ apiKey: process.env.API_KEY });
    streamerRef.current = new AudioStreamer();

    return () => {
      disconnect();
      if (deviceRef.current) {
        deviceRef.current.destroy();
      }
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const startVoipCall = async () => {
    try {
      setError("Connecting direct call to agent...");
      setIsCalling(true);

      // 1. Get Token
      const backendUrl = import.meta.env.VITE_BACKEND_URL || 'http://localhost:8000';
      const response = await fetch(`${backendUrl}/token`);
      const data = await response.json();
      if (!data.token) throw new Error("Failed to get call token");

      // 2. Init Device
      const device = new Device(data.token);
      deviceRef.current = device;

      // 3. Connect
      await device.connect();

      device.on('disconnect', () => {
        setIsCalling(false);
        setError("Call ended.");
      });

      setError("Talking not to Loop AI, but directly to Human Agent.");

    } catch (err: any) {
      console.error("VoIP Failed", err);
      setError("Failed to start direct call: " + err.message);
      setIsCalling(false);
    }
  };

  const connect = async () => {
    setError(null);
    if (!aiClientRef.current || !streamerRef.current) return;

    setIsConnecting(true);

    // Safety timeout: If connection takes longer than 15s, abort.
    if (connectionTimeoutRef.current) clearTimeout(connectionTimeoutRef.current);
    connectionTimeoutRef.current = setTimeout(() => {
      if (!isConnected) {
        disconnect();
        setError("Connection timed out. Check your network or API key.");
      }
    }, 15000);

    try {
      // 1. Initialize Microphone FIRST to ensure permissions are granted within the user gesture.
      // This prevents the "hanging" state where the browser waits for permission invisibly or blocks context resume.
      await streamerRef.current.initialize();

      const config = {
        model: 'gemini-2.5-flash-native-audio-preview-09-2025',
        config: {
          systemInstruction: SYSTEM_INSTRUCTION,
          responseModalities: [Modality.AUDIO],
          tools: [{ functionDeclarations: [searchHospitalsTool, endInteractionTool] }],
          // Transcription disabled to improve stability, can be enabled if model supports it in region
          // inputAudioTranscription: { model: "google-1.0-pro" }, 
          // outputAudioTranscription: { model: "google-1.0-pro" },
        },
      };

      let sessionPromise: Promise<any>;

      const callbacks = {
        onopen: async () => {
          if (connectionTimeoutRef.current) clearTimeout(connectionTimeoutRef.current);
          console.log('Session opened');
          setIsConnected(true);
          setIsConnecting(false);

          // Start streaming audio
          // We already initialized the stream, now we hook up the processor
          streamerRef.current?.startRecording((blob) => {
            const reader = new FileReader();
            reader.onloadend = () => {
              const base64data = (reader.result as string).split(',')[1];
              // Use sessionPromise to ensure session is initialized before sending
              sessionPromise.then(session => {
                session.sendRealtimeInput({
                  media: { mimeType: 'audio/pcm;rate=16000', data: base64data }
                });
              });
            };
            reader.readAsDataURL(blob);
          });
        },
        onmessage: async (message: LiveServerMessage) => {
          // Handle Audio Output
          if (message.serverContent?.modelTurn?.parts?.[0]?.inlineData) {
            const audioData = message.serverContent.modelTurn.parts[0].inlineData.data;
            if (audioData) {
              setIsSpeaking(true);
              streamerRef.current?.playAudioChunk(audioData, () => setIsSpeaking(false));
            }
          }

          // Handle Transcriptions (if enabled in config)
          if (message.serverContent?.inputTranscription?.text) {
            setTranscripts(prev => [...prev, { source: 'user', text: message.serverContent?.inputTranscription?.text || '' }]);
          }

          // Handle Tool Calls
          if (message.toolCall) {
            console.log("Tool call received:", message.toolCall);
            const responses = message.toolCall.functionCalls.map((fc) => {
              if (fc.name === 'find_hospitals') {
                const { city, keyword } = fc.args as any;
                const results = searchHospitals(city, keyword);
                setSearchResults(results.slice(0, 5));
                return {
                  id: fc.id,
                  name: fc.name,
                  response: { result: JSON.stringify(results) }
                };
              }
              if (fc.name === 'end_interaction') {
                console.log("Ending interaction and starting VoIP...");
                setError("Escalating to Direct Human Talk...");

                // Disconnect AI first
                disconnect();

                // Start VoIP
                startVoipCall();

                return {
                  id: fc.id,
                  name: fc.name,
                  response: { result: 'Interaction ended, VoIP started' }
                };
              }
              return { id: fc.id, name: fc.name, response: { result: 'Unknown tool' } };
            });

            sessionPromise.then(session => {
              session.sendToolResponse({
                functionResponses: responses,
              });
            });
          }
        },
        onclose: () => {
          console.log('Session closed');
          disconnect();
        },
        onerror: (err: any) => {
          console.error('Session error:', err);
          setError("Connection failed. Please check your internet or API key.");
          disconnect();
        },
      };

      // Assign the promise immediately
      // The connect method accepts a single object combining config and callbacks
      sessionPromise = aiClientRef.current.live.connect({ ...config, callbacks });
      sessionRef.current = await sessionPromise;

    } catch (e: any) {
      console.error(e);
      // Determine if it's a permission error or network error
      if (e.name === 'NotAllowedError' || e.message?.includes('permission')) {
        setError("Microphone permission denied. Please allow access to use this app.");
      } else {
        setError(e.message || "Failed to connect to Loop AI.");
      }
      disconnect();
    }
  };

  const disconnect = () => {
    if (connectionTimeoutRef.current) clearTimeout(connectionTimeoutRef.current);

    // Clean up session
    // We cannot easily cancel the promise if it's pending, but we can clean up the result
    sessionRef.current = null;

    streamerRef.current?.stopRecording();
    streamerRef.current?.stopPlayback();
    setIsConnected(false);
    setIsConnecting(false);
    setIsSpeaking(false);
  };

  const toggleConnection = () => {
    if (isConnected || isConnecting) {
      disconnect();
    } else {
      connect();
    }
  };

  return (
    <div className="min-h-screen bg-slate-50 flex flex-col font-sans text-slate-800">
      {/* Header */}
      <header className="bg-white shadow-sm border-b border-slate-200 sticky top-0 z-10">
        <div className="max-w-4xl mx-auto px-6 py-4 flex items-center justify-between">
          <div className="flex items-center gap-2">
            <div className="w-8 h-8 bg-medical-600 rounded-lg flex items-center justify-center">
              <Activity className="w-5 h-5 text-white" />
            </div>
            <h1 className="text-xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-medical-600 to-medical-900">
              Loop AI
            </h1>
            <span className="text-xs px-2 py-1 bg-medical-50 text-medical-600 rounded-full font-medium border border-medical-100">
              Hospital Assistant
            </span>
          </div>
          <div className="flex items-center gap-2">
            <div className={`w-2 h-2 rounded-full ${isConnected ? 'bg-green-500 animate-pulse' : error ? 'bg-red-500' : 'bg-slate-300'}`} />
            <span className="text-sm font-medium text-slate-500">
              {isConnected ? 'Live' : error ? 'Error' : 'Offline'}
            </span>
          </div>
        </div>
      </header>

      {/* Main Content */}
      <main className="flex-1 max-w-4xl w-full mx-auto px-6 py-8 flex flex-col gap-8">

        {/* Intro / Error Area */}
        <div className="text-center space-y-4">
          <h2 className="text-3xl font-light text-slate-800">
            How can I help you find a <span className="font-semibold text-medical-600">hospital</span>?
          </h2>
          <p className="text-slate-500 max-w-lg mx-auto">
            Ask about hospitals in your network by city. For example: <br />
            <span className="italic">"Find 3 hospitals around Bangalore"</span> or <span className="italic">"Is Apollo Hospital in Mumbai in my network?"</span>
          </p>

          {error && (
            <div className="bg-red-50 border border-red-200 text-red-600 p-4 rounded-lg flex items-center gap-3 max-w-md mx-auto animate-in fade-in slide-in-from-top-2">
              <AlertCircle className="w-5 h-5" />
              <p className="text-sm">{error}</p>
            </div>
          )}
        </div>

        {/* Interaction Zone */}
        <div className="flex flex-col items-center justify-center py-8">
          <button
            onClick={toggleConnection}
            disabled={isConnecting}
            className={`
              relative w-24 h-24 rounded-full flex items-center justify-center transition-all duration-300 shadow-xl
              ${isConnected
                ? 'bg-red-50 text-red-500 hover:bg-red-100 border-2 border-red-100'
                : isConnecting
                  ? 'bg-medical-100 text-medical-600 cursor-wait'
                  : 'bg-medical-600 text-white hover:bg-medical-700 hover:scale-105'
              }
            `}
          >
            {isConnecting ? (
              <Loader2 className="w-10 h-10 animate-spin" />
            ) : isConnected ? (
              <>
                <span className="absolute inset-0 rounded-full bg-red-400 opacity-20 animate-ping" />
                <MicOff className="w-8 h-8 relative z-10" />
              </>
            ) : (
              <Mic className="w-8 h-8" />
            )}
          </button>

          <div className="mt-6 h-8 flex items-center justify-center">
            {isConnecting ? (
              <span className="text-sm font-medium text-medical-600 animate-pulse">Requesting Permission & Connecting...</span>
            ) : isSpeaking ? (
              <div className="flex items-center gap-1">
                {[...Array(5)].map((_, i) => (
                  <div key={i} className="w-1 bg-medical-500 rounded-full animate-wave" style={{ animationDelay: `${i * 0.1}s` }} />
                ))}
              </div>
            ) : (
              <span className="text-sm font-medium text-slate-400">
                {isConnected ? "Listening..." : "Click microphone to start"}
              </span>
            )}
          </div>
        </div>

        {/* Results Section */}
        {searchResults && (
          <div className="bg-white rounded-xl shadow-lg border border-slate-100 overflow-hidden animate-in fade-in slide-in-from-bottom-4 duration-500">
            <div className="bg-medical-50 px-6 py-4 border-b border-medical-100 flex items-center justify-between">
              <h3 className="font-semibold text-medical-900 flex items-center gap-2">
                <Building2 className="w-4 h-4" />
                Network Hospitals Found
              </h3>
              <span className="text-xs bg-white px-2 py-1 rounded border border-medical-100 text-medical-600">
                {searchResults.length} Results
              </span>
            </div>
            <div className="divide-y divide-slate-100">
              {searchResults.length === 0 ? (
                <div className="p-8 text-center text-slate-500">No hospitals found matching your criteria.</div>
              ) : (
                searchResults.map((hospital, idx) => (
                  <div key={idx} className="p-4 hover:bg-slate-50 transition-colors flex items-start gap-3">
                    <MapPin className="w-5 h-5 text-medical-500 mt-1 flex-shrink-0" />
                    <div>
                      <h4 className="font-medium text-slate-900">{hospital["HOSPITAL NAME"]}</h4>
                      <p className="text-sm text-slate-500 mt-0.5">{hospital.Address}</p>
                      <span className="inline-block mt-2 text-xs font-semibold text-slate-400 uppercase tracking-wide">
                        {hospital.CITY}
                      </span>
                    </div>
                  </div>
                ))
              )}
            </div>
          </div>
        )}

      </main>

      {/* Footer / Transcript Log (Optional but good for UX) */}
      <footer className="bg-white border-t border-slate-200 py-4 px-6 text-center text-slate-400 text-sm">
        <p>Made by <span className="font-semibold text-medical-600">Aryan Kumar</span> for Loop Health • Powered by Gemini Live API</p>
      </footer>
    </div>
  );
};

export default App;