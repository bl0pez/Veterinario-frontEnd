import { useEffect, useState } from "react";
import { toast } from "react-toastify";

import { getConfirmEmail } from '../../helpers/requests';

export const useEmailConfirm = (token) => {
    const [isLoaded, setIsLoaded] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
      getConfirmEmail(token)
        .then(
            (result) => {
                toast.success(result.message);
                setIsLoaded(false)
            },
            (error) => {
                toast.error(error.response.data.message);
                setError(error);
                setIsLoaded(false)  
            });
    }, []);
    
    return {
        isLoaded,
        error
    }

}
