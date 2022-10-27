import { types } from '../types/types';

export const PacientesReducer = (state = {}, action) => {
    switch (action.type) {
        case types.pacientesLoaded:
            return {
                ...state,
                loading: true,
            };
        // Carga todos los pacientes
        case types.pacientes:
            return {
                ...state,
                loading: false,
                pacientes: action.payload,
            };
        // Crea un nuevo paciente y actualiza la lista de pacientes
        case types.pacienteAddNew:
            return {
                ...state,
                pacientes: [action.payload
                    , ...state.pacientes],
            };
        // Elimina un paciente y actualiza la lista de pacientes
        case types.removePaciente:
            return {
                ...state,
                pacientes: state.pacientes.filter(
                    paciente => paciente._id !== action.payload
                ),
            }
        default:
            return state;
    }
}