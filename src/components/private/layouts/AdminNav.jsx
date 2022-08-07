import { Link, NavLink } from "react-router-dom";

export const AdminNav = () => {

  return (
    <nav className="flex gap-3 flex-wrap">
      <NavLink
        to="/admin/perfil"
        className={({ isActive }) => 
          `font-bold uppercase text-gray-500 ${isActive ? 'text-indigo-700' : undefined}`
        }
      >
        Perfil
      </NavLink>
      <NavLink
        to="/admin/cambiar-password"
        className={({ isActive }) => 
        `font-bold uppercase text-gray-500 ${isActive ? 'text-indigo-700' : undefined}`
      }
      >
        Cambiar contraseña
      </NavLink>
    </nav>
  );
};
