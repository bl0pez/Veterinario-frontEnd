import { useEffect, useState } from "react";
import { toast } from "react-toastify";
import { getLocalDate } from "../../helpers";

export const Formulario = () => {

  const [name, setName] = useState("");
  const [owner, setOwner] = useState("");
  const [email, setEmail] = useState("");
  const [date, setDate] = useState(getLocalDate(new Date()));
  const [symptom, setSymptom] = useState("");
  const [_id, setId] = useState(null);

  useEffect(() => {
    if (paciente?.name) {
      setName(paciente.name);
      setOwner(paciente.owner);
      setEmail(paciente.email);
      setDate(getLocalDate(paciente.date));
      setSymptom(paciente.symptom);
      setId(paciente._id);
    }
  }, [paciente]);

  const handleSubmit = (e) => {
    e.preventDefault();

    if (name === "" || owner === "" || email === "" || symptom === "") {
      toast.error("Todos los campos son obligatorios");
      return;
    }

    if (_id) {
      editarPaciente({
        name,
        owner,
        email,
        date,
        symptom,
        _id,
      });
    } else {
      agregarPaciente({
        name,
        owner,
        email,
        date,
        symptom,
        _id,
      });
    }

    setName("");
    setOwner("");
    setEmail("");
    setDate("");
    setSymptom("");

  };

  return (
    <>
      <h2 className="font-black text-3xl text-center">
        Administrador de Pacientes
      </h2>
      <p className="text-xl mt-5 mb-10 text-center">
        Añade tus pacientes y {""}
        <span className="text-indigo-600 font-bold">Administralos</span>
      </p>

      <form
        onSubmit={handleSubmit}
        className="bg-white py-10 px-5 mb-10 lg:mb-0 shadow-md rounded-md"
      >
        <div className="my-5">
          <label
            htmlFor="mascota"
            className="text-gray-700 uppercase font-bold"
          >
            Nombre mascota
          </label>
          <input
            id="mascota"
            className="bottom-2 w-full p-2 mt-2 placeholder-gray-400 rounded-md"
            autoComplete="off"
            type="text"
            placeholder="Nombre mascota"
            name="name"
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
        </div>
        <div className="my-5">
          <label
            htmlFor="propietario"
            className="text-gray-700 uppercase font-bold"
          >
            Nombre Propietario
          </label>
          <input
            id="propietario"
            className="bottom-2 w-full p-2 mt-2 placeholder-gray-400 rounded-md"
            autoComplete="off"
            type="text"
            placeholder="Nombre propietario"
            name="owner"
            value={owner}
            onChange={(e) => setOwner(e.target.value)}
          />
        </div>
        <div className="my-5">
          <label htmlFor="email" className="text-gray-700 uppercase font-bold">
            Email Propietario
          </label>
          <input
            id="email"
            className="bottom-2 w-full p-2 mt-2 placeholder-gray-400 rounded-md"
            autoComplete="off"
            type="email"
            placeholder="Email del propietario"
            name="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
        </div>
        <div className="my-5">
          <label htmlFor="fecha" className="text-gray-700 uppercase font-bold">
            Fecha Alta
          </label>
          <input
            id="fecha"
            className="bottom-2 w-full p-2 mt-2 placeholder-gray-400 rounded-md"
            type="datetime-local"
            placeholder="Nombre fecha"
            name="date"
            value={date}
            onChange={(e) => setDate(e.target.value)}
          />
        </div>
        <div className="my-5">
          <label
            htmlFor="sintomas"
            className="text-gray-700 uppercase font-bold"
          >
            sintomas
          </label>
          <textarea
            id="sintomas"
            className="bottom-2 w-full p-2 mt-2 placeholder-gray-400 rounded-md"
            autoComplete="off"
            placeholder="Describe los Síntomas"
            name="symptom"
            value={symptom}
            onChange={(e) => setSymptom(e.target.value)}
          ></textarea>
        </div>
        <button
          type="submit"
          className="bg-indigo-600 w-full p-3 cursor-pointer text-white uppercase font-bold hover:bg-indigo-700 transition-colors"
        >
          {_id ? "Guardar Cambios" : "Agregar paciente"}
        </button>
      </form>
    </>
  );
};
