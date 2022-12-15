import axios from 'axios';

export const veterinaryApi = axios.create({
        baseURL: `${import.meta.env.VITE_BACKEND_URL}/api`,
});

veterinaryApi.interceptors.request.use((config) => {

        config.headers = {
                ...config.headers,
                'Content-Type': 'application/json',
                'Authorization': `Bearer ${localStorage.getItem('token')}`,
        }

        return config;
        
});