
import os
from twilio.rest import Client
from dotenv import load_dotenv

load_dotenv()

account_sid = os.getenv("TWILIO_ACCOUNT_SID")
auth_token = os.getenv("TWILIO_AUTH_TOKEN")
twiml_app_sid = os.getenv("TWIML_APP_SID")

target_url = "https://dirty-wombats-double.loca.lt/voice"

try:
    client = Client(account_sid, auth_token)

    if not twiml_app_sid:
         # Fallback search
         apps = client.applications.list(friendly_name="Loop AI Voice Bridge", limit=1)
         if apps:
             twiml_app_sid = apps[0].sid
         else:
             print("ERROR: app_sid not found")
             exit(1)
             
    app = client.applications(twiml_app_sid).update(
        voice_url=target_url
    )
    print(f"SUCCESS: Updated to {target_url}")

except Exception as e:
    print(f"ERROR={e}")
