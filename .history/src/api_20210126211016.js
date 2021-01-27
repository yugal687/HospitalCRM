import axios from 'axios';

let headers = {};

if (localStorage.getItem('token)) {
    headers.Authorization = `Bearer ${localStorage.token}`;
}

const axiosInstance = axios.create({
    baseURL: `http://127.0.0.1:8000/api`,
    headers,
});


export default axiosInstance;