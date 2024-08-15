import React from 'react';
import moment from 'moment';

function ChatHistory({ sessions, loadConversation, startNewChat, activeSessionId }) {
  return (
    <div className="p-3">
      <h4>Chat Sessions</h4>
      <ul className="list-group">
        {sessions.map(session => (
          <li
            key={session.session_id}
            className={`list-group-item list-group-item-action d-flex justify-content-between ${session.session_id === activeSessionId ? 'active' : ''}`}
            onClick={() => loadConversation(session.session_id)}
          >
            <div>
              <strong>{session.session_id}</strong> 
            </div>
            <div>
              <small>{moment(session.created_at).format('MMMM Do, h:mm a')}</small>
            </div>
          </li>
        ))}
      </ul>
      <button className="btn btn-primary mt-3" onClick={startNewChat}>Start New Chat</button>
    </div>
  );
}

export default ChatHistory;
