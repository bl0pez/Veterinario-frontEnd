import { createContext } from 'react';
import { toast } from 'react-toastify';
import { putPassword, putVeterinario } from '../helpers/requests';
import { useAxiosAuth } from '../hooks/axios/useGetAuth';

const AuthContext = createContext();


const AuthProvider = ({children}) => {

    const {auth, setAuth, isLoading} = useAxiosAuth();

    const actualizarPerfil = async(data) => {
        try {
            const perfil = await putVeterinario(data);
            toast.success("Perfil Actualizado");
        } catch (error) {
            toast.error(error.response.data.message);
        }
    }

    const cambiarPassword = async(data) => {
        try {
            await putPassword(data);
            toast.success("Contraseña Actualizada");   
        } catch (error) {
            toast.error(error.response.data.message);
            console.log(error);
        }
    }
    
    const cerrarSesion = () => {
        localStorage.removeItem('token');
        setAuth(null);
    }

    

    return(
        <AuthContext.Provider value={{
            auth,
            setAuth,
            isLoading,
            actualizarPerfil,
            cambiarPassword,
            cerrarSesion
        }} >
            {children}
        </AuthContext.Provider>
    )

}

export{
    AuthProvider
}

export default AuthContext;