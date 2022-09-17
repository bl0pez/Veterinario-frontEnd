import React from 'react'
import { AppRouter } from './routes/AppRouter'
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.min.css';
import { AuthProvider } from './auth';
import { PacientesProvider } from './veterinaria';

export const App = () => {
  return (
    <AuthProvider>
      <PacientesProvider >
        <AppRouter />
        <ToastContainer />
      </PacientesProvider>
    </AuthProvider>

  )
}

