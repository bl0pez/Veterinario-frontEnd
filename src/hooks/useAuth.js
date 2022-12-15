import { useReducer } from "react";
import { veterinaryApi } from "../api/axios";
import { AuthReducer } from "../auth/context";
import { types } from "../auth/types/types";

const initialState = {
    logged: false,
    user: null,
    status: "not-authenticated",
    messageError: undefined,
}

export const useAuth = () => {
   
    const [auth, dispatch] = useReducer(AuthReducer, initialState);

    /**
     * 
     * @param {Object} email,
     * @param {Object} password,  
     */
    const starLogin = ({ email, password }) => {
        dispatch({ type: types.chekingCredentiasls });

        veterinaryApi.post(
            '/veterinario/login',
            { email, password }
        ).then(resp => {
            
            const action = {
                type: types.login,
                payload: resp.data
            }

            dispatch(action);
            localStorage.setItem('token', resp.data.token);

        }).catch(err => {
            dispatch({ type: types.logout, payload: err.response.data.message });

            setTimeout(() => {
                dispatch({ type: types.removeError });
            }, 2500);

        });

    };

    const startRevalidarSession = () => {

        dispatch({ type: types.chekingCredentiasls });
        const token = localStorage.getItem('token');

        if(!token){
            return dispatch({ type: types.logout });
        }

        veterinaryApi.get(
            '/veterinario/profile',
        ).then(resp => {
            dispatch({ type: types.login, payload: resp.data });
        }).catch(err => {
            console.log(err);
            dispatch({ type: types.logout });
        });

    }

    const logout = () => {
        dispatch({ type: types.logout,  });
        localStorage.clear();
    }

    return {

        //States
        auth,

        //Methods
        starLogin,
        startRevalidarSession,
        logout,

    }

}
