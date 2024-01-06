import axios from "axios"
import {useState, useEffect} from "react"
import Impresion from "./Card"
import Paginacion from "../Paginacion/Paginacion"
import {useSelector} from "react-redux"
import Box from "@mui/material/Box"

function Cards () {
    
    const busqueda = useSelector(state => state.search)

    const [impresiones, setImpresiones] = useState([]);

    const [paginaActual, setPaginaActual]=useState(1)
    const impresionesPorPagina=6
    const totalImpresiones=20   //Ver como calcular esto (ver de hacer una funcion que me traiga solo la cantidad de elementos que hay en la carpeta impresiones)
    
    function paginaFuncion(numero){
        setPaginaActual(numero)
    }

    const handleImpresion = async () => {
      const pagina=paginaActual
        if (busqueda) {
          const response = await axios.get(`/impresiones?nombre=${busqueda.searchInput}&numeroPagina=${pagina}&cantidadPorPagina=${impresionesPorPagina}`)
          setImpresiones(response.data);
        } else {
          
          const response = await axios.get(`/impresiones?numeroPagina=${pagina}&cantidadPorPagina=${impresionesPorPagina}`
          );
          setImpresiones(response.data);
        }
      };
        
    useEffect(()=>{
        handleImpresion()
        // eslint-disable-next-line
    },[busqueda, paginaActual])

    return (
        <Box sx={{mt:'2rem'}}>
            <Impresion impresiones ={impresiones} />
            <Paginacion paginaFuncion={paginaFuncion} totalImpresiones={totalImpresiones} impresionesPorPagina={impresionesPorPagina} paginaActual={paginaActual}/>
        </Box>
    )
}

export default Cards