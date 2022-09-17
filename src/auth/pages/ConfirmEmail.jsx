import { useParams, Link } from 'react-router-dom';
import { useEmailConfirm } from '../../hooks/axios/useEmailConfirm';
import { AlertarEmail } from '../ui';

export const ConfirmEmail = () => {
  const { token } = useParams();

  const { isLoaded, error } = useEmailConfirm(token);

  return (
    <>
      <div className="p-4">
        <h1 className="text-indigo-600 font-black text-6xl">
          Confirma tu cuenta
        </h1>
      </div>
      <div className="content-form">
        <AlertarEmail isLoaded={isLoaded} error={error} />
        <nav className="mt-5 lg:flex lg:justify-between">
          <Link to="/" className="link-form">
            Inicia Sesión
          </Link>
        </nav>
      </div>
    </>
  );
};
