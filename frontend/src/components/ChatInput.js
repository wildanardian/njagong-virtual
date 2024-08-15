import React, { useState } from 'react';

function ChatInput({ onSendMessage }) {
    const [message, setMessage] = useState('');

    const handleSend = () => {
        if (message.trim()) {
            onSendMessage(message);
            setMessage('');
        }
    };

    return (
        <div className="chat-input p-3 bg-light border-top">
            <div className="input-group">
                <input
                    type="text"
                    className="form-control"
                    value={message}
                    onChange={(e) => setMessage(e.target.value)}
                    onKeyPress={(e) => e.key === 'Enter' && handleSend()}
                    placeholder="Type your message..."
                />
                <div className="input-group-append">
                    <button className="btn btn-primary" onClick={handleSend}>Send</button>
                </div>
            </div>
        </div>
    );
}

export default ChatInput;
