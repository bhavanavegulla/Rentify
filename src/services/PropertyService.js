import axios from 'axios';

const API_URL = 'http://localhost:8081/api/properties/';

class PropertyService {
    getAllProperties(page, size) {
        return axios.get(API_URL + `?page=${page}&size=${size}`);
    }

    getMyProperties() {
        const token = localStorage.getItem('token');
        return axios.get(API_URL + 'my-properties', {
            headers: {
                'Authorization': `Bearer ${token}`
            }
        });
    }

    createProperty(property) {
        const token = localStorage.getItem('token');
        return axios.post(API_URL, property, {
            headers: {
                'Authorization': `Bearer ${token}`
            }
        });
    }

    deleteProperty(id) {
        const token = localStorage.getItem('token');
        return axios.delete(API_URL + id, {
            headers: {
                'Authorization': `Bearer ${token}`
            }
        });
    }

    likeProperty(id) {
        const token = localStorage.getItem('token');
        return axios.put(API_URL + `like/${id}`, {}, {
            headers: {
                'Authorization': `Bearer ${token}`
            }
        });
    }
}

export default new PropertyService();