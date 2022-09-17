import { useContext } from 'react';
import { Link, useNavigate } from 'react-router-dom';

import { AuthContext } from '../context';
import { useForm, useSubmit } from '../../hooks';

export const Login = () => {

  const navigate = useNavigate();
  const { data, loading, error, onSubmit} = useSubmit();

  const { login } = useContext(AuthContext); 

  const {formState, onInputChange, onResetForm} = useForm({
    email: 'blopez4434@gmail.com',
    password: '123456'
  });

  const {email, password} = formState;

  const handleSubmit = (e) => {
    e.preventDefault();

    login(email, password);


    navigate('/admin/pacientes', {replace: true});


  }

  return (
    <>
    <div className='p-4'>
      <h1 className="text-indigo-600 font-black text-6xl" >Inicia Sesión y administra tus pacientes</h1>
    </div>
    <div className='content-form'>
      <form onSubmit={handleSubmit}>
        <div className='my-5'>
          <label className="label">
            Email
          </label>
          <input 
            className="input" 
            autoComplete='off' 
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
          disabled={loading}
          className={`input-submit ${loading ? 'bg-slate-400 cursor-progress' : 'bg-indigo-700 cursor-pointer hover:bg-indigo-800'}`} 
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
