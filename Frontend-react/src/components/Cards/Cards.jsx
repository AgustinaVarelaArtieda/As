import axios from "axios"
import {useState, useEffect} from "react"
import Impresion from "./Card"
import Paginacion from "../Paginacion/Paginacion"
import {useSelector} from "react-redux"
import Box from "@mui/material/Box"
import CircularProgress from "@mui/material/CircularProgress"


function Cards () {
    
    const busqueda = useSelector(state => state.search)

    const [impresiones, setImpresiones] = useState([]);
    const [buscando, setBusqueda] = useState(false)

    const [paginaActual, setPaginaActual]=useState(1)
    const impresionesPorPagina=6
    const totalImpresiones=20   //Ver como calcular esto (ver de hacer una funcion que me traiga solo la cantidad de elementos que hay en la carpeta impresiones)
    
    function paginaFuncion(numero){
        setPaginaActual(numero)
    }

    function temporizador(segundos){
        setTimeout(()=>{setBusqueda(false)}, segundos)
    }

    const handleImpresion = async () => {
      const pagina=paginaActual
        if (busqueda) {
          setBusqueda(true)
          temporizador(1000)
          const response = await axios.get(`/impresiones?nombre=${busqueda.searchInput}&numeroPagina=${pagina}&cantidadPorPagina=${impresionesPorPagina}`)
          if(response.data===""){
            window.location.href='/noencontrado'
          }else{
            setImpresiones(response.data);
          }
          console.log(response)
        } else {
          setBusqueda(true)
          const response = await axios.get(`/impresiones?numeroPagina=${pagina}&cantidadPorPagina=${impresionesPorPagina}`
          );
          setImpresiones(response.data);
        }
      };
        
    useEffect(()=>{
        handleImpresion()
        temporizador(2000)
        // eslint-disable-next-line
    },[busqueda, paginaActual])

    return (
        <Box sx={{mt:'2rem'}}>
          {buscando?<CircularProgress sx={{ml:'50%', mt:'20%'}}/>:
            <Box>
            <Impresion impresiones ={impresiones} />
            <Paginacion paginaFuncion={paginaFuncion} totalImpresiones={totalImpresiones} impresionesPorPagina={impresionesPorPagina} paginaActual={paginaActual}/>
            </Box>
          }
        </Box>
    )
}

export default Cards