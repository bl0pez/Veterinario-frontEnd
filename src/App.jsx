import React from 'react'
import { AppRouter } from './routes/AppRouter'
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.min.css';

export const App = () => {
  return (
    <>
    <AppRouter />
    <ToastContainer />
    </>
  )
}

