from fastapi import FastAPI, WebSocket
from fastapi.middleware.cors import CORSMiddleware
from IEPAssistant import IEPAssistant
from openai import OpenAI
import io, json

app = FastAPI()

app.add_middleware(
    CORSMiddleware,
    allow_origins=["*"],  # Allows all domains
    allow_credentials=True,
    allow_methods=["*"],  # Allows all methods
    allow_headers=["*"],  # Allows all headers
)

@app.websocket("/ws")
async def websocket_endpoint(websocket: WebSocket):
    await websocket.accept()
    print('Websocket Accepted')
    client = OpenAI(api_key='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')
    assistant = IEPAssistant(client)
    while True:
        websocket_data = await websocket.receive()
        if "bytes" in websocket_data:
            file_data = websocket_data["bytes"]
            print('File Data Parsed')
            iep_data = io.BufferedReader(io.BytesIO(file_data))
            assistant.config_iep(iep_data)
            print('File Data Configured for chatbot')
        elif "text" in websocket_data:
            text_data = json.loads(websocket_data["text"])
            text_type = text_data["type"]
            if text_type == "message":
                print(text_data)
                message = text_data["data"]
                print('Message Data Parsed')
                assistant.add_message(message)
                print('Message Data Configured')
                if assistant.assistant_id:
                    assistant.run()
                    print('Running Assistant...')
                    response = assistant.get_latest_message()
                    print('Got Response')
                    await websocket.send_text(json.dumps({"type": "response", "message": response}))
                    print('Response Sent')
            #elif text_type == 'translation':

