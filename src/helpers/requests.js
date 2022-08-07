import { veterinaryApi } from "../api/axios";

const headers = {
    "Content-Type": "application/json",
    Authorization: `Bearer ${localStorage.getItem("token")}`,
}



//Request Veterinario

/**
 * Verifica si el veterinario existe en la base de datos
 * y lo loguea en el sistema
 * @returns {Promise<any>}
 */
export const getAuth = async () => {
    const { data } = await veterinaryApi({
        method: "GET",
        url: "/veterinario/profile",
        headers
    });
    
    return data;
    
}

/**
 * Confirma el correo del veterinario
 * @param {*} token 
 * @returns 
 */
export const getConfirmEmail = async(token) => {
    const { data } = await veterinaryApi({
        method: "GET",
        url: `veterinario/confirm/${token}`,
    });
    return data;
}

export const putVeterinario = async (veterinario) => {
    const { data } = await veterinaryApi({
        method: "PUT",
        url: `veterinario/profile/${veterinario._id}`,
        data: veterinario,
        headers,
    });

    return data;

}

/**
 * Recibe un Objeto con la contraseña antigua y la nueva
 * @param {Object} password 
 * @returns 
 */
export const putPassword = async (password) => {
    const { data } = await veterinaryApi({
        method: "PUT",
        url: `veterinario/password`,
        data: password,
        headers,
    });

    return data;

}

//Request de Pacientes

/**
 * Retorna todos los pacientes del veterinario
 * @returns {Promise<any>}
 */
export const getPacientes = async() => {
    const { data } = await veterinaryApi({
        method: "GET",
        url: "/paciente",
        headers,
    });
    
    return data;
    
}

/**
 * Crea un nuevo paciente en la base de datos
 * @param {*} paciente 
 * @returns 
 */
export const postPaciente = async(paciente) => {
    const { data } = await veterinaryApi({
        method: "POST",
        url: "/paciente",
        headers,
        data: paciente
    });
    
    return data;
    
}

/**
 * Recibe un objeto con los datos del paciente y actualiza el paciente en la base de datos
 * @param {*} paciente
 * @returns 
 */
export const putPaciente = async(paciente) => {
    const { data } = await veterinaryApi({
        method: "PUT",
        url: `/paciente/${paciente._id}`,
        headers,
        data: paciente
    });
    
    return data;
    
}

/**
 * Recibe un id del paciente y elimina el paciente en la base de datos
 * @param {*} id 
 * @returns 
 */
export const deletePaciente = async(id) => {
    const { data } = await veterinaryApi({
        method: "DELETE",
        url: `paciente/${id}`,
            headers,
        });

        return data;    
}

