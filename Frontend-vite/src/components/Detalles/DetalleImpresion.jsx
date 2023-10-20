import { useEffect, useState } from "react";
import Comprar from "../Comprar/Comprar";
import Contacto from "../Contacto/Contacto";
import infoImpresion from "../../utils/infoImpresion";
import { useParams } from "react-router-dom";

export default function DetalleImpresion(){
    const { id } = useParams();

    const [detalle, setDetalle] = useState({});

    useEffect(()=>{
        const fetchData= async()=>{
            try{
                const data = await infoImpresion(id)
                setDetalle(data);
            }catch(error){
                console.error(error);
                setDetalle({message:'error al traer la info del detalle'})
            }
        }
        fetchData();
    })

    return(
        <div>
            {detalle.message? <h1>{detalle.message}</h1>
            :
            (<><h1>Detalles</h1>
            <div>
                <h1>{detalle.nombre}</h1>
                <img src={detalle.imagen} alt={detalle.nombre} />
                <h2>Medidas</h2>
                <p>Alto:{detalle.tamañoBase.z}</p>
                <p>Ancho:{detalle.tamañoBase.x}</p>
            </div>
            <Comprar precio={detalle.precioBase} estoyEnCarrito={false}/>
            <Contacto nombre={detalle.nombre} />
            </>)
            }
        </div>
    )
}