import { useState } from 'react';
import { getPacientes } from '../../helpers';

export const useGetPacientes = () => {

    const [pacientes, setPacientes] = useState([]);
    const [isLoading, setIsLoading] = useState();
    
    
    const getPacintes = async () => {
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
    }
    
    return {
        getPacintes,
        pacientes,
        setPacientes,
        isLoading
    }

}
