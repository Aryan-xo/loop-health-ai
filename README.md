# Loop AI - Smart Hospital Network Assistant 🏥🤖

![Loop AI Banner](https://img.shields.io/badge/Status-Live-success) ![Stack](https://img.shields.io/badge/Tech-React%20%7C%20Python%20%7C%20Gemini%20%7C%20Twilio-blue)

**Loop AI** is a next-generation voice assistant designed to help users navigate their hospital network effectively. It combines the power of **Google's Gemini Multimodal Live API** for natural conversation with **Twilio Voice** for seamless human escalation.

## 🚀 Live Demo
**Try it here:** [https://loop-health-em26wgiwi-aryan-xos-projects.vercel.app/](https://loop-health-em26wgiwi-aryan-xos-projects.vercel.app/)

*(Note: Requires microphone access. If the AI cannot help, it can escalate to a real phone call!)*

## ✨ Key Features

-   **🎙️ Voice-First Interface**: Real-time, low-latency voice interaction using WebSockets.
-   **🧠 Intelligent Search**:
    -   Finds hospitals by City (e.g., "Bangalore", "Mumbai") and Keywords.
    -   Handles fuzzy matching and city aliases (e.g., "Bangalore" -> "Bengaluru").
    -   embedded hospital database for instant results.
-   **🚨 Emergency Protocol**: Immediately detects life-threatening keywords (e.g., "Heart attack") and advises calling emergency services (112) instead of searching.
-   **📞 Human Escalation (VoIP)**:
    -   Seamlessly transitions from AI to a **Web-to-Phone** call.
    -   If the user asks for a human, the browser calls a real phone number via Twilio.
-   **⚡ Modern Stack**: Built with React (Vite), TailwindCSS, and Python (FastAPI).

## 🛠️ Architecture

The project is split into two parts:

1.  **Frontend (`/`)**:
    -   **React + Vite**: Handles the UI, Microphone input, and Audio playback.
    -   **Twilio Device SDK**: Manages the VoIP connection for human escalation.
    -   **Deployment**: Vercel.

2.  **Backend (`/backend`)**:
    -   **FastAPI (Python)**: Orchestrates the connection between the Browser, Gemini, and Twilio.
    -   **Gemini Live API**: Processes audio input and generates audio responses.
    -   **Deployment**: Render.

## 🚀 Getting Started Locally

### Prerequisites
-   Node.js & npm
-   Python 3.11+
-   Google Gemini API Key
-   Twilio Account (Account SID, Auth Token, API Key/Secret)

### 1. Backend Setup
```bash
cd backend
python3 -m venv venv
source venv/bin/activate
pip install -r requirements.txt
```

Create a `.env` file in the root:
```env
GEMINI_API_KEY=your_key
TWILIO_ACCOUNT_SID=your_sid
TWILIO_AUTH_TOKEN=your_token
TWILIO_PHONE_NUMBER=your_twilio_number
TWIML_APP_SID=your_twiml_app_sid
TWILIO_API_KEY_SID=your_api_key
TWILIO_API_KEY_SECRET=your_api_secret
```

Run the server:
```bash
python3 -m uvicorn backend.twilio_app:app --reload --port 8000
```

### 2. Frontend Setup
```bash
# In the root folder
npm install
```

Create `.env.local`:
```env
VITE_BACKEND_URL=http://localhost:8000
VITE_GEMINI_API_KEY=your_gemini_key
```

Run the app:
```bash
npm run dev
```

## ☁️ Deployment

This project is configured for **Push-to-Deploy**:

-   **Backend**: Deployed on **Render** (Python 3.11).
-   **Frontend**: Deployed on **Vercel**.
-   **Configuration**: See `deployment_guide.md` for detailed steps.

## 👨‍💻 Author
**Made by Aryan Kumar for Loop Health**

---
*Powered by Google Gemini 2.0 Flash Exp & Twilio.*
