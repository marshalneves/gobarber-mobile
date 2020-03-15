import axios from 'axios';

// Genymotion
// baseURL: 'http://10.0.3.2:3333',

const api = axios.create({
  baseURL: 'http://10.0.3.2:3333',
});

export default api;
