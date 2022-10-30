import { Navigate, Outlet } from "react-router-dom";
import { Spinner } from "../../ui/Spinner";

export const AuthLayout = () => {

  if (false) {
    return (
      <div className="h-screen bg-gray-100 justify-center items-center flex">
        <Spinner width="w-24" height="h-24" />
      </div>
    );
  };

  return (
    <>
      <main className="container mx-auto md:grid md:grid-cols-2 gap-12 p-5 pt-20 items-center">
        <Outlet />
      </main>
    </>
  );
};
