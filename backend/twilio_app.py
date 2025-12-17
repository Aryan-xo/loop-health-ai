import os
import json
import asyncio
import base64
import audioop
import pandas as pd
from fastapi import FastAPI, WebSocket, Request
from fastapi.responses import HTMLResponse, JSONResponse
from twilio.twiml.voice_response import VoiceResponse, Connect, Stream
from dotenv import load_dotenv
import websockets

load_dotenv()

# --- Configuration ---
GEMINI_API_KEY = os.getenv("GEMINI_API_KEY")
PORT = 8000
HOST = "localhost"

# --- Data Loading ---
# We load the data server-side for the phone agent
import pathlib
try:
    # Resolve path relative to this file (backend/twilio_app.py) -> parent -> csv
    base_dir = pathlib.Path(__file__).parent.parent
    csv_path = base_dir / "List of GIPSA Hospitals - Sheet1.csv"
    
    df = pd.read_csv(csv_path).fillna("")
    HOSPITALS_DB = df.to_dict(orient="records")
    print(f"Loaded {len(HOSPITALS_DB)} hospitals.")
except Exception as e:
    print(f"Error loading CSV: {e}")
    HOSPITALS_DB = []

def search_hospitals(city: str, keyword: str = "") -> list:
    results = HOSPITALS_DB
    
    if city:
        norm_city = city.lower().strip()
        # Aliases
        aliases = {
            "bangalore": "bengaluru",
            "bombay": "mumbai", 
            "calcutta": "kolkata",
            "madras": "chennai",
            "gurgaon": "gurugram"
        }
        if norm_city in aliases:
            norm_city = aliases[norm_city]

        results = [h for h in results if norm_city in h.get("CITY", "").lower()]
    
    if keyword:
        terms = keyword.lower().strip().split()
        results = [
            h for h in results 
            if all(term in (h.get("HOSPITAL NAME", "") + " " + h.get("Address", "")).lower() for term in terms)
        ]
        
    return results[:5] # Limit to top 5

# --- App ---
from fastapi.middleware.cors import CORSMiddleware
from pydantic import BaseModel

app = FastAPI()

# Add CORS for React App
app.add_middleware(
    CORSMiddleware,
    allow_origins=["*"],
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)

SYSTEM_INSTRUCTION = """
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
"""

TOOLS = [
    {
        "function_declarations": [
            {
                "name": "find_hospitals",
                "description": "Search for hospitals in the network database.",
                "parameters": {
                    "type": "OBJECT",
                    "properties": {
                        "city": {"type": "STRING", "description": "The city to search in."},
                        "keyword": {"type": "STRING", "description": "Optional keyword filter."}
                    },
                    "required": ["city"]
                }
            },
            {
                "name": "end_interaction",
                "description": "Ends the conversation immediately. Use this for out-of-scope/human handoff cases.",
                "parameters": {"type": "OBJECT", "properties": {}}
            }
        ]
    }
]

class EscalationRequest(BaseModel):
    reason: str = "Out of scope"

@app.post("/escalate")
async def escalate(request: EscalationRequest):
    """Trigger an outbound call to human agent."""
    print("Escalating to human agent...")
    try:
        api_key_sid = os.getenv("TWILIO_API_KEY_SID")
        api_key_secret = os.getenv("TWILIO_API_KEY_SECRET")
        account_sid = os.getenv("TWILIO_ACCOUNT_SID") # We need Account SID here too if not implicit in key (Key is usually reliable)
        # Actually with API Key, we initialize Client(key_sid, key_secret, account_sid)
        # We need the AccountSID.
        # Let's try to grab it from env or assume user provided it. 
        # The user provided SID SK... which is an API Key, and Secret.
        # But Client init needs Account SID for context usually.
        # We will use the one extracted from incoming call if available, or env.
        # We'll rely on TWILIO_ACCOUNT_SID in .env (I will ask user to add it).
        
        tw_account_sid = os.getenv("TWILIO_ACCOUNT_SID") 
        tw_phone_number = os.getenv("TWILIO_PHONE_NUMBER")
        
        if not tw_account_sid or not tw_phone_number:
            return JSONResponse({"status": "error", "message": "Missing TWILIO_ACCOUNT_SID or TWILIO_PHONE_NUMBER in .env"}, status_code=500)

        from twilio.rest import Client
        client = Client(api_key_sid, api_key_secret, tw_account_sid)
        
        call = client.calls.create(
            to="+918809758416",
            from_=tw_phone_number,
            twiml='<Response><Say>Alert. A web user has requested human assistance. Please check the dashboard.</Say></Response>'
        )
        return {"status": "success", "call_sid": call.sid}
    except Exception as e:
        print(f"Escalation failed: {e}")
        return JSONResponse({"status": "error", "message": str(e)}, status_code=500)

