import React, { useState, useEffect } from 'react';
import FileUploadComponent from './FileUploadComponent';
import MessageDisplayComponent from './MessageDisplayComponent';
import TranslationDisplayComponent from './TranslationDisplayComponent';

function App() {
    const [ws, setWs] = useState(null);

    useEffect(() => {
        // Initialize WebSocket connection
        const webSocket = new WebSocket('ws://localhost:8000/ws');
        setWs(webSocket);

        // Clean up on component unmount
        return () => {
            if (webSocket) {
                webSocket.close();
            }
        };
    }, []);

    return (
        <div>
            <FileUploadComponent ws={ws} />
            <TranslationDisplayComponent ws={ws}/>
            <MessageDisplayComponent ws={ws} />
        </div>
    );
}

export default App;