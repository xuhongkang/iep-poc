import React from 'react';

function FileUploadComponent({ ws }) {
    const sendFile = (file) => {
        if (ws) {
            const reader = new FileReader();
            reader.onload = function(event) {
                ws.send(event.target.result); // Sending binary data directly
            };
            reader.readAsArrayBuffer(file);
        }
    };

    const handleFileChange = (event) => {
        const file = event.target.files[0];
        if (file) {
            sendFile(file);
        }
    };

    return (
        <div>
            <input type="file" onChange={handleFileChange} />
        </div>
    );
}

export default FileUploadComponent;