import { Link, useNavigate } from 'react-router-dom';
import { toast } from 'react-toastify';
import { veterinaryApi } from '../../../api/axios';
import { useAuth } from '../../../hooks/useAuth';
import { useForm } from '../../../hooks/useForm';

export const Login = () => {

  const navigate = useNavigate();

  const {formState, onInputChange, onResetForm} = useForm({
    email: '',
    password: ''
  });

  const { setAuth } = useAuth();

  const {email, password} = formState;

  const handleSubmit = (e) => {
    e.preventDefault();

    //TODO: validar formulario

    veterinaryApi({
      method: "post",
      url: "/veterinario/login",
      data:{
        email,
        password
      }
    }).then(resp => {
      localStorage.setItem('token', resp.data.token);
      setAuth(resp.data);
      navigate('/admin/pacientes', {replace: true});
    }).catch(err => {
      toast.error(err.response.data.message)
    })


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
        <input type="submit" className="input-submit" value="Iniciar Sesión" />
      </form>
        <nav className='mt-5 lg:flex lg:justify-between'>
          <Link to="/register" className="link-form">¿No tienes una cuenta? Regístrate</Link>
          <Link to="/recovery-password" className="link-form">Olvide mi password</Link>
        </nav>
    </div>
    </>
  )
}
