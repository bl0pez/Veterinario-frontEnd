import { useContext } from "react";
import { PacientesContext } from "../context";

export const Paciente = ({ paciente }) => {

  const { removePaciente, setPaciente } = useContext(PacientesContext);

  const { name, date, email, owner, symptom, _id } = paciente;

  const formatearFecha = (fecha) => {
    const nuevaFecha = new Date(fecha);
    return new Intl.DateTimeFormat("es-CL", { dateStyle: "long" }).format(
      nuevaFecha
    );
  };

  return (
    <div className="mx-5 my-10 bg-white shadow-md px-5 py-10 rounded-xl">
      <p className="font-bold uppercase text-indigo-600">
        Nombre:
        <span className="font-normal normal-case text-black ml-1">{name}</span>
      </p>
      <p className="font-bold uppercase text-indigo-600">
        Propietario:
        <span className="font-normal normal-case text-black ml-1">{owner}</span>
      </p>
      <p className="font-bold uppercase text-indigo-600">
        Email Contacto:
        <span className="font-normal normal-case text-black ml-1">{email}</span>
      </p>
      <p className="font-bold uppercase text-indigo-600">
        Fecha de alta:
        <span className="font-normal normal-case text-black ml-1">
          {formatearFecha(date)}
        </span>
      </p>
      <p className="font-bold uppercase text-indigo-600">
        Sintomas:
        <span className="font-normal normal-case text-black ml-1">
          {symptom}
        </span>
      </p>

      <div className="flex justify-between my-5">
        <button
          type="button"
          className="py-2 px-10 bg-indigo-600 hover:bg-indigo-700 text-white uppercase font-bold rounded-lg"
          onClick={() => setPaciente(paciente)}
        >
          Editar
        </button>
        <button
          type="button"
          className="py-2 px-10 bg-red-600 hover:bg-red-700 text-white uppercase font-bold rounded-lg"
          onClick={() => removePaciente(_id)}
        >
          ELiminar
        </button>
      </div>
    </div>
  );
};
