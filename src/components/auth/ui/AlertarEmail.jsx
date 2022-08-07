import { Spinner } from "../../ui/Spinner";

export const AlertarEmail = ({ isLoaded, error }) => {
  if (error) {
    return (
      <div className="bg-red-600 text-white p-5 border text-xl uppercase rounded-lg">
        Token no valido
      </div>
    );
  }

  if (isLoaded) {
    return <Spinner width={"w-10"} height={"h-10"} />;
  }

  return (
    <>
      <div className="bg-lime-500 text-white p-5 border text-xl uppercase rounded-lg">
        Cuenta confirmada ya puedes iniciar sesión
      </div>
    </>
  );
};
