import axios from 'axios';

const api = axios.create({
  baseURL: 'http://localhost:8000', // Your FastAPI backend
});

export const login = (credentials) => api.post('/auth/login', credentials);
export const getAttendance = (classId) => api.get(`/attendance/${classId}`);
