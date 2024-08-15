import React, { useState, useEffect } from 'react';
import ChatWindow from './components/ChatWindow';
import ChatInput from './components/ChatInput';
import ChatHistory from './components/ChatHistory';
import { sendMessageToServer, fetchConversation, fetchChatSessions } from './services/api';

function App() {
  const [messages, setMessages] = useState([]);
  const [sessions, setSessions] = useState([]);
  const [currentSessionId, setCurrentSessionId] = useState(null);

  useEffect(() => {
    loadChatSessions();
  }, []);

  const loadChatSessions = async () => {
    try {
      const response = await fetchChatSessions();
      setSessions(response.data);
    } catch (error) {
      console.error('Error fetching chat sessions:', error);
    }
  };

  const loadConversation = async (session_id) => {
    try {
      const conversation = await fetchConversation(session_id);
      setMessages(conversation.data.conversations);
      setCurrentSessionId(session_id);
    } catch (error) {
      console.error('Error fetching conversation:', error);
    }
  };

  const handleSendMessage = async (messageContent) => {
    const newMessage = {
      sender: 'user',
      content: messageContent,
      timestamp: new Date().toISOString(),
    };

    try {
      const response = await sendMessageToServer(messageContent, currentSessionId);

      if (!currentSessionId) {
        setCurrentSessionId(response.data.session_id);
        loadChatSessions();
      }

      setMessages((prevMessages) => [...prevMessages, newMessage]);

      const botMessage = {
        sender: 'bot',
        content: response.data.bot_message,
        timestamp: new Date().toISOString(),
      };
      setMessages((prevMessages) => [...prevMessages, botMessage]);

    } catch (error) {
      console.error('Error sending message:', error.response?.data || error.message);
    }
  };

  const startNewChat = () => {
    setMessages([]);
    setCurrentSessionId(null);
  };

  return (
    <div className="container-fluid">
      <div className="row vh-100">
        <div className="col-md-3 p-0 bg-light border-right">
          <ChatHistory sessions={sessions} loadConversation={loadConversation} startNewChat={startNewChat} activeSessionId={currentSessionId}/>
        </div>
        <div className="col-md-9 p-0">
          <ChatWindow messages={messages} />
          <ChatInput onSendMessage={handleSendMessage} />
        </div>
      </div>
    </div>
  );
}

export default App;
