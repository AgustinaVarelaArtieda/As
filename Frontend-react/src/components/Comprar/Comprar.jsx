import { useEffect, useState } from "react"

export default function Comprar({precio, estoyEnCarrito}){
    const [enCarrito, setEnCarrito] = useState(false)

    useEffect(()=>{
        if (estoyEnCarrito === true){
            setEnCarrito(true)
        }
    },[])

    function comprarImpresion(){
        //funcion para comprar producto directamente
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