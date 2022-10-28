import { useContext, useEffect } from "react";
import { veterinaryApi } from "../api/axios";
import { AuthContext } from "../auth/context";
import { types } from "../auth/types/types";

export const useAuth = () => {
   

    const { auth, dispatch } = useContext(AuthContext);

    const onSubmit = (parametros) => {
        dispatch({ type: types.chekingCredentiasls });

        veterinaryApi(parametros).then(resp => {
        
            if(resp.data.token){
                localStorage.setItem('token', resp.data.token);
            }

            dispatch({
                type: types.login,
                payload: resp.data
            });
        }).catch(err => {

            console.log(err);

            dispatch({
                type: types.authError,
                payload: err.response.data.message
            });
        });
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
