import { AuthContext } from './AuthContext';
import { useAuth } from '../../hooks';

export const AuthProvider = ({ children }) => {

    const { auth, starLogin, startRevalidarSession, logout } = useAuth();

    return (
        <AuthContext.Provider
            value={{
                //State
                auth,
                
                //Metodos
                starLogin,
                startRevalidarSession,
                logout,

            }}>
            {children}
        </AuthContext.Provider>

    )
}
