# Loop AI - Intelligent Hospital Network Assistant

> **A Multimodal AI Voice Agent with Data Integration and Human Handoff.**

## 1. Project Overview
"Loop AI" is a production-ready Voice AI assistant designed to help employees navigate their hospital network. It solves the challenge of finding in-network hospitals by parsing a complex dataset (2000+ entries) and providing real-time, voice-based answers.

**Core Problem Solved**:
-   Employees often struggle to find which hospitals are in their insurance network.
-   Static lists (PDF/CSV) are hard to search on mobile.
-   Out-of-scope questions (e.g., "Write a poem") waste AI resources.

**Loop AI Solution**:
-   **Voice Interface**: Talk naturally to the AI.
-   **Intelligent Search**: Finds hospitals by City (e.g., "Bangalore") or Name (e.g., "Manipal").
-   **Guardrails**: Politely rejects unrelated queries.
-   **human Handoff**: **Escalates complex/out-of-scope issues to a human agent via live phone call.**

---

## 2. Key Features

### 🎙️ 1. Multimodal Voice Agent
-   Powered by **Google Gemini 2.0 Flash Exp (Multimodal Live API)**.
-   Real-time streaming audio (WebSocket).
-   Low-latency response (<500ms).

### 🏥 2. Smart Hospital Search
-   **Hybrid Data Architecture**: The 2000+ hospital dataset is embedded client-side for instant access.
-   **Tool Use**: The AI uses a custom `find_hospitals` tool to query the data precisely without hallucinating.

### 📞 3. Omnichannel Escalation (The "Wow" Factor)
-   **Web-to-Phone Bridge**: If the AI cannot help on the web, it triggers a **real phone call** to the human agent.
-   **Direct Talk (VoIP)**: The user can speak directly to the Human Agent through the browser via a WebRTC-to-PSTN bridge.

### 🛡️ 4. Out-of-Scope Handling
-   Strict system instructions prevent the AI from answering non-healthcare questions.
-   Automatically triggers the escalation flow when boundaries are crossed.

---

## 3. Architecture

-   **Frontend**: React (Vite), TypeScript, TailwindCSS.
    -   *Role*: Captures microphone, renders UI, handles local search, executes VoIP calls.
-   **Backend**: Python (FastAPI), Uvicorn.
    -   *Role*: Token generation, TwiML (Call Routing), Phone Escalation API.
-   **Infrastructure**: Twilio (Telephony), Ngrok (Tunneling).

---

## 4. Setup Instructions

### Prerequisites
-   Node.js (v18+)
-   Python (v3.10+)
-   Twilio Account (SID, Auth Token, Purchased Number)
-   Google Gemini API Key

### Step 1: Frontend Setup
1.  Install dependencies:
    ```bash
    npm install
    ```
2.  Start the Web App:
    ```bash
    npm run dev
    ```
3.  Open `http://localhost:5173`.

### Step 2: Backend Setup (Required for Phone Features)
1.  Install Python dependencies:
    ```bash
    pip install -r backend/requirements.txt
    ```
2.  Start the Server:
    ```bash
    python3 -m uvicorn backend.twilio_app:app --port 8000
    ```
3.  Expose Server (in a new terminal):
    ```bash
    ngrok http 8000
    ```

### Step 3: Configuration (.env)
Ensure your `.env` file has the following credentials:
```env
GEMINI_API_KEY=AIza...
TWILIO_ACCOUNT_SID=AC...
TWILIO_AUTH_TOKEN=...
TWILIO_PHONE_NUMBER=+1... (Your Purchased Twilio Number)
TWIML_APP_SID=AP... (Created via script)
```

---

## 5. Usage Guide

1.  **Ask a valid question**:
    -   *"Find me eye hospitals in Bangalore."*
    -   *Response*: AI lists the hospitals verbally and shows them on screen.

2.  **Trigger Escalation (Test Mode)**:
    -   Ask: *"Write a poem about trees."*
    -   *Response*: "I'm sorry, I can't help with that. Escalating..."
    -   *Action*: The browser will **call your phone**.
    -   *Result*: You pick up and talk to the web user directly.

---

## 6. Project Structure
-   `/App.tsx`: Main Frontend Logic (Voice UI, Tool Calling).
-   `/services/hospitalData.ts`: Embedded Hospital Database.
-   `/backend/twilio_app.py`: Backend Orchestrator (VoIP, Tokens).

## 7. Deployment
Want to put this online? See [deployment_guide.md](deployment_guide.md) for instructions on using Vercel & Render.
