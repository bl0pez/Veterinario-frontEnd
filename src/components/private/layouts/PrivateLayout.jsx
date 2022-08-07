import { Navigate, Outlet } from "react-router-dom";
import { useAuth } from "../../../hooks/useAuth";
import { Footer } from "./Footer";
import { Header } from "./Header";
import { Spinner } from '../../';

export const PrivateLayout = () => {

  const { auth, isLoading } = useAuth();

  if(isLoading){
    return (
      <div className="h-screen bg-gray-100 justify-center items-center flex">
        <Spinner width="w-24" height="h-24" />
      </div>
    );
  };

  return (
    <>
      <Header />
      {auth?._id ? (
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
