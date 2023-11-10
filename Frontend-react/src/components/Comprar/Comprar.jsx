import { useEffect, useState } from "react"
import axios from "axios"
import {cache} from "../NavBar/NavBar"

export default function Comprar({precio, estoyEnCarrito}){
    
    let usuario = cache.get("usuario")

    const [enCarrito, setEnCarrito] = useState(false)


    useEffect(()=>{
        if (estoyEnCarrito === true){
            setEnCarrito(true)
        }
    },[])

    function comprarImpresion(impresion){
        //funcion para comprar producto directamente
        const response = axios.post(`/compra/${usuario}`, impresion)
        
        window.location.href = response.data
    }

    function agregarCarrito(){
        //funcion para agregar producto al carrito
    }

    return(
        <div>
            <h1>{precio}</h1>
            <button onClick={()=>comprarImpresion}>Comprar</button>
            {enCarrito?'':<button onClick={()=>agregarCarrito}>Agregar al Carrito</button>}
        </div>
    )
}