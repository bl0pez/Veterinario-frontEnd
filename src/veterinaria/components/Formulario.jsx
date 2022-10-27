import { useContext, useEffect } from "react";
import { toast } from "react-toastify";
import { veterinaryApi } from "../../api/axios";
import { getLocalDate } from "../../helpers";
import { useForm } from "../../hooks/useForm";
import { useSubmit } from "../../hooks/useSubmit";
import { PacientesContext } from "../context";


export const Formulario = () => {

  const { addPaciente, paciente, updatePaciente } = useContext(PacientesContext);

  const {formState, name, owner, email, symptom, date, onInputChange, onResetForm, onSetFormState} = useForm({
    name: "",
    owner: "", 
    email: "",
    symptom: "",
    date: getLocalDate(new Date()),
  });

  useEffect(() => {
    if (paciente) {
      onSetFormState({
        name: paciente.name,
        owner: paciente.owner,
        email: paciente.email,
        symptom: paciente.symptom,
        date: getLocalDate(new Date(paciente.date)),
      });
    }
  }, [paciente]);


  const { onSubmit, isLoding, error, data } = useSubmit();

  const handleSubmit = (e) => {
    e.preventDefault();

    if (name === "" || owner === "" || email === "" || symptom === "") {
      toast.error("Todos los campos son obligatorios");
      return;
    }

    if(paciente) {
      
      veterinaryApi({
        url: `pacientes/${paciente._id}`,
        method: "PUT",
        data: formState,
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${localStorage.getItem("token")}`,
        }
      })
    .then(({data}) => {
      console.log(data);
      toast.success("Paciente actualizado correctamente");
      updatePaciente(data.paciente);
      onResetForm();
    }).catch(err => {
      toast.error("Error al actualizar el paciente");
    });


      return;
    }

    veterinaryApi({
      url: "/pacientes",
      method: "POST",
      data: {name, owner, email, symptom, date},
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${localStorage.getItem("token")}`,
      }
    }).then(({data}) => {
      toast.success("Paciente agregado correctamente");
      addPaciente(data.newPaciente);
      onResetForm();
    }).catch(err => {
      toast.error("Error al agregar el paciente");
    });

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
            onChange={onInputChange}
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
            onChange={onInputChange}
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
            onChange={onInputChange}
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
            onChange={onInputChange}
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
            onChange={onInputChange}
          ></textarea>
        </div>
        <button
          type="submit"
          className="bg-indigo-600 w-full p-3 cursor-pointer text-white uppercase font-bold hover:bg-indigo-700 transition-colors"
        >
          { !!paciente ? "Guardar Cambios" : "Agregar paciente"}
        </button>
      </form>
    </>
  );
};
