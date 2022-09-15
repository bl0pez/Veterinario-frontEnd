import { types } from "../types/types";

export const AuthReducer = (state = {}, action) => {
    switch (action.type) {
        case types.chekingCredentiasls:
            return {
                status: "checking",
            }
        case types.login:
            return {
                ...state,
                status: "authenticated",
                logged: true,
                user: action.payload,
            }
        case types.logout:
            return {
                status: "not-authenticated",
                logged: false,
            }
        default:
            return state;
    }
}