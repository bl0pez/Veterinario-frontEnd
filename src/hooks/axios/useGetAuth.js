import { useEffect, useState } from 'react';
import { getAuth } from '../../helpers/requests';

export const useAxiosAuth = () => {

    const [auth, setAuth] = useState(null);
    const [isLoading, setIsLoading] = useState(true);

    const getAuthAsync = async (token) => {

        if (!token) {
            setIsLoading(false);
            return;
        }

        try {
            const data = await getAuth();
            setAuth(data);
            setIsLoading(false);
        } catch (error) {
            setIsLoading(false);
        }
    }

    useEffect(() => {
        const token = localStorage.getItem("token") || '';
        getAuthAsync(token);
    }, []);

    return {
        auth,
        isLoading,
        setAuth
    }

}
