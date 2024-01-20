import {NavLink} from "react-router-dom"
import { useParams } from "react-router-dom";
import axios from "axios";
import { useEffect } from "react";

export default function Success () {

    const { id } = useParams();
    console.log("ID",id)

    async function compraRealizada(id){
        try{
            await axios.put(`/compra/${id}`)

        }catch(error){
            console.log("ERROR",error)
        }
    }

    useEffect(()=>{
        compraRealizada(id)
    },[])

    return (

        <div>
            <h1>Tu compra ha sido exitosa! que lo disfrutes!</h1>
            <NavLink to= "/">
            <button> volver a inicio</button>
            </NavLink>
        </div>

    )
}