// src/services/api.js
import axios from 'axios';

const API_BASE_URL = 'http://localhost:8000/api';

export const sendMessageToServer = (message, sessionId) => {
    return axios.post(`${API_BASE_URL}/chat/send`, {
        message,
        session_id: sessionId,
    });
};

export const fetchChatSessions = () => {
    return axios.get(`${API_BASE_URL}/chat/sessions`);
};

export const fetchConversation = (session_id) => {
    return axios.get(`${API_BASE_URL}/chat/sessions/${session_id}`);
};
