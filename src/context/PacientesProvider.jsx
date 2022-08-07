import { createContext, useState } from 'react';
import { toast } from 'react-toastify';

import { deletePaciente, postPaciente, putPaciente } from '../helpers/requests';
import { useGetPacientes } from '../hooks/axios/useGetPacientes';

const PacientesContext = createContext();

export const PacientesProvider = ({ children }) => {

  const { pacientes, setPacientes, isLoading } = useGetPacientes();
  const [paciente, setPaciente] = useState(null);
  
  const agregarPaciente = async (paciente) => {
      const { newPaciente, message } = await postPaciente(paciente);
      toast.success(message);
      setPacientes([newPaciente, ...pacientes]);
  };

  const editarPaciente = async(paciente) => {
    const resp = await putPaciente(paciente);
    const pacientesfilter = pacientes.filter(pac => pac._id !== resp.paciente._id);
    setPacientes([paciente, ...pacientesfilter]);
    setPaciente(null);
    toast.success("Paciente Actualizado");
  };

  const eliminarPaciente = async(id) => {
    const confirmar = window.confirm("¿Estas seguro de eliminar este paciente?");

    if(confirmar) {
      deletePaciente(id);
      toast.success("Paciente Eliminado");
      setPacientes(pacientes.filter(pac => pac._id !== id));
    }

  }

  return (
    <PacientesContext.Provider
      value={{
        pacientes,
        isLoading,
        paciente,
        setPaciente,
        agregarPaciente,
        editarPaciente,
        eliminarPaciente,
      }}
    >
      {children}
    </PacientesContext.Provider>
  );
};
export default PacientesContext;
