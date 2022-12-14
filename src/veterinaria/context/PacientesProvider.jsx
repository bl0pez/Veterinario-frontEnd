import { useEffect, useReducer } from 'react';
import { veterinaryApi } from '../../api';
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

    const data = await veterinaryApi({
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

  //Agregar un nuevo paciente
  const addPaciente = async (paciente) => {

    const action = {
      type: types.pacienteAddNew,  
      payload: paciente
    }


    dispatch(action);

  }

  const removePaciente = async (id) => {

    await veterinaryApi({
      url: `pacientes/${id}`,
      method: 'DELETE',
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${localStorage.getItem("token")}`,
      }
    });


    const action = {
      type: types.removePaciente,
      payload: id,
    }

    dispatch(action);

  }

  const updatePaciente = async (paciente) => {

    const action = {
      type: types.updatePaciente,
      payload: paciente,
    }

    dispatch(action);
  }

  const setPaciente = (paciente) => {
        
      const action = {
        type: types.pacienteSetActive,
        payload: paciente
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
        addPaciente,
        removePaciente,
        setPaciente,
        updatePaciente,
      }}
    >
      {children}
    </PacientesContext.Provider>
  )
}
