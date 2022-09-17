import { useContext, useEffect, useState } from 'react';
import { AuthContext } from '../../auth';
import { getPacientes } from '../../helpers';

export const useGetPacientes = () => {

    const auth = useContext(AuthContext); 

    const [pacientes, setPacientes] = useState(null);
    const [isLoading, setIsLoading] = useState();
    
    
    useEffect(() => {

        setIsLoading(true);


        const token = localStorage.getItem("token") || null;
        if(!token || !auth) {
            setPacientes([]);
            setIsLoading(false);
            return;
        }
        getPacientes(token)
        .then(resp => {
            setPacientes(resp)
            setIsLoading(false);
        })
        .catch(err => {
            setPacientes([]);
            setIsLoading(false);
        });
    }, [auth]);
    
    return {
        pacientes,
        setPacientes,
        isLoading
    }

}
