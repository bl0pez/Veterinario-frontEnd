import { useContext } from "react";
import PacientesContext from "../veterinaria/context/PacientesProvider";

export const usePacientes = () => {
    return useContext(PacientesContext);
}