import axios from "axios";

export default async function infoImpresion(id) {
  try {
    const response = await axios.get(`/impresiones/${id}`);
    return response.data;
  } catch (error) {
    //Luego reemplazar esto por un alert o un mensaje que le avise al usuario que fue un problema de la pagina
    throw new Error(error.message);
  }
}