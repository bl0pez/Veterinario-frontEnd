import { AuthContext } from "./AuthContext";
import { types } from "../types/types";
import { useAuth } from "../../hooks";
import { useState } from "react";

export const AuthProvider = ({ children }) => {

    const [dispatch, setDispatch] = useState();

    const { auth, starLogin, startRevalidarSession, logout } = useAuth();

    return (
        <AuthContext.Provider
            value={{
                //State
                auth,
                dispatch,
                
                //Metodos
                starLogin,
                startRevalidarSession,
                logout,

            }}>
            {children}
        </AuthContext.Provider>

    )
}
