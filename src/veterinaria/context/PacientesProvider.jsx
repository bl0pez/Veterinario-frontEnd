import { useContext } from 'react';
import { useEffect, useReducer } from 'react';
import { AuthContext } from '../../auth/context';
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

  const { auth } = useContext(AuthContext);

  const [pacientes, dispatch] = useReducer(PacientesReducer, {}, init);

  console.log(pacientes.pacientes);

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

  //Agregar un nuevo paciente
  const addPaciente = async (paciente) => {

    const data = await request({
      url: 'pacientes',
      method: 'POST',
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${localStorage.getItem("token")}`,
      },
      data: paciente
    });

    console.log(data);
    
    const action = {
      type: types.pacienteAddNew,  
      payload: {
        _id: auth.user._id,
        ...paciente
      },
    }

    dispatch(action);

  }

  const removePaciente = async (id) => {

    await request({
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

  useEffect(() => {
    getPacientes();
  }, []);


  return (
    <PacientesContext.Provider
      value={{
        ...pacientes,
        addPaciente,
        removePaciente,
      }}
    >
      {children}
    </PacientesContext.Provider>
  )
}
