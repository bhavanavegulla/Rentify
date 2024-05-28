import axios from 'axios';
const API_URL = 'http://localhost:8081/api/auth/';

class AuthService {
    login(email, password) {
        return axios.post(API_URL + 'login', { email, password })
            .then(response => {
                if (response.data.accessToken) {
                    localStorage.setItem('token', response.data.accessToken);
                }
                return response.data;
            });
    }

    logout() {
        localStorage.removeItem('token');
    }

    register(user) {
        return axios.post(API_URL + 'register', user);
    }
}

export default new AuthService();