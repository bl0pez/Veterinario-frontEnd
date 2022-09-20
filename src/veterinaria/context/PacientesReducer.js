import { types } from "../types/types";

export const PacientesReducer = (state = {}, action) => {
    switch (action.type) {
        case types.pacientesLoaded:
            return {
                ...state,
                loading: true,
            };
        case types.pacientes:
            return {
                ...state,
                loading: false,
                pacientes: [action.payload],
            };
        default:
            return state;
    }
}