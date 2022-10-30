import { useEffect, useState } from 'react';
import { veterinaryApi } from '../../api';

export const useAxiosAuth = () => {

    const [auth, setAuth] = useState(null);
    const [isLoading, setIsLoading] = useState(true);

    const getAuthAsync = async (token) => {

        if (!token) {
            setIsLoading(false);
            return;
        }

        try {
            const data = await veterinaryApi({
                method: "GET",
                url: "/veterinario/profile",
                headers: {
                    "Content-Type": "application/json",
                    Authorization: `Bearer ${localStorage.getItem("token")}`,
                }
            });
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
