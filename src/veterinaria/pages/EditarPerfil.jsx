import { useContext } from 'react';
import { toast } from 'react-toastify';
import { AdminNav } from '../';
import { useForm } from '../../hooks/useForm';
import { AuthContext } from '../../auth';

export const EditarPerfil = () => {

  const { user } = useContext(AuthContext);

  const { formState, onInputChange, onResetForm, } = useForm(user);

  const { name, phone, email, website, _id } = formState;

  const handleSubmit = (e) => {
    e.preventDefault();
    
    console.log('Ejecutando el submit');

    if(name === '' || email === ''){
      toast.error("Campo nombre y email obligatorios");
      return;
    }

    //TODO: FUNCION PARA ACTUALIZAR PERFIL

  }
  



  return (
    <>
      <AdminNav />
    
      <h2 className='font-black text-3xl text-center mt-10'>Editar perfil</h2>
      <p className='text-xl mt-5 mb-10 text-center'>modifica tu <span className='text-indigo-600 font-bold'> Información aquí</span></p>

      <div className="flex justify-center">
        <div className='w-full md:w-1/2 bg-white shadow rounded-lg p-5'>
          <form onSubmit={handleSubmit}>
            <div className='my-3'>
              <label htmlFor="name" className='uppercase font-bold text-gray-600'>Nombre:</label>
              <input 
                type="text" 
                className='border bg-gray-50 w-full p-2 mt-5 rounded-lg'
                id='name'
                name='name'
                value={name}
                onChange={onInputChange}
                />
            </div>
            <div className='my-3'>
              <label htmlFor="website" className='uppercase font-bold text-gray-600'>Sitio web:</label>
              <input 
                type="text" 
                className='border bg-gray-50 w-full p-2 mt-5 rounded-lg'
                id='website'
                name='website'
                value={website || ''}
                onChange={onInputChange}
                />
            </div>
            <div className='my-3'>
              <label htmlFor="phone" className='uppercase font-bold text-gray-600'>Telefono:</label>
              <input 
                type="tel"
                className='border bg-gray-50 w-full p-2 mt-5 rounded-lg'
                id='phone'
                name='phone'
                value={phone || ''}
                onChange={onInputChange}
                />
            </div>
            <div className='my-3'>
              <label htmlFor="email" className='uppercase font-bold text-gray-600'>Email:</label>
              <input 
                type="text" 
                className='border bg-gray-50 w-full p-2 mt-5 rounded-lg'
                id='email'
                name='email'
                value={email}
                onChange={onInputChange}
                />
            </div>
            <input 
              type="submit"
              value="Guardar Cambios"
              className="bg-indigo-700 px-10 py-3 font-bold mt-5 text-white rounded-lg uppercase w-full cursor-pointer"
             />
          </form>
        </div>
      </div>


    </>
  )
}
