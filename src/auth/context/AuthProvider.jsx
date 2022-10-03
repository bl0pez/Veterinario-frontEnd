import { useReducer } from "react";
import { AuthReducer } from "./AuthReducer";
import { AuthContext } from "./AuthContext";
import { types } from "../types/types";

const initialState = {
    logged: false,
    user: null,
    status: "not-authenticated",
}

export const AuthProvider = ({ children }) => {

    const [auth, dispatch] = useReducer(AuthReducer, initialState);

    const logout = () => {
        localStorage.removeItem('token');
        dispatch({ type: types.logout });
    }

    return (
        <AuthContext.Provider
            value={{
                auth,
                dispatch,
                logout
            }}>
            {children}
        </AuthContext.Provider>

    )
}
