import { useState } from "react";
import { veterinaryApi } from "../api";

export const useSubmit = () => {
  
    const [isLoding, setIsLoading] = useState(false);
    const [error, setError] = useState(null);
    const [data, setData] = useState(null);

    const onSubmit = async (argumentos) => {
        setIsLoading(true);

        try{
            const data = await veterinaryApi(argumentos);
            setData(data);
        }catch{
            setError(error);
        }
        
        setIsLoading(false);
        
    }

    return { onSubmit, isLoding, error, data };


}
