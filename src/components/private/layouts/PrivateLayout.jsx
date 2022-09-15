import { Navigate, Outlet } from "react-router-dom";
import { Footer } from "./Footer";
import { Header } from "./Header";
import { Spinner } from '../../';
import { useContext } from "react";
import { AuthContext } from "../../auth/context/AuthContext";

export const PrivateLayout = () => {

  const { status, user } = useContext(AuthContext);

  if(status === 'checking') {
    return (
      <div className="h-screen bg-gray-100 justify-center items-center flex">
        <Spinner width="w-24" height="h-24" />
      </div>
    );
  };

  return (
    <>
      <Header />
      {user ? (
        <main className="container mx-auto mt-10">
          <Outlet />
        </main>
      ) : (
        <Navigate to="/" />
      )}
      <Footer />
    </>
  );
};
