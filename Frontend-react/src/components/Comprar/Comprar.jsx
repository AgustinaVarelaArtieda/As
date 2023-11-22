import { useEffect, useState } from "react"
import axios from "axios"
import {cache} from "../NavBar/NavBar"

export default function Comprar({precio,id ,nombre, cantidad, imagen, estoyEnCarrito}){
    
    const usuario = cache.get("usuario")

    const [enCarrito, setEnCarrito] = useState(false)

    const impresion = [{
        nombre: nombre,
        imagen: imagen,
        precioBase: precio,
        cantidad: cantidad,
        id: id
    }]

    const agrCarrito={
        id: id,
        solicitud: "agregar"
    }

    useEffect(()=>{
        if (estoyEnCarrito === true){
            setEnCarrito(true)
        }
        // eslint-disable-next-line
    },[])

    async function comprarImpresion(usuario){
        //funcion para comprar producto directamente
        if(!usuario){
            alert("no te registraste boludon")
        }else{
            const response = await axios.post(`/compra/${usuario.idAuth}`, impresion)
            window.location.href = response.data
        }
    }

    async function agregarCarrito(usuario){
        //funcion para agregar producto al carrito
        if(!usuario){
            alert("no te registraste boludon")
        }else{
            const response =await axios.put(`/carrito/${usuario.idAuth}`, agrCarrito)
            if(response.status===200){
                setEnCarrito(true)
                alert("Se agrego 1 impresion al carrito")
            }else{
                alert("error al agregar al carrito")
            }
        }
    }

    return(
        <div>
            <h1>{precio}</h1>
            <button onClick={()=>comprarImpresion(usuario)}>Comprar</button>
            {enCarrito?<p>Producto en carrito</p>:<button onClick={()=>agregarCarrito(usuario)}>Agregar al Carrito</button>}
        </div>
    )
}