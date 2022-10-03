import { types } from "../types/types";

export const AuthReducer = (state = {}, action) => {
    switch (action.type) {
        case types.chekingCredentiasls:
            return {
                status: "checking",
            }
        case types.login:
            return {
                status: "authenticated",
                logged: true,
                user: action.payload,
            }
        case types.logout:
            return {
                status: "not-authenticated",
                logged: false,
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
                error: null,
            }
        default:
            return state;
    }
}