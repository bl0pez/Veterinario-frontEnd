import { Outlet } from 'react-router-dom';

export const AuthLayout = () => {
  return (
    <>
      <main className="container mx-auto md:grid md:grid-cols-2 gap-12 p-5 pt-20 items-center">
        <Outlet />
      </main>
    </>
  );
};
