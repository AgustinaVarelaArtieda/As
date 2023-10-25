import axios from "axios";

export default async function infoProductos(cantidad) {
  try {
    const response = await axios.get(`/impresiones/?numeroPagina=1&cantidadPorPagina=${cantidad}`);
    return response.data;
  } catch (error) {
    //Luego reemplazar esto por un alert o un mensaje que le avise al usuario que fue un problema de la pagina
    throw new Error(error.message);
  }
}