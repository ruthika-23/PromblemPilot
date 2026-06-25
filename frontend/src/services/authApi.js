import axios from 'axios';

const API_URL = 'http://localhost:5000/api/auth';

export const register = (userData) => axios.post(`${API_URL}/register`, userData);
export const login = (userData) => axios.post(`${API_URL}/login`, userData);
export const getProfile = () => axios.get(`${API_URL}/profile`);
export const updateProfile = (profileData) => axios.put(`${API_URL}/profile`, profileData);