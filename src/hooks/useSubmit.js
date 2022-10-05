import { useState } from "react";
import { veterinaryApi } from "../api/axios";

export const useSubmit = () => {
   
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState(null);
    const [data, setData] = useState(null);

    const onSubmit = (parametros) => {
        setLoading(true);

        veterinaryApi(parametros)
        .then(resp => {
            console.log(resp);
            setLoading(false);
            setData(resp.data);
        }).catch(err => {
            setLoading(false);
            setError(err.response.data.message);
        });


    }

    return {
        loading,
        error,
        data,
        //Methods
        onSubmit,
    }

}
