import axios from "axios";

async function infoFilamento () {
    try {
        const response = await axios.get("/filamentos");
        const filamentos = response.data

        let filamentosActivos = []
        filamentos.map((el)=>{
            if(el.estado === true){
                filamentosActivos.push({
                    color: el.color,
                    tipo: el.tipo,
                })
            }
            return filamentosActivos
        })
        return filamentosActivos
    }
    catch (error) {
        //reemplazar esto por alert
        throw new Error(error.message);
    }
}

export default infoFilamento