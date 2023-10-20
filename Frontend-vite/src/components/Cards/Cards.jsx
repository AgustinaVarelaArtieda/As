import axios from "axios"
import {useState, useEffect} from "react"
import Card from "./Card"
function Cards () {
    
    const [impresiones, setImpresiones] = useState([]);

    const [paginaActual, setPaginaActual]=useState(1)
    const impresionesPorPagina=6
    const totalImpresiones=20   //Ver como calcular esto (ver de hacer una funcion que me traiga solo la cantidad de elementos que hay en la carpeta impresiones)

    const handleImpresion = async()=>{
        const response = await axios.get(`/impresiones?numeroPagina=${paginaActual}&cantidadPorPagina=${impresionesPorPagina}`)
        setImpresiones(response.data)
    }

    useEffect(()=>{
        handleImpresion()
    })

    function paginaFuncion(numero){
        setPaginaActual(numero)
    }

    return (
        <div>
            <Card impresiones ={impresiones} />
            {/* <Paginacion paginaFuncion={paginaFuncion} totalImpresiones={totalImpresiones} impresionesPorPagina={impresionesPorPagina} paginaActual={paginaActual/> */}
        </div>
    )
}

export default Cards