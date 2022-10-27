import { useEffect, useState } from "react";
import { veterinaryApi } from "../api/axios";

export const useSubmit = () => {
   
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState(null);
    const [data, setData] = useState(null);

    const onSubmit = (parametros) => {
        setLoading(true);

        veterinaryApi(parametros)
        .then(({ data }) => {
            setLoading(false);
            setData(data);
        }).catch(err => {
            setLoading(false);
            setError(err.response.data.message);
        });


    }

    useEffect(() => {
        setTimeout(() => {
            setError(null);
        }, 4000);
    }, [ error ]);


    return {
        loading,
        error,
        data,
        //Methods
        onSubmit,
    }


}
