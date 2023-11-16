import { useEffect, useState } from "react";

import Comprar from "../Comprar/Comprar";
import Contacto from "../Contacto/Contacto";
import infoImpresion from "../../utils/infoImpresion";
import infoFilamento from "../../utils/infoFilamento"

function DetalleImpresion(props){

    const { id } = props;
    
    const [detalle, setDetalle] = useState({});
    const [colores, setColores] = useState([]);
    const [cantidad, setCantidad] = useState(1)

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
    },[id])

    function handleCantidadSuma () {
        setCantidad(cantidad+1)

    }

    function handleCantidadResta (){
        if (cantidad > 1){
            setCantidad(cantidad-1)
        }
    }

    const precio=detalle.precioBase
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
                <p>Alto:{detalle?.tamañoBase?.z}</p>
                <p>Ancho:{detalle?.tamañoBase?.x}</p>
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
            <Comprar precio={precio} estoyEnCarrito={false} id={id} imagen={detalle.imagen} nombre={nombr} cantidad={cantidad} />
            <Contacto nombre={nombr} />
            <div>
                <button onClick={handleCantidadSuma}>+</button>
                <p>{cantidad}</p>
                <button onClick={handleCantidadResta}>-</button>
            </div>
            </>)
            }
        </div>
    )
}

export default DetalleImpresion