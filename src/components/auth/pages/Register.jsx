import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { useForm } from "../../../hooks/useForm";

import { veterinaryApi } from "../../../api/axios";
import { toast } from "react-toastify";

export const Register = () => {

  const [isLoading, setIsLoading] = useState(true);

  const { formState, onInputChange, onResetForm } = useForm({
    name: "",
    email: "",
    password: "",
    confirmPassword: "",
  });

  const { name, email, password, confirmPassword } = formState;
  
  let navigate = useNavigate();
  
  const handleSubmit = (e) => {
    e.preventDefault();

    if(Object.values(formState).some(value => value === "")) {
      toast.error("Por favor, complete todos los campos");
      return;
    }

    if(password !== confirmPassword) {
      toast.error("Las contraseñas no coinciden");
      return;
    }

    setIsLoading(true);

    veterinaryApi({
      method: "post",
      url: "/veterinario/register",
      data: {
        name,
        email,
        password,
      },
    }).then(resp => {
      setIsLoading(false);
      navigate("/");
      toast.success("Usuario creado correctamente");
    }).catch(err => {
      setIsLoading(false);
      toast.error(err.response.data.message);
    });
  };

  return (
    <>
      <div className="p-4">
        <h1 className="text-indigo-600 font-black text-6xl">
          Crea tu cuenta y administra tus Pacientes
        </h1>
      </div>
      <div className="content-form">
        <form onSubmit={handleSubmit}>
          <div className="my-5">
            <label className="label">Nombre</label>
            <input
              type="text"
              className="input"
              autoComplete="off"
              placeholder="Juanito peres"
              name="name"
              value={formState.name}
              onChange={onInputChange}
            />
          </div>
          <div className="my-5">
            <label className="label">Email</label>
            <input
              type="email"
              className="input"
              autoComplete="off"
              placeholder="prueba@gmail.com"
              name="email"
              value={formState.email}
              onChange={onInputChange}
            />
          </div>
          <div className="my-5">
            <label className="label">Password</label>
            <input
              type="password"
              className="input"
              placeholder="12345"
              name="password"
              value={formState.password}
              onChange={onInputChange}
            />
          </div>
          <div className="my-5">
            <label className="label">Repetir Password</label>
            <input
              type="password"
              className="input"
              placeholder="12345"
              name="confirmPassword"
              value={formState.confirmPassword}
              onChange={onInputChange}
            />
          </div>
          <button 
            type="submit" 
            className="button-sumit" 
            disabled={!isLoading}>
            {!isLoading ? "Cargando..." : "Crear cuenta"}
          </button>
        </form>
        <nav className="mt-5 lg:flex lg:justify-between">
          <Link to="/" className="link-form">
            ¿Ya tienes una cuenta? Inicia Sesión
          </Link>
          <Link to="/recovery-password" className="link-form">
            Olvide mi password
          </Link>
        </nav>
      </div>
    </>
  );
};
