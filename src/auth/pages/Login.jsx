import { useContext } from 'react';
import { Link } from 'react-router-dom';
import { toast } from "react-toastify";

import { useForm } from '../../hooks';
import { AuthContext } from '../context';

const initialState = {
  email: '',
  password: ''
}

export const Login = () => {
  const { auth, starLogin } = useContext(AuthContext);

  const {email, password, onInputChange } = useForm(initialState);

  const handleSubmit = (e) => {
    e.preventDefault();

    //Validar formulario
    if(email === '' || password === ''){
      toast.error('Todos los campos son obligatorios');
      return;
    }

    starLogin({email, password});

  }

  return (
    <>
    <div className='p-4'>
      <h1 className="text-indigo-600 font-black text-6xl" >Inicia Sesión y administra tus pacientes</h1>
    </div>
    <div className='content-form'>
      {/* muestra error en caso de que exista */}
      { auth.messageError && <div className="bg-red-100 border border-red-400 text-red-700 px-4 py-3 rounded relative text-center">{auth.messageError}</div> }
      <form onSubmit={handleSubmit}>
        <div className='my-5'>
          <label className="label">
            Email
          </label>
          <input 
            className="input" 
            type="email" 
            placeholder="prueba@gmail.com" 
            name='email'
            value={email}
            onChange={onInputChange}
            />
        </div>
        <div className='my-5'>
          <label className="label">
            Password
          </label>
          <input 
            className="input" 
            id="password" 
            type="password" 
            placeholder="12345" 
            name='password'
            value={password}
            onChange={onInputChange}
            
            />
        </div>
        <input 
          type="submit"
          className="input-submit bg-indigo-700 cursor-pointer hover:bg-indigo-800"
          value="Iniciar Sesión" />
      </form>
        <nav className='mt-5 lg:flex lg:justify-between'>
          <Link to="/register" className="link-form">¿No tienes una cuenta? Regístrate</Link>
          <Link to="/recovery-password" className="link-form">Olvide mi password</Link>
        </nav>
    </div>
    </>
  )
}
