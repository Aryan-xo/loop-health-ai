# 🚀 Zero-to-Host: Loop AI Deployment Guide

I have pre-configured the codebase for instant deployment. You do not need to edit any code. Just follow these steps to put your app online.

## PART 1: The Backend (Python)
*We will use **Render** (Free Tier available) to host the brain and voice/phone logic.*

1.  **Push to GitHub**:
    -   Ensure this entire project folder is uploaded to a GitHub repository.

2.  **Create Service on Render**:
    -   Go to [dashboard.render.com](https://dashboard.render.com).
    -   Click **New +** -> **Web Service**.
    -   Connect your GitHub repository.

3.  **Configure Settings** (Copy exactly):
    -   **Name**: `loop-health-backend` (or similar)
    -   **Region**: Singapore (likely closest to India) or Frankfurt.
    -   **Root Directory**: `.` (Leave empty/default)
    -   **Runtime**: **Python 3**
    -   **Build Command**: `pip install -r backend/requirements.txt`
    -   **Start Command**: `uvicorn backend.twilio_app:app --host 0.0.0.0 --port $PORT`

4.  **Environment Variables**:
    -   Scroll down to "Environment Variables" and add these keys from your local `.env`:
        -   `GEMINI_API_KEY`
        -   `TWILIO_ACCOUNT_SID`
        -   `TWILIO_AUTH_TOKEN`
        -   `TWILIO_PHONE_NUMBER`
        -   `TWIML_APP_SID`
        -   `TWILIO_API_KEY_SID`
        -   `TWILIO_API_KEY_SECRET`

5.  **Hit Deploy**.
    -   Once finished, Render gives you a URL (e.g., `https://loop-backend-xyz.onrender.com`).
    -   **COPY THIS URL.**

6.  **Update Twilio**:
    -   Go to [Twilio Console > TwiML Apps](https://console.twilio.com/us1/develop/phone-numbers/manage/twiml-apps).
    -   Click "Loop AI Voice Bridge".
    -   Update **Voice URL** to: `https://<YOUR-RENDER-URL>/voice`
    -   Save.

---

## PART 2: The Frontend (React)
*We will use **Vercel** to host the website.*

1.  **Import to Vercel**:
    -   Go to [vercel.com/new](https://vercel.com/new).
    -   Import the *same* GitHub repository.

2.  **Configure Project**:
    -   **Framework Preset**: Vite (should detect auto).
    -   **Root Directory**: `.` (Leave default).

3.  **Environment Variables**:
    -   Add this ONE key so the frontend can find the backend:
    -   Key: `VITE_BACKEND_URL`
    -   Value: `https://<YOUR-RENDER-URL>` (No trailing slash).

4.  **Deploy**:
    -   Click Deploy.
    -   Vercel will build and give you a domain (e.g., `https://loop-health.vercel.app`).

---

## PART 3: You're Live!
-   Open your Vercel link.
-   Speak to the Agent.
-   Ask it to "Escalate".
-   Your phone will ring. The web user will talk to you.
-   **It works globally.** No ngrok needed anymore!
