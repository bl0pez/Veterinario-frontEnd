import { Navigate, Outlet } from "react-router-dom";
import { useAuth } from "../../../hooks/useAuth";
import { Spinner } from "../../ui/Spinner";

export const AuthLayout = () => {

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
      {auth ? (
        <Navigate to="/admin" />
      ) : (
        <main className="container mx-auto md:grid md:grid-cols-2 gap-12 p-5 pt-20 items-center">
          <Outlet />
        </main>
      )}
    </>
  );
};
