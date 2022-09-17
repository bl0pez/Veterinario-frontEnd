import { Link } from 'react-router-dom'
import { toast } from 'react-toastify';
import { veterinaryApi } from '../../api/axios';
import { useForm } from '../../hooks/useForm';

export const ResetPassword = () => {

  const { formState, onInputChange, onResetForm} = useForm({
    email: '',
  });
  
  const {email} = formState;

  const handleSubmit = (e) => {
    e.preventDefault();
    
    //TODO: crear validaciones

    veterinaryApi({
      method: "post",
      url: "/veterinario/recovery-password",
      data: {
        email: email,
      },
    }).then((resp) => {
      toast.success(resp.data.message);
      onResetForm();
    }).catch(err => {
      toast.error(err.response.data.message);
    });

  }

  return (
    <>
    <div className='p-4'>
      <h1 className="text-indigo-600 font-black text-6xl" >Ingresa tu email para recuperar contraseña</h1>
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
        <input type="submit" className="input-submit" value="Enviar" />
      </form>
        <nav className='mt-5 lg:flex lg:justify-between'>
          <Link to="/" className="link-form">¿Ya tienes una cuenta? Inicia Sesión</Link>
          <Link to="/register" className="link-form">¿No tienes una cuenta? Regístrate</Link>
        </nav>
    </div>
    </>
  )
}

