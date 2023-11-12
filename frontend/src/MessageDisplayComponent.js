import React, { useState, useEffect } from 'react';

function MessageDisplayComponent({ ws }) {
    const [message, setMessage] = useState('');
    const [response, setResponse] = useState('');

    useEffect(() => {
        if (ws) {
            ws.onmessage = (event) => {
                const data = JSON.parse(event.data);
                if (data.type === "response") {
                    setResponse(data.message);
                }
            };
        }
    }, [ws]);

    const sendMessage = () => {
        if (ws) {
            ws.send(JSON.stringify({ type: "message", data: message }));
        }
    };

    return (
        <div>
            <input type="text" value={message} onChange={(e) => setMessage(e.target.value)} />
            <button onClick={sendMessage}>Send Message</button>
            <div>Response: {response}</div>
        </div>
    );
}

export default MessageDisplayComponent;
