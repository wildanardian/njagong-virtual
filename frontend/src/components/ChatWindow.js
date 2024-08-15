import moment from 'moment';

import React from 'react';


function ChatWindow({ messages = [] }) {
    return (
        <div className="chat-window p-3" style={{ height: 'calc(100vh - 75px)', overflowY: 'scroll' }}>
            {messages.length > 0 ? (
                messages.map((message, index) => (
                    <div key={index} className={`mb-2 d-flex ${message.sender === 'user' ? 'justify-content-end' : 'justify-content-start'}`}>
                        <div className={`p-3 rounded ${message.sender === 'user' ? 'bg-success text-white' : 'bg-light text-secondary'}`} style={{
                            minWidth: '15%',
                            maxWidth: '50%',
                            textAlign: message.sender === 'user' ? 'right' : 'left',
                        }}>
                            <p className='fw-bold text-warning mb-1'>{message.sender}</p>
                            <p className='mb-1'>{message.content}</p>
                            <div className="mt-1 d-flex justify-content-end">
                                <small className={` ${message.sender === 'user' ? 'text-light' : 'text-muted'} `} style={{ fontSize: '0.75rem' }}>
                                    {moment(message.created_at).format('h:mm a')}
                                </small>
                            </div>
                        </div>
                    </div>
                ))
            ) : (
                <div>No messages found for this session.</div>
            )}
        </div>
    );
}

export default ChatWindow;
