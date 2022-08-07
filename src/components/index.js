//Expotaciones Componentes privados
export * from './private/layouts/PrivateLayout';
export * from './private/layouts/Header';
export * from './private/layouts/Footer';
export * from './private/layouts/AdminNav';

export * from './private/pages/Dashboard';

export * from './private/ui/Formulario';
export * from './private/ui/ListadoPacientes';
export * from './private/ui/Paciente';

export * from './private/pages/EditarPerfil';
export * from './private/pages/CambiarPassword';


//Exportaciones componentes publicas
export * from './auth/layouts/AuthLayout';
export * from './auth/pages/NewPasword';
export * from './auth/pages/Register';
export * from './auth/pages/ResetPassword';
export * from './auth/pages/ConfirmEmail';
export * from './auth/pages/Login';

export * from './auth/ui/AlertarEmail';


//otros
export * from './ui/Spinner';