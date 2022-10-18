import axios from 'axios';

const API = axios.create({ baseURL: 'http://localhost:5000' });

export const login = (data) => API.post('/user/login', data);

export const register = (name, email, password) =>
    API.post('/user/register', { name, email, password });
