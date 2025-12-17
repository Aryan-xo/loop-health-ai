/**
 * Audio processing utilities for handling PCM streams between Browser and Gemini API.
 */

export class AudioStreamer {
  private audioContext: AudioContext | null = null;
  private mediaStream: MediaStream | null = null;
  private processor: ScriptProcessorNode | null = null;
  private source: MediaStreamAudioSourceNode | null = null;
  private nextStartTime: number = 0;
  private isRecording: boolean = false;

  constructor() {
    const AudioContextClass = window.AudioContext || (window as any).webkitAudioContext;
    if (AudioContextClass) {
      // Try to create with 16k, but browser might ignore
      this.audioContext = new AudioContextClass({ sampleRate: 16000 });
    }
  }

  // Explicitly initialize mic and context (to be called from UI gesture)
  async initialize() {
    if (!this.audioContext) return;

    if (this.audioContext.state === 'suspended') {
        await this.audioContext.resume();
    }

    // Get permission and stream immediately
    // This ensures permissions are prompted while in the user gesture context
    this.mediaStream = await navigator.mediaDevices.getUserMedia({ audio: true });
  }

  async startRecording(onData: (blob: Blob) => void) {
    if (!this.audioContext) return;
    
    // If initialize wasn't called or failed, try again (though might fail gesture requirements)
    if (!this.mediaStream) {
        this.mediaStream = await navigator.mediaDevices.getUserMedia({ audio: true });
    }

    if (this.audioContext.state === 'suspended') {
      await this.audioContext.resume();
    }

    try {
      this.source = this.audioContext.createMediaStreamSource(this.mediaStream);
      
      // Buffer size 4096 gives decent latency/performance balance
      this.processor = this.audioContext.createScriptProcessor(4096, 1, 1);
      
      this.processor.onaudioprocess = (e) => {
        if (!this.isRecording) return;
        
        const inputData = e.inputBuffer.getChannelData(0);
        
        // Check if we need to downsample
        let processedData = inputData;
        if (this.audioContext && this.audioContext.sampleRate > 16000) {
             // Simple decimation if sample rate is higher (e.g. 48000 -> 16000)
             // This is crude but prevents chipmunk effect if browser refused 16k
             const ratio = Math.floor(this.audioContext.sampleRate / 16000);
             if (ratio > 1) {
                 const newLength = Math.floor(inputData.length / ratio);
                 const downsampled = new Float32Array(newLength);
                 for (let i = 0; i < newLength; i++) {
                     downsampled[i] = inputData[i * ratio];
                 }
                 processedData = downsampled;
             }
        }

        // Convert Float32 to Int16 PCM
        const pcmData = this.floatTo16BitPCM(processedData);
        
        // Create a blob from the PCM data
        const blob = new Blob([pcmData], { type: 'audio/pcm' });
        onData(blob);
      };

      this.source.connect(this.processor);
      this.processor.connect(this.audioContext.destination); // Required for script processor to run
      this.isRecording = true;
    } catch (err) {
      console.error("Error accessing microphone:", err);
      throw err;
    }
  }

  stopRecording() {
    this.isRecording = false;
    // Don't stop the media stream tracks here to allow quick reconnection, 
    // unless we want to fully release hardware.
    // For this app, releasing is safer.
    if (this.mediaStream) {
      this.mediaStream.getTracks().forEach(track => track.stop());
      this.mediaStream = null;
    }
    if (this.processor && this.source) {
        this.source.disconnect();
        this.processor.disconnect();
    }
  }

  // Play incoming base64 PCM audio
  async playAudioChunk(base64Audio: string, onEnded?: () => void) {
    if (!this.audioContext) return;

    // Ensure playback context is running
    if (this.audioContext.state === 'suspended') {
        await this.audioContext.resume();
    }

    try {
      // Decode base64
      const binaryString = window.atob(base64Audio);
      const len = binaryString.length;
      const bytes = new Uint8Array(len);
      for (let i = 0; i < len; i++) {
        bytes[i] = binaryString.charCodeAt(i);
      }

      // Create Int16Array view
      const int16Data = new Int16Array(bytes.buffer);
      
      // Convert to AudioBuffer (Float32)
      // Gemini usually sends 24000Hz output
      const outputSampleRate = 24000; 
      const audioBuffer = this.audioContext.createBuffer(1, int16Data.length, outputSampleRate);
      const channelData = audioBuffer.getChannelData(0);
      
      for (let i = 0; i < int16Data.length; i++) {
        channelData[i] = int16Data[i] / 32768.0;
      }

      // Schedule playback
      const source = this.audioContext.createBufferSource();
      source.buffer = audioBuffer;
      source.connect(this.audioContext.destination);

      const currentTime = this.audioContext.currentTime;
      const startTime = Math.max(currentTime, this.nextStartTime);
      
      source.start(startTime);
      this.nextStartTime = startTime + audioBuffer.duration;

      if (onEnded) {
        source.onended = () => {
             // Reset start time if we fell behind significantly or stream ended
             if (this.audioContext && this.audioContext.currentTime >= this.nextStartTime) {
                 onEnded();
             }
        };
      }
      
    } catch (e) {
      console.error("Error playing audio chunk", e);
    }
  }
  
  stopPlayback() {
     this.nextStartTime = 0;
     // Note: To truly stop currently playing sources, we'd need to track active source nodes.
     // For this simple implementation, we just reset the cursor.
  }

  private floatTo16BitPCM(input: Float32Array) {
    const output = new Int16Array(input.length);
    for (let i = 0; i < input.length; i++) {
      const s = Math.max(-1, Math.min(1, input[i]));
      output[i] = s < 0 ? s * 0x8000 : s * 0x7FFF;
    }
    return output.buffer;
  }
}