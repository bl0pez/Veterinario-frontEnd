import { useContext } from 'react';
import { AuthContext } from '../auth';

import { PrivateRoutes } from '../veterinaria/routes/PrivateRoutes';
import { PublicRoutes } from '../auth/routes/PublicRoutes';
import { PacientesProvider } from '../veterinaria/context';
import { Spinner } from '../ui/Spinner';
import { useEffect } from 'react';
import { veterinaryApi } from '../api';
import { types } from '../auth/types/types';



export const AppRouter = () => {

  const { auth, dispatch } = useContext(AuthContext);

  useEffect(() => {
    console.log("useEffect");
    const token = localStorage.getItem('token');

    if(!token) return;

    dispatch({ type: types.chekingCredentiasls });

    veterinaryApi({
      url: '/veterinario/profile',
      method: 'GET',
      headers: {
        'Authorization': `Bearer ${token}`
      }
    }).then(({data}) => {
      dispatch({
        type: types.login,
        payload: data
      })
    }).catch(err => {
      dispatch({
        type: types.logout
      })
    })
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
