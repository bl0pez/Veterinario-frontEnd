import { useState } from 'react';
import { Link } from 'react-router-dom'
import { toast } from 'react-toastify';
import { veterinaryApi } from '../../api/axios';
import { useForm } from '../../hooks/useForm';

export const ResetPassword = () => {

  const { formState, onInputChange, onResetForm} = useForm({
    email: '',
  });

  const [loading, setLoading] = useState(false);
  
  const {email} = formState;

  const handleSubmit = (e) => {
    e.preventDefault();

    if(email === ''){
      toast.error("Campo email obligatorio");
      return;
    }    
    
    setLoading(true);

    veterinaryApi({
      method: "post",
      url: "/veterinario/recovery-password",
      data: {
        email: email,
      },
    }).then((resp) => {
      toast.success(resp.data.message);
      onResetForm();
      setLoading(false);
    }).catch(err => {
      setLoading(false);
      toast.error(err.response.data.message);
    });

  }

  return (
    <>
    <div className='p-4'>
      <h1 className="text-indigo-600 font-black md:text-6xl text-4xl" >Ingresa tu email para recuperar contraseña</h1>
    </div>
    <div className='content-form'>
      <form onSubmit={handleSubmit}>
        <div className='my-5'>
          <label className="label">
            Email
          </label>
          <input 
            className="input" 
            type="email" 
            name='email'
            placeholder="prueba@gmail.com" 
            autoComplete="off"
            value={email}
            onChange={onInputChange}
            />
        </div>
        <input 
          type="submit" 
          className={`${loading ? 'bg-gray-500 cursor-wait' : 'bg-indigo-600'} text-white font-bold py-2 px-4 rounded w-full cursor-pointer`}
          value="Enviar" disabled={loading} />
      </form>
        <nav className='mt-5 lg:flex lg:justify-between'>
          <Link to="/" className="link-form">¿Ya tienes una cuenta? Inicia Sesión</Link>
          <Link to="/register" className="link-form">¿No tienes una cuenta? Regístrate</Link>
        </nav>
    </div>
    </>
  )
}

