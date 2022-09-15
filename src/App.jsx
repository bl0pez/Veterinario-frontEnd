import React from 'react'
import { AppRouter } from './routes/AppRouter'
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.min.css';
import { AuthProvider } from './components/auth/context/AuthProvider';
import { PacientesProvider } from './context/PacientesProvider';

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

