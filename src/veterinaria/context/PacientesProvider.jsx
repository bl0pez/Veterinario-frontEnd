import { useEffect, useReducer } from 'react';
import { request } from '../../helpers/requests';
import { types } from '../types/types';
import { PacientesContext, PacientesReducer } from './';

const init = () => {
  return {
    pacientes: [],
    loading: false,
  }
}

export const PacientesProvider = ({ children }) => {

  const [pacientes, dispatch] = useReducer(PacientesReducer, {}, init)

  const getPacientes = async () => {
    const action = {
      type: types.pacientesLoaded,
    }

    dispatch(action);

    const data = await request({
      url: 'paciente',
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${localStorage.getItem("token")}`,
      },
    });

    dispatch({
      type: types.pacientes,
      payload: data,
    });

  }

  useEffect(() => {
    getPacientes();
  }, []);
  

  return (
    <PacientesContext.Provider
    value={{
      ...pacientes,
    }}
    >
      {children}
    </PacientesContext.Provider>
  )
}