from twilio.jwt.access_token import AccessToken
from twilio.jwt.access_token.grants import VoiceGrant

@app.get("/token")
async def get_token():
    """Generate Access Token for Browser VoIP."""
    try:
        account_sid = os.getenv("TWILIO_ACCOUNT_SID")
        api_key = os.getenv("TWILIO_API_KEY_SID")
        api_secret = os.getenv("TWILIO_API_KEY_SECRET")
        twiml_app_sid = os.getenv("TWIML_APP_SID")
        
        if not all([account_sid, api_key, api_secret, twiml_app_sid]):
            return JSONResponse({"status": "error", "message": "Missing Twilio Credentials for Token"}, status_code=500)

        # Create access token with voice grant
        token = AccessToken(account_sid, api_key, api_secret, identity="browser_user")
        
        # Grant access to TwiML App
        voice_grant = VoiceGrant(
            outgoing_application_sid=twiml_app_sid,
            incoming_allow=True, 
        )
        token.add_grant(voice_grant)
        
        return {"token": token.to_jwt()}
    except Exception as e:
        print(f"Token generation failed: {e}")
        return JSONResponse({"status": "error", "message": str(e)}, status_code=500)

@app.post("/voice")
async def voice(request: Request):
    """Handle incoming call from Browser (TwiML)."""
    response = VoiceResponse()
    
    # Dial the Human Agent
    dial = response.dial(caller_id=os.getenv("TWILIO_PHONE_NUMBER"))
    dial.number("+918809758416") # The Human Agent Number
    
    return HTMLResponse(content=str(response), media_type="application/xml")

@app.post("/incoming-call")
async def incoming_call(request: Request):
    """Handle incoming call from Twilio."""
    # Capture CallSid and AccountSid from form data for use in the websocket
    form_data = await request.form()
    call_sid = form_data.get("CallSid")
    account_sid = form_data.get("AccountSid")
    
    response = VoiceResponse()
    connect = Connect()
    # Pass metadata in the stream URL
    stream = Stream(url=f"wss://{request.headers.get('host')}/media-stream?CallSid={call_sid}&AccountSid={account_sid}")
    connect.append(stream)
    response.append(connect)
    return HTMLResponse(content=str(response), media_type="application/xml")

