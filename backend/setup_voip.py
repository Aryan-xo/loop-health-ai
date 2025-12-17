
import os
from twilio.rest import Client
from dotenv import load_dotenv

load_dotenv()

account_sid = os.getenv("TWILIO_ACCOUNT_SID")
auth_token = os.getenv("TWILIO_AUTH_TOKEN")
friendly_name = "Loop AI Voice Bridge"

try:
    client = Client(account_sid, auth_token)
    
    # Check if exists
    apps = client.applications.list(friendly_name=friendly_name, limit=1)
    
    if apps:
        app_sid = apps[0].sid
        print(f"EXISTING_APP_SID={app_sid}")
    else:
        # Create new
        # Note: We set a placeholder Voice URL. User might need to update this to their ngrok.
        app = client.applications.create(
            friendly_name=friendly_name,
            voice_method='POST',
            voice_url='http://example.com/voice' 
        )
        app_sid = app.sid
        print(f"NEW_APP_SID={app_sid}")
        
    # Append to .env if not present
    with open(".env", "a") as f:
        f.write(f"\nTWIML_APP_SID={app_sid}")

except Exception as e:
    print(f"ERROR={e}")
