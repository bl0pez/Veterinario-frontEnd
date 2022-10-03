import { useContext, useEffect } from "react";
import { veterinaryApi } from "../api/axios";
import { AuthContext } from "../auth/context";
import { types } from "../auth/types/types";

export const useSubmit = () => {
   

    const { auth, dispatch } = useContext(AuthContext);

    const onSubmit = ({ method, url, data }) => {
        dispatch({ type: types.chekingCredentiasls });

        veterinaryApi({
            method,
            url,
            data,
        }).then(resp => {
            localStorage.setItem('token', resp.data.token);
            dispatch({
                type: types.login,
                payload: resp.data
            });
        }).catch(err => {
            dispatch({
                type: types.authError,
                payload: err.response.data.message
            });
        })

    };

    useEffect(() => {
        if(auth.error){
            setTimeout(() => {
                dispatch({ type: types.removeError });
            }, 4000);
        }
    }, [auth.error]);


    return {
        //Methods
        onSubmit,

    }

}
