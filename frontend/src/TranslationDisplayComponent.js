import React, { useState } from 'react';

function TranslationDisplayComponent({ws}) {
  const [isLoading, setIsLoading] = useState(false);

  const sendMessage = () => {
    if (ws) {
        setIsLoading(true);
        ws.send(JSON.stringify({ type: "translation", data: "Spanish" }));
    }
  };

  return (
    <div>
      <button onClick={sendMessage} disabled={isLoading}>
        {isLoading ? 'Loading...' : 'Translate'}
      </button>
    </div>
  );
}

export default TranslationDisplayComponent;