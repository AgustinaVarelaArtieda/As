import { useEffect, useState } from "react"
import axios from "axios"
import {cache} from "../NavBar/NavBar"
import { Typography, IconButton, Button, Box, Alert} from "@mui/material"
import AddShoppingCartIcon from '@mui/icons-material/AddShoppingCart';
import LocalMallIcon from '@mui/icons-material/LocalMall';


export default function Comprar({precio,id ,nombre, cantidad, imagen}){
    
    const usuario = cache.get("usuario")

    const [enCarrito, setEnCarrito] = useState(false)
    const [alerta, setAlerta] = useState(null)

    

    async function estoy(id){
        const response = await axios.get(`/carrito/info/${usuario.idAuth}`)
        console.log(response.data[0]?.impresiones)
        response.data[0]?.impresiones.map(l=>{
            if(l.id===id){
                setEnCarrito(true)
                console.log("en carrito")
            }
        })
        console.log(enCarrito)
    }

    

    useEffect(()=>{
        estoy(id)
        // eslint-disable-next-line
    },[id])

    async function comprarImpresion(usuario){
        //funcion para comprar producto directamente
        if(!usuario){
            setAlerta({mensaje: "no te registraste aun!", severidad: "warning"})
        }else{
            const impresion = [{
                nombre: nombre,
                imagen: imagen,
                precioBase: precio,
                cantidad: cantidad,
                id: id
            }]
            const response = await axios.post(`/compra/${usuario.idAuth}`, impresion)
            window.location.href = response.data
        }
    }

    async function agregarCarrito(usuario){
        //funcion para agregar producto al carrito
        if(!usuario){
            setAlerta({mensaje: "no te registraste aun!", severidad: "warning"})
        }else{
            const agrCarrito={
                id: id,
                solicitud: "agregar"
            }
            const response =await axios.put(`/carrito/${usuario.idAuth}`, agrCarrito)
            if(response.status===200){
                setEnCarrito(true)
                setAlerta({mensaje: "Se agrego 1 impresion al carrito", severidad: "success"})
            }else{
                setAlerta({mensaje:"error al agregar al carrito", severidad: "error"})
            }
        }
    }

    return(
        <div>
            {alerta && <Alert severity={alerta.severidad}>{alerta.mensaje}</Alert>}
        <Box sx={{
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
        }}> 
            <Box sx={{
                display: "flex",
                justifyContent: "space-between",
                alignItems: "center",
                gap: "1rem",
                mb: "2rem"
            }}>
            <Typography variant="h4"> Precio:</Typography>
            <Typography variant= "h4">$ {precio}</Typography>
            </Box>
            <Box sx={{
                display: "flex",
                flexDirection: "row",
                justifyContent: "space-between",
            }}>
            <Button variant="contained" color="primary" endIcon ={<LocalMallIcon/>} onClick={()=>comprarImpresion(usuario)}>Comprar</Button>
            {enCarrito===true?<Typography variant="body1" color="textSecondary">Producto en carrito</Typography>:<IconButton aria-label="add to shopping cart" onClick={()=>agregarCarrito(usuario)}>
                <AddShoppingCartIcon/>
                </IconButton>}
            </Box>
        </Box>
        </div>
    )
}