@app.websocket("/media-stream")
async def media_stream(websocket: WebSocket):
    await websocket.accept()
    
    # Extract params from query string
    query_params = dict(websocket.query_params)
    call_sid = query_params.get("CallSid")
    account_sid = query_params.get("AccountSid")
    
    print(f"Twilio Client Connected. CallSid: {call_sid}")

    # Initialize Twilio Client for Call Updates (Transfer)
    # We use the API Key SID/Secret from env, and the dynamic Account SID
    twilio_client = None
    try:
        api_key_sid = os.getenv("TWILIO_API_KEY_SID")
        api_key_secret = os.getenv("TWILIO_API_KEY_SECRET")
        if api_key_sid and api_key_secret and account_sid:
            from twilio.rest import Client
            twilio_client = Client(api_key_sid, api_key_secret, account_sid)
    except Exception as e:
        print(f"Failed to init Twilio Client: {e}")

    # Connect to Gemini Live (WebSocket)
    # Using the v1alpha version for Multimodal Live
    url = f"wss://generativelanguage.googleapis.com/ws/google.ai.generativelanguage.v1alpha.GenerativeService.BidiGenerateContent?key={GEMINI_API_KEY}"
    
    try:
        async with websockets.connect(url) as gemini_ws:
            # 1. Send Setup Message
            await gemini_ws.send(json.dumps({
                "setup": {
                    "model": "models/gemini-2.0-flash-exp", 
                    "generation_config": {
                        "response_modalities": ["AUDIO"],
                        "speech_config": {
                            "voice_config": {"prebuilt_voice_config": {"voice_name": "Aoede"}} 
                        }
                    },
                    "system_instruction": {"parts": [{"text": SYSTEM_INSTRUCTION}]},
                    "tools": TOOLS
                }
            }))

            # 2. Receive Setup Confirmation
            setup_msg = await gemini_ws.recv()
            print("Gemini Setup:", setup_msg)
            
            # 3. Start Bi-directional streaming
            stream_sid = None

            async def twilio_receiver():
                nonlocal stream_sid
                try:
                    while True:
                        message = await websocket.receive_text()
                        data = json.loads(message)
                        
                        if data["event"] == "start":
                            stream_sid = data["start"]["streamSid"]
                            print(f"Twilio Stream started: {stream_sid}")
                        
                        elif data["event"] == "media":
                            # Twilio sends mulaw 8000Hz. Gemini expects PCM 16000Hz.
                            payload = base64.b64decode(data["media"]["payload"])
                            # Decode mulaw -> pcm
                            pcm = audioop.ulaw2lin(payload, 2)
                            # Resample 8000 -> 16000
                            pcm_16k, _ = audioop.ratecv(pcm, 2, 1, 8000, 16000, None)
                            # Send to Gemini
                            await gemini_ws.send(json.dumps({
                                "realtime_input": {
                                    "media_chunks": [{
                                        "mime_type": "audio/pcm",
                                        "data": base64.b64encode(pcm_16k).decode("utf-8")
                                    }]
                                }
                            }))
                            
                        elif data["event"] == "stop":
                            print("Twilio Stream stopped")
                            break
                except Exception as e:
                    print(f"Twilio Receive Error: {e}")

            async def gemini_receiver():
                try:
                    while True:
                        msg = await gemini_ws.recv()
                        response = json.loads(msg)
                        
                        # Handle Audio
                        if "serverContent" in response:
                            model_turn = response["serverContent"].get("modelTurn")
                            if model_turn:
                                for part in model_turn.get("parts", []):
                                    if "inlineData" in part:
                                        # Audio from Gemini is typically PCM 24000Hz
                                        pcm_data = base64.b64decode(part["inlineData"]["data"])
                                        # Resample 24000 -> 8000
                                        pcm_8k, _ = audioop.ratecv(pcm_data, 2, 1, 24000, 8000, None)
                                        # Encode pcm -> mulaw
                                        mulaw_data = audioop.lin2ulaw(pcm_8k, 2)
                                        
                                        # Send to Twilio
                                        if stream_sid:
                                            await websocket.send_text(json.dumps({
                                                "event": "media",
                                                "streamSid": stream_sid,
                                                "media": {
                                                    "payload": base64.b64encode(mulaw_data).decode("utf-8")
                                                }
                                            }))
                        
                        # Handle Tool Calls
                        if "toolCall" in response:
                            function_calls = response["toolCall"].get("functionCalls", [])
                            function_responses = []
                            
                            for fc in function_calls:
                                name = fc["name"]
                                args = fc["args"]
                                print(f"Tool Call: {name}({args})")
                                
                                result = {}
                                if name == "find_hospitals":
                                    result = search_hospitals(args.get("city"), args.get("keyword"))
                                elif name == "end_interaction":
                                    # Human Handoff / Transfer
                                    print("Initiating Human Handoff...")
                                    if twilio_client and call_sid:
                                        try:
                                            # Update the call to redirect to the human number
                                            # We use TwiML <Dial>
                                            transfer_twiml = f'<Response><Say>Please hold while I connect you to a human agent.</Say><Dial>+918809758416</Dial></Response>'
                                            twilio_client.calls(call_sid).update(twiml=transfer_twiml)
                                            print("Call successfully transferred.")
                                        except Exception as e:
                                            print(f"Transfer failed: {e}")
                                    
                                    result = {"status": "transferring"}
                                    # Break to stop the stream, as call state is changing
                                    function_responses.append({
                                        "id": fc["id"],
                                        "name": name,
                                        "response": {"result": result}
                                    })
                                    # Send response and break
                                    await gemini_ws.send(json.dumps({
                                        "tool_response": {
                                            "function_responses": function_responses
                                        }
                                    }))
                                    return # Exit receiver
                                
                                function_responses.append({
                                    "id": fc["id"],
                                    "name": name,
                                    "response": {"result": result}
                                })
                            
                            # Send response back (if not transferred)
                            await gemini_ws.send(json.dumps({
                                "tool_response": {
                                    "function_responses": function_responses
                                }
                            }))

                except Exception as e:
                    print(f"Gemini Receive Error: {e}")

            # Run both
            await asyncio.gather(twilio_receiver(), gemini_receiver())
            
    except Exception as e:
        print(f"Connection Error: {e}")
        await websocket.close()
