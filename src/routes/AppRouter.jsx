import { useContext } from 'react';
import { AuthContext } from '../auth';

import { PrivateRoutes } from '../veterinaria/routes/PrivateRoutes';
import { PublicRoutes } from '../auth/routes/PublicRoutes';
import { PacientesProvider } from '../veterinaria/context';
import { Spinner } from '../ui/Spinner';
import { useEffect } from 'react';



export const AppRouter = () => {

  const { auth, startRevalidarSession } = useContext(AuthContext);

  useEffect(() => {
    startRevalidarSession();
  }, []);

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

  return (
    <>
      {
        auth.status === 'authenticated'
          ? (
            <PacientesProvider >
              <PrivateRoutes />
            </PacientesProvider>
          )
          : (
            <PublicRoutes />
          )
      }
    </>
  );
};
