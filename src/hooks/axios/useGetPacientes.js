import { useContext, useEffect, useState } from 'react';
import { AuthContext } from '../../components/auth/context/AuthContext';
import { getPacientes } from '../../helpers/requests';

export const useGetPacientes = () => {

    const auth = useContext(AuthContext); 

    console.log(auth);

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
