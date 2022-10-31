import { useEffect } from "react";
import { Link, useNavigate, useParams } from "react-router-dom"
import { toast } from "react-toastify";

import { useForm } from "../../hooks";
import { veterinaryApi } from '../../api';

export const NewPasword = () => {

  const { token } = useParams();
  let navigate = useNavigate();

  useEffect(() => {
    veterinaryApi({
      method: "get",
      url: `veterinario/recovery-password/${token}`
    }).then(resp => {
      toast.success("Ingresa tu nueva password")
    }).catch(err => {
      toast.error("Hubo un Error con el Enlace")
      navigate("/")
    })
  }, [])
  

  const { formState, onInputChange, onResetForm } = useForm({
    password: '',
    password2: '',
  });

  const { password, password2 } = formState;

  const handleSubmit = (e) => {
    e.preventDefault();

    if(password !== password2){
      return toast.error('Las contraseñas no coinciden');
    }

    veterinaryApi({
      method: "post",
      url: `veterinario/recovery-password/${token}`,
      data: {
        password: password,
      },
    }).then(({data}) =>{
      toast.success(data.message)
      navigate("/")
    }).catch((err) => {
      toast.error(err.response.data.message)
    })

  }

  return (
    <>
    <div className='p-4'>
      <h1 className="text-indigo-600 font-black text-6xl" >Restablece tu password y no Pierdas Acesso a tus pacientes</h1>
    </div>
    <div className='content-form'>
      <form onSubmit={handleSubmit}>
        <div className='my-5'>
          <label className="label">
            Password
          </label>
          <input 
            className="input" 
            type="password" 
            name="password"
            placeholder="1234567" 
            autoComplete="off"
            value={password}
            onChange={onInputChange}
            />
        </div>
        <div className='my-5'>
          <label className="label">
            Confirmar Password
          </label>
          <input 
            className="input" 
            type="password" 
            name="password2"
            placeholder="1234567" 
            autoComplete="off"
            value={password2}
            onChange={onInputChange}
            />
        </div>
        <input type="submit" className="input-submit bg-indigo-700 cursor-pointer hover:bg-indigo-800" value="Enviar" />
      </form>
        <nav className='mt-5 lg:flex lg:justify-between'>
          <Link to="/" className="link-form">¿Ya tienes una cuenta? Inicia Sesión</Link>
          <Link to="/register" className="link-form">¿No tienes una cuenta? Regístrate</Link>
        </nav>
    </div>
    </>
  )
}
