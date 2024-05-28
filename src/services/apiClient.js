// src/services/apiClient.js

import axios from 'axios';

const apiClient = axios.create({
    baseURL: 'http://localhost:8081/api', // Adjust this to your backend API URL
    headers: {
        'Content-Type': 'application/json',
    },
});

export default apiClient;
