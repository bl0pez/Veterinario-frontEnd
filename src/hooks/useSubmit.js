import { useMemo, useState } from "react";
import { veterinaryApi } from "../api";

export const useSubmit = (argumentos) => {
  
    const [isLoding, setIsLoading] = useState(false);
    const [error, setError] = useState(null);
    const [data, setData] = useState([]);

    const submit = useMemo(() => {
        const submit = async () => {
            setIsLoading(true);
            try {
                const { data } = await veterinaryApi({
                    ...argumentos,
                });
                setData(data);
            } catch (error) {
                setError(error);
            }
            setIsLoading(false);
        };
        return submit;

    }


    , [argumentos]);

    return { submit, isLoding, error, data };


}
