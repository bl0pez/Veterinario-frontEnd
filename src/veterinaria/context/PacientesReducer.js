import { types } from '../types/types';

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
                pacientes: action.payload,
            };
        case types.pacienteAddNew:
            return {
                ...state,
                pacientes: [action.payload.newPaciente
                    , ...state.pacientes],
            };
        default:
            return state;
    }
}