import { useContext } from 'react';
import { AuthContext } from '../auth';

import { PrivateRoutes } from '../veterinaria/routes/PrivateRoutes';
import { PublicRoutes } from '../auth/routes/PublicRoutes';
import { PacientesProvider } from '../veterinaria/context';
import { Spinner } from '../ui/Spinner';
import { useEffect } from 'react';
import { useAuth } from '../hooks';



export const AppRouter = () => {

  const { auth, dispatch } = useContext(AuthContext);

  const { onSubmit } = useAuth();

  useEffect(() => {
    const token = localStorage.getItem('token');

    if(!token) return;

    onSubmit({
      url: '/veterinario/profile',
      method: 'GET',
      headers: {
        'Authorization': `Bearer ${token}`
      }});
  }, [] );

  if (auth.status === 'checking') {
    return (
      <div className='h-screen flex justify-center items-center'>
        <Spinner
          width={"w-10"}
          height={"h-10"}
        />
      </div>
    );
  }

  if (auth.status === 'authenticated') {
    return (
      <PacientesProvider >
        <PrivateRoutes />
      </PacientesProvider>
    )
  }

  return (
    <PublicRoutes />
  );
};
