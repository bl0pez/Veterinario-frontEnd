import { Navigate, Route, Routes } from 'react-router-dom';
import {
  AuthLayout,
  Dashboard,
  /*   CambiarPassword,
    ConfirmEmail,
    EditarPerfil, */
  Login,
  PrivateLayout,
  /*   NewPasword,
    Register,
    ResetPassword, */
} from '../components';



export const AppRouter = () => {
  return (
    <Routes>
      <Route path="/" element={<AuthLayout />}>
        <Route index element={<Login />} />
        {/*         <Route path="register" element={<Register />} />
        <Route path="confirmEmail/:token" element={<ConfirmEmail />} />
        <Route path="recovery-password" element={<ResetPassword />} />
        <Route path="resetpassword/:token" element={<NewPasword />} /> */}
      </Route>
        <Route path="/admin" element={<PrivateLayout />}>
          <Route path="pacientes" element={<Dashboard />} />
          {/* <Route path="perfil" element={<EditarPerfil />} />
          <Route path="cambiar-password" element={<CambiarPassword />} /> */}

          <Route path="*" element={<Navigate to="/admin/pacientes" />} />
        </Route>

    </Routes>
  );
};
