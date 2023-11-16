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

    useEffect(()=>{
        if (estoyEnCarrito === true){
            setEnCarrito(true)
        }
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

    function agregarCarrito(){
        //funcion para agregar producto al carrito
    }

    return(
        <div>
            <h1>{precio}</h1>
            <button onClick={()=>comprarImpresion(usuario)}>Comprar</button>
            {enCarrito?'':<button onClick={()=>agregarCarrito}>Agregar al Carrito</button>}
        </div>
    )
}