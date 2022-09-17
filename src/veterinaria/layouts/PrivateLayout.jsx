import { useContext } from "react";
import { Navigate, Outlet } from "react-router-dom";
import { Header, Footer } from "./";
import { Spinner } from '../../ui/Spinner';
import { AuthContext } from "../../auth/context/AuthContext";

export const PrivateLayout = () => {

  const { status } = useContext(AuthContext);

  if(status === 'checking') {
    return (
      <div className="h-screen bg-gray-100 justify-center items-center flex">
        <Spinner width="w-24" height="h-24" />
      </div>
    );
  };

  if(status === 'not-authenticated') {
    <Navigate to="/" />
  }

  return (
    <>
      <Header />
        <main className="container mx-auto mt-10">
          <Outlet />
        </main>
      <Footer />
    </>
  );
};
