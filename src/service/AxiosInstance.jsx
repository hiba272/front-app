import axios from 'axios';

const AxiosInstance = axios.create({
  baseURL: 'http://127.0.0.1:8000/', // adjust the base URL as needed
});

// Add a request interceptor
AxiosInstance.interceptors.request.use(
  (config) => {
    const token = localStorage.getItem('authToken');
    if (token) {
      config.headers['Authorization'] = `Bearer ${token}`;
    }
    return config;
  },
  (error) => Promise.reject(error)
);

export default AxiosInstance;