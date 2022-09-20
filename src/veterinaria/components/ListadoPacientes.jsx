import { useContext } from 'react';
import { Spinner } from '../../ui/Spinner';
import { PacientesContext } from '../context';
import { Paciente } from './Paciente';

export const ListadoPacientes = () => {

  //importamos pacientes desde el context
  const pacientes = useContext(PacientesContext);
  
  console.log(pacientes);

  if (true) {
    return (
      <div className='items-center '>
        <Spinner width="w-14" height="h-14" />
      </div>
    )
  }

  if(pacientes.length > 0) {
    return(
        <>
        <h2 className='font-black text-3xl text-center'>Listado Pacientes</h2>
        <p className='text-xl mt-5 mb-10 text-center'>
          Administra tus {''}
          <span className='text-indigo-600 font-bold'>Pacientes y Citas</span>
        </p>

        {
          pacientes.map((paciente) => (
            <Paciente 
              key={paciente._id}
              paciente={paciente}
            />
          ))
        }

      </>
    )
  }

  return (
    <>
            <h2 className='font-black text-3xl text-center'>No hay Pacientes</h2>
            <p className='text-xl mt-5 mb-10 text-center'>
              Comienza agregando pacientes {''}
              <span className='text-indigo-600 font-bold'>y parecerán en este lugar</span>
            </p>
    </>
  )
}
