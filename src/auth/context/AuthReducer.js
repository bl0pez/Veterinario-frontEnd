import { types } from "../types/types";

export const AuthReducer = (state = {}, action) => {
    switch (action.type) {
        case types.chekingCredentiasls:
            return {
                status: "checking",
                logged: false,
                user: {},
                messageError: undefined,
            }
        case types.login:
            return {
                status: "authenticated",
                logged: true,
                user: action.payload,
                messageError: undefined,
            }
        case types.logout:
            localStorage.removeItem('token');
            return {
                status: "not-authenticated",
                logged: false,
                user: {},
                messageError: action.payload,
            }
        case types.authError:
            return {
                status: "not-authenticated",
                logged: false,
                error: action.payload,
            }
        case types.removeError:
            return {
                ...state,
                messageError: undefined,
            }
        default:
            return state;
    }
}