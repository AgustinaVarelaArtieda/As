import { useEffect, useState } from "react"
import {cache} from "../NavBar/NavBar"
import axios from "axios"
import { NavLink } from "react-router-dom";

function Carrito (){
    const [carrito, setCarrito] = useState([]);
    const usuario = cache.get("usuario")

    async function traerInfo(){
        const response = await axios.get(`/carrito/info/${usuario.idAuth}`)
        setCarrito(response.data[0]?.impresiones)
        console.log(response.data[0]?.impresiones)
    }

    useEffect(()=>{
        traerInfo()
        // eslint-disable-next-line
    },[])

    let impresiones=[]

    if(carrito & carrito?.length>0){
        impresiones=carrito[0].impresiones?.map((elemento)=>{
            return({
                nombre:elemento.nombre,
                imagen:elemento.imagen,
                precioBase:elemento.precioBase,
                cantidad:1,
                id:elemento.id
            })
        })
    }

    async function comprarImpresion(usuario){
        const response = await axios.post(`/compra/${usuario}`, impresiones)
        window.location.href = response.data
        
    }

    async function eliminarImpresion(usuario,id){
        //funcion para eliminar impresion del carrito
        if(!usuario){
            alert("no te registraste boludon")
        }else{
            const response = await axios.put(`/carrito/${usuario}`, {
                id:id,
                solicitud: "eliminar"
            })
            setCarrito(response.data)
        }
    }

    return(
        <div>
            <h1>Carrito</h1>
            <div>
                {carrito.length>0?
                    carrito.map((impresion)=>{
                        return(
                            <div key={impresion.id}>
                                <p>{impresion.nombre}</p>
                                <img src={impresion.imagen} alt={impresion.nombre}/>
                                <p>{impresion.precioBase}</p>
                                <div className="cantidades">
                                    <button onClick={()=>{impresion.cantidad=impresion.cantidad-1}} disabled={impresion.cantidad===1}>-</button>
                                    <p>{impresion.cantidad}</p>
                                    <button onClick={()=>{impresion.cantidad=impresion.cantidad+1}}>+</button>
                                </div>
                                <button onClick={()=>{eliminarImpresion(usuario.idAuth,impresion.id)}}>Eliminar</button>
                            </div>
                        )
                    })
                    :
                    <div>
                    <p>Agrega impresiones a tu carrito!</p>
                    <NavLink to="/impresiones"><button>Buscar impresiones</button></NavLink>
                </div>
                }
            </div>
                <button onClick={()=>comprarImpresion(usuario.idAuth)} disabled={carrito.length===0}>Comprar</button>
        </div>
    )
}

export default Carrito