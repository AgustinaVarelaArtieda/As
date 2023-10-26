import { useEffect, useState } from "react";

import Comprar from "../Comprar/Comprar";
import Contacto from "../Contacto/Contacto";
import infoImpresion from "../../utils/infoImpresion";
import infoFilamento from "../../utils/infoFilamento"

function DetalleImpresion(props){

    const { id } = props;
    
    const [detalle, setDetalle] = useState({});
    const [colores, setColores] = useState([]);

    useEffect(()=>{
        const fetchData= async()=>{
            try{
                const data = await infoImpresion(id)
                setDetalle(data);
                const filamentos=await infoFilamento()
                setColores(filamentos)
            }catch(error){
                setDetalle({message:'error al traer la info del detalle'})
            }
        }
        fetchData();
    },[])

    const precio=detalle.precio
    const nombr=detalle.nombre

    return(
        <div>
            {detalle?.message? <h1>{detalle.message}</h1>
            :
            (<><h1>Detalles</h1>
            <div>
                <h1>{detalle.nombre}</h1>
                <img src={detalle.imagen} alt={detalle.nombre} />
                <h2>Medidas</h2>
                <p>Alto:{detalle?.tamañoBase.z}</p>
                <p>Ancho:{detalle?.tamañoBase.x}</p>
            </div>
            <h3>Colores disponibles:</h3>
                {colores.message? <h1>{colores.message}</h1>
                :
                (<>
                    {colores.map((el,index) => {
                        return(
                            <div key={index}>
                                <h4>{el.color}</h4>
                            </div>
                        )
                    })}
                </>)}
            <Comprar precio={precio} estoyEnCarrito={false}/>
            <Contacto nombre={nombr} />
            </>)
            }
        </div>
    )
}

export default DetalleImpresion