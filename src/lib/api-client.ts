import axios, { AxiosInstance, InternalAxiosRequestConfig } from 'axios';
import toastService from './toast';

const api: AxiosInstance = axios.create({
    // baseURL: "http://localhost:3001/api"
    baseURL: import.meta.env.VITE_BASE_URL
});

api.interceptors.request.use(
    (config: InternalAxiosRequestConfig): InternalAxiosRequestConfig => {
        // eslint-disable-next-line @typescript-eslint/no-unused-vars
        const token = localStorage.getItem('token');
        
        if (token) {
            config.headers.Authorization = token;
        }
        return config;
    },
    (error) => {
        return Promise.reject(error);
    }
);

api.interceptors.response.use(
    (response) => response,
    (error) => {
      const message = error.response?.data?.message || error.message;
      toastService.error(message);
      if (error.response?.status === 401) {
        localStorage.removeItem('token');
        window.location.href = `/auth/login`;
      }
      return Promise.reject(error);
    },
  );
export default api;