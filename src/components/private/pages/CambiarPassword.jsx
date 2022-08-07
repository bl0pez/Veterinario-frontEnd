import { toast } from "react-toastify";
import { AdminNav } from "../../";
import { useAuth } from "../../../hooks/useAuth";
import { useForm } from "../../../hooks/useForm";

export const CambiarPassword = () => {

  const { cambiarPassword } = useAuth();


  const { formState, onInputChange, onResetForm } = useForm({
    password: "",
    newPassword: "",
  });

  const { password, newPassword } = formState;

  const handleSubmit = (e) => {
    e.preventDefault();

    if (Object.values(formState).some((value) => value === "")) {
      toast.error("Todos los campos son obligatorios");
      return;
    }

    if (newPassword.length < 6) {
      toast.error("La contraseña debe tener al menos 6 caracteres");
      return;
    }

    cambiarPassword({ password, newPassword });

    onResetForm();

  };

  return (
    <>
      <AdminNav />

      <h2 className="font-black text-3xl text-center mt-10">
        Cambiar Passwors
      </h2>
      <p className="text-xl mt-5 mb-10 text-center">
        modifica tu{" "}
        <span className="text-indigo-600 font-bold"> password aquí</span>
      </p>

      <div className="flex justify-center">
        <div className="w-full md:w-1/2 bg-white shadow rounded-lg p-5">
          <form onSubmit={handleSubmit}>
            <div className="my-3">
              <label
                htmlFor="password"
                className="uppercase font-bold text-gray-600"
              >
                Contraseña Actual:
              </label>
              <input
                type="password"
                className="border bg-gray-50 w-full p-2 mt-5 rounded-lg"
                id="password"
                name="password"
                placeholder="Contraseña Actual"
                value={password}
                onChange={onInputChange}
              />
            </div>
            <div className="my-3">
              <label
                htmlFor="newPassword"
                className="uppercase font-bold text-gray-600"
              >
                Nueva contraseña:
              </label>
              <input
                type="newPassword"
                className="border bg-gray-50 w-full p-2 mt-5 rounded-lg"
                id="newPassword"
                name="newPassword"
                placeholder="Nueva contraseña"
                value={newPassword}
                onChange={onInputChange}
              />
            </div>
            <input
              type="submit"
              value="Actualizar Contraseña"
              className="bg-indigo-700 px-10 py-3 font-bold mt-5 text-white rounded-lg uppercase w-full cursor-pointer"
            />
          </form>
        </div>
      </div>
    </>
  );
};
