import { useEffect, useState } from "react"
import NavBar, {cache} from "../NavBar/NavBar"
import axios from "axios"
import { NavLink } from "react-router-dom";
import { Typography, Box, Button, IconButton, Table, TableContainer, TableBody, TableRow, TableCell, Grid, TableHead} from "@mui/material";
import AddIcon from '@mui/icons-material/Add';
import RemoveIcon from '@mui/icons-material/Remove';
import DeleteIcon from '@mui/icons-material/Delete';
function Carrito (){
    const [carrito, setCarrito] = useState([]);
    const usuario = cache.get("usuario")

    useEffect(()=>{
        if(usuario){
            traerInfo()    
            console.log("traerinfo")
        }
        console.log("useeffect")
        // eslint-disable-next-line
    },[])

    async function traerInfo(){
        const response = await axios.get(`/carrito/info/${usuario.idAuth}`)
        setCarrito(response.data[0]?.impresiones.map((elemento)=>{
            return {
                nombre:elemento.nombre,
                imagen:elemento.imagen,
                precioBase:elemento.precioBase,
                cantidad:1,
                id:elemento.id
            }
        }))
        }

    async function comprarImpresion(usuario){
        const response = await axios.post(`/compra/${usuario}`, carrito)
        window.location.href = response.data
        
    }

    async function eliminarImpresion(usuario,id){
        //funcion para eliminar impresion del carrito
        if(!usuario){
            alert("no te registraste aun!")
        }else{
            const response = await axios.put(`/carrito/${usuario}`, {
                id:id,
                solicitud: "eliminar"
            })
            setCarrito(carrito.filter(el=>el.id!==id))
        }
    }

    function agregarHandler(id){
        setCarrito(carrito.map((impresion)=>{
            if(impresion.id===id){
                return{
                    ...impresion,
                    cantidad:impresion.cantidad+1,

                }
            }else{
                return impresion
            }
        }))
    }

    function restarHandler(id){
        setCarrito(carrito.map((impresion)=>{
            if(impresion.id===id){
                return{
                    ...impresion,
                    cantidad:impresion.cantidad-1
                }
            }else{
                return impresion
            }
        }))
    }

    function calcularPrecioTotal(){
        let total=0
        carrito.forEach((impresion)=>{
            total+=impresion.precioBase*impresion.cantidad
        })
        return total
    }
    useEffect(() =>{
        calcularPrecioTotal()
    }, [carrito])

    return (
        <Box>
        <NavBar/>
        <Grid container>
            <Grid item xs={8}>
                <TableContainer>
                    <Table>
                        <TableHead>
                            <TableRow>
                                <TableCell align="center">
                                </TableCell>
                                <TableCell align="center">
                                    Nombre
                                </TableCell>
                                <TableCell align="center">
                                    Precio por unidad
                                </TableCell>
                                <TableCell align="center">
                                    Cantidad
                                </TableCell>
                                <TableCell align="center">
                                </TableCell>
                            </TableRow>
                        </TableHead>
                        <TableBody>
                            {carrito.map((impresion) => (
                                <TableRow key={impresion.id}>
                                    <TableCell align="center">
                                        <Box component="img" src={impresion?.imagen} alt={impresion.nombre} sx={{ width: 100, height: 100 }} />
                                    </TableCell>
                                    <TableCell align="center">
                                        <Typography variant="body1">{impresion.nombre}</Typography>
                                    </TableCell>
                                    <TableCell align="center">
                                        <Typography variant="body1">{impresion.precioBase}</Typography>
                                    </TableCell>
                                    <TableCell align="center">
                                        <Box sx={{ display: "flex", alignItems: "center" }}>
                                            <IconButton variant="contained" aria-label="remove" color="error" onClick={() => restarHandler(impresion.id)} disabled={impresion.cantidad === 1}>
                                                <RemoveIcon/>
                                            </IconButton>
                                                <Typography variant="body2">{impresion.cantidad}</Typography>
                                            <IconButton variant="contained" color="success" aria-label="add" onClick={() => agregarHandler(impresion.id)}>
                                                <AddIcon/>
                                            </IconButton>
                                        </Box>
                                    </TableCell>
                                    <TableCell align="center">
                                        <Button variant="contained" endIcon={<DeleteIcon/>} color="error" onClick={() => eliminarImpresion(usuario.idAuth, impresion.id)}>Eliminar</Button>
                                </TableCell>
                        </TableRow>
                    ))}
                </TableBody>
            </Table>
        </TableContainer>
            </Grid>
            {carrito.length === 0 && (
                <Box sx={{ display: "flex", flexDirection: "column", alignItems: "center" }}>
                    <Typography variant="h1">Agrega impresiones a tu carrito!</Typography>
                    <NavLink to="/impresiones">
                        <Button variant="contained">Buscar impresiones</Button>
                    </NavLink>
                </Box>
            )}
                <Grid item xs sx={{
                    display: "flex",
                    flexDirection: "column",
                    alignItems: "center",
                    justifyContent: "center"
                }}>
                    <Typography variant="h4">Total: ${calcularPrecioTotal()}</Typography>
                    <Button variant="contained" onClick={() => comprarImpresion(usuario.idAuth)} disabled={carrito.length === 0}>
                        Comprar
                    </Button>
                </Grid>
        </Grid>
        </Box>
    );
}

export default Carrito