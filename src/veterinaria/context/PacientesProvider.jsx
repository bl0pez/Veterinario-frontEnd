import { useEffect, useReducer } from 'react';
import { request } from '../../helpers/requests';
import { types } from '../types/types';
import { PacientesContext, PacientesReducer } from './';

const init = () => {
  return {
    pacientes: [],
    loading: true,
  }
}

export const PacientesProvider = ({ children }) => {

  const [pacientes, dispatch] = useReducer(PacientesReducer, {}, init)

  const getPacientes = async () => {
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

  const addPaciente = async (paciente) => {

    console.log(paciente);

    const data = await request({
      url: 'paciente',
      method: 'POST',
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${localStorage.getItem("token")}`,
      },
      data: paciente,
    });

    console.log(data);

    dispatch({
      type: types.pacienteAddNew,
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
      addPaciente,
    }}
    >
      {children}
    </PacientesContext.Provider>
  )
}
