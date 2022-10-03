import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.min.css';

import { AuthProvider } from './auth';
import { AppRouter } from './routes/AppRouter'

export const App = () => {
  return (
    <AuthProvider>
      <AppRouter />
      <ToastContainer />
    </AuthProvider>

  )
}

