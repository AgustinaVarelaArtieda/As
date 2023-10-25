import {useParams} from "react-router-dom"
import DetalleImpresion from "../../components/Detalles/DetalleImpresion";
import NavBar from "../../components/NavBar/NavBar";

export default function Detail(){
    const { id } = useParams();
    console.log(id)
    return(
        <div>
            hola
            <NavBar/>
            <DetalleImpresion id={id}/>
        </div>
    )
}