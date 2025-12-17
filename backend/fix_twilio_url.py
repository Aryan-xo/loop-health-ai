
import os
from twilio.rest import Client
from dotenv import load_dotenv

load_dotenv()

account_sid = os.getenv("TWILIO_ACCOUNT_SID")
auth_token = os.getenv("TWILIO_AUTH_TOKEN")
phone_number = os.getenv("TWILIO_PHONE_NUMBER")
twiml_app_sid = os.getenv("TWIML_APP_SID")

try:
    client = Client(account_sid, auth_token)
    
    # 1. Find the Active Phone Number record to get its Voice URL
    # We look for the number that matches TWILIO_PHONE_NUMBER
    incoming_numbers = client.incoming_phone_numbers.list(phone_number=phone_number, limit=1)
    
    if not incoming_numbers:
        print("ERROR: Could not find your Twilio Phone Number in the account.")
        exit(1)
        
    active_number = incoming_numbers[0]
    current_voice_url = active_number.voice_url
    
    if not current_voice_url or "ngrok" not in current_voice_url:
        print(f"ERROR: Your phone number URL seems invalid or not set to ngrok: {current_voice_url}")
        exit(1)
        
    print(f"FOUND_WORKING_URL={current_voice_url}")
    
    # Extract Base URL (remove /incoming-call or whatever is at the end)
    # Usually it's https://xxxx.ngrok-free.app/incoming-call
    base_url = current_voice_url.rsplit('/', 1)[0]
    new_voice_url = f"{base_url}/voice"
    
    print(f"TARGET_URL={new_voice_url}")
    
    # 2. Update TwiML App
    if not twiml_app_sid:
        # Try to find it by name if missing from env
        apps = client.applications.list(friendly_name="Loop AI Voice Bridge", limit=1)
        if apps:
            twiml_app_sid = apps[0].sid
        else:
             print("ERROR: Could not find TwiML App SID.")
             exit(1)

    app = client.applications(twiml_app_sid).update(
        voice_url=new_voice_url
    )
    
    print(f"SUCCESS: Updated TwiML App {app.friendly_name}")
    print(f"NEW_VOICE_URL={app.voice_url}")

except Exception as e:
    print(f"ERROR_DETAILS={e}")
