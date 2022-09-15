import { useReducer } from "react";
import { request } from "../../../helpers/requests";
import { AuthReducer } from "./AuthReducer";
import { AuthContext } from "./AuthContext";
import { types } from "../types/types";


export const AuthProvider = ({ children }) => {

    const [auth, dispatch] = useReducer(AuthReducer, {});

    const login = async (email, password) => {

        dispatch({type: types.chekingCredentiasls});

        const data = await request({
            url: '/veterinario/login',
            method: "POST",
            data: {
                email,
                password
            }
        });

        const action = {
            type: types.login,
            payload: data
        }

        localStorage.setItem('token', data.token);

        dispatch(action);

    }

    return (
        <AuthContext.Provider
            value={{
                ...auth,
                login
            }}>
            {children}
        </AuthContext.Provider>

    )
}
