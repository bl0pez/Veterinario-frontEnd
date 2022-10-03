import { useContext } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { useForm, useSubmit } from '../../hooks';
import { AuthContext } from '../context';

export const Login = () => {

  const { auth } = useContext(AuthContext);
  const { onSubmit } = useSubmit();

  const navigate = useNavigate();


  const {email, password, formState, onInputChange, onResetForm} = useForm({
    email: 'blopez4434@gmail.com',
    password: '123456'
  });

  const handleSubmit = (e) => {
    e.preventDefault();

    onSubmit({
      url: '/veterinario/login',
      method: 'POST',
      data: formState
    });

    if(auth.error) return;

    navigate('/admin/pacientes', {replace: true});


  }

  return (
    <>
    <div className='p-4'>
      <h1 className="text-indigo-600 font-black text-6xl" >Inicia Sesión y administra tus pacientes</h1>
    </div>
    <div className='content-form'>
      {/* muestra error en caso de que exista */}
      { auth.error && <div className="bg-red-100 border border-red-400 text-red-700 px-4 py-3 rounded relative text-center">{auth.error}</div> }
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
          /* className={`input-submit ${loading ? 'bg-slate-400 cursor-progress' : 'bg-indigo-700 cursor-pointer hover:bg-indigo-800'}`} */ 
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
