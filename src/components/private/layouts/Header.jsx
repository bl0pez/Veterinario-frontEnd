import React from "react";
import { Link, NavLink } from "react-router-dom";
import { useAuth } from "../../../hooks/useAuth";

export const Header = () => {
  const { cerrarSesion } = useAuth();

  return (
    <header className="py-10 bg-indigo-600">
      <div className="container mx-auto flex justify-between items-center flex-col lg:flex-row">
        <h1 className="font-bold text-2xl text-indigo-200 text-center">
          Administrador de Pacientes de{" "}
          <span className="text-white font-black">Veterinaria</span>
        </h1>
        <nav className="flex gap-4 flex-col lg:flex-row mt-5 lg:mt-0 items-center">
          <NavLink
            to="/admin/pacientes"
            className={({ isActive }) =>
              `text-white text-sm uppercase transition-all ${
                isActive ? "text-indigo-200 border-b-2" : undefined
              }`
            }
          >
            Pacientes
          </NavLink>
          <NavLink
            to="/admin/perfil"
            className={({ isActive }) =>
            `text-white text-sm uppercase transition-all ${
              isActive ? "text-indigo-200 border-b-2" : undefined
            }`
            }
          >
            Perfil
          </NavLink>
          <button
            type="button"
            className="text-white text-sm uppercase"
            onClick={cerrarSesion}
          >
            Cerrar sesión
          </button>
        </nav>
      </div>
    </header>
  );
};
