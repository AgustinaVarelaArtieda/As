import { useEffect, useState } from "react";
import Comprar from "../Comprar/Comprar";
import Contacto from "../Contacto/Contacto";
import infoImpresion from "../../utils/infoImpresion";
import { useParams } from "react-router-dom";

export default function DetalleImpresion(id){
    
    const [detalle, setDetalle] = useState({});

    useEffect(()=>{
        const fetchData= async()=>{
            try{
                const data = await infoImpresion(id)
                console.log(data)
                setDetalle(data);
            }catch(error){
                console.error(error);
                setDetalle({message:'error al traer la info del detalle'})
            }
        }
        fetchData();
    })

    const precio=detalle.precio
    const nombr=detalle.nombre

    return(
        <div>
            hola
            {detalle.message? <h1>{detalle.message}</h1>
            :
            (<><h1>Detalles</h1>
            <div>
                <h1>{detalle.nombre}</h1>
                <img src={detalle.imagen} alt={detalle.nombre} />
                <h2>Medidas</h2>
            </div>
            <Comprar precio={precio} estoyEnCarrito={false}/>
            <Contacto nombre={nombr} />
            </>)
            }
        </div>
    )
}