import { useMemo, useState } from "react";
import { veterinaryApi } from "../api/axios";

export const useSubmit = () => {
    const [data, setData] = useState(null);
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState(null);

    /**
     * 
     * Esta función se encarga de hacer la petición a la API
     * 
     */
    const onSubmit = ({ method, url, data }) => {
        setLoading(true);

        veterinaryApi({
            method,
            url,
            data,
        }).then(resp => {
            localStorage.setItem('token', resp.data.token);
            setData(resp.data);
            setLoading(false);
        }).catch(err => {
            setError(err.message);
            setLoading(false);
        })

    };

    useMemo(() => {
        setTimeout(() => {
            setError(null);
        }, 4000);
    }, [error]);


    return {
        data,
        loading,
        error,

        //Methods
        onSubmit,

    }

}
