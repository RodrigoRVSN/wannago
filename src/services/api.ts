import axios from 'axios';

const api = axios.create({
  baseURL:
    process.env.baseURL || 'https://maps.googleapis.com/maps/api/geocode',
});

export default api;
