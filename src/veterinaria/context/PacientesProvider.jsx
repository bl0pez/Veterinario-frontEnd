import { useEffect, useReducer } from 'react';
import { request } from '../../helpers/requests';
import { types } from '../types/types';
import { PacientesContext, PacientesReducer } from './';

const init = () => {
  return {
    pacientes: [],
    paciente: null,
    loading: true,
    error: null,
  };
}

export const PacientesProvider = ({ children }) => {

  const [pacientes, dispatch] = useReducer(PacientesReducer, {}, init);

  const getPacientes = async () => {
    const data = await request({
      url: 'pacientes',
      method: 'GET',
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${localStorage.getItem("token")}`,
      }
    });

    const action = {
      type: types.pacientes,
      payload: data.data
    }

    dispatch(action);

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
