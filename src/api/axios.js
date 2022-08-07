import axios from 'axios';

export const veterinaryApi = axios.create({
        baseURL: `${import.meta.env.VITE_BACKEND_URL}/api`,
});