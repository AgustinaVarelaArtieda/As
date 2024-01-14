import {NavLink} from 'react-router-dom'
import { useEffect, useState } from "react";
import LoginButton from '../Login/Login';
import { useAuth0 } from '@auth0/auth0-react';
import {useDispatch} from "react-redux"
import {setUser} from "../../redux/reducers/userReducer"
import {LocalStorageCache} from "@auth0/auth0-react"
import axios from 'axios';
import {Avatar, Box, Button, Collapse, IconButton, colors} from "@mui/material"
import {AppBar} from '@mui/material';
import {Container} from '@mui/material'
import ShoppingCartTwoToneIcon from '@mui/icons-material/ShoppingCartTwoTone';
import RemoveShoppingCartIcon from '@mui/icons-material/RemoveShoppingCart';
export const cache = new LocalStorageCache()

function NavBar(){
    
    const dispatch = useDispatch()
    const { user, isAuthenticated, isLoading } = useAuth0();
    const [isCollapseOpen, setCollapseOpen] = useState(false)

    const postUsuario = async (nuevoUsuario) =>{
        try {
            const response = await axios.post ("/usuarios", nuevoUsuario)
            console.log(response)
        } catch (error) {
            console.log(error)
        }
    }

    useEffect(()=>{
        if (isAuthenticated && user && !cache.get("usuario")){
            let nuevoUsuario = {
                nombre: user.name,
                idAuth: user.sub,
                email: user.email,
                avatar: user.picture
            }
            postUsuario(nuevoUsuario)
            dispatch(setUser(nuevoUsuario))
            cache.set("usuario",nuevoUsuario)
        }
        // eslint-disable-next-line
    },[isAuthenticated, user])

    const collapseOpen = () => {
        setCollapseOpen(!isCollapseOpen)
    }
    
    return (
    <AppBar position='static' sx={{ mb: "1rem"}}>
            <Container maxWidth = "x1" sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center',}}>
                <Box
                sx={{display: "flex", flexDirection: "column"}}>
                <Avatar alt='Logo A´s impresiones' src='https://res.cloudinary.com/dafxyndon/image/upload/v1698357566/impresiones/logo_pftgcg.png' sx={{
                    width: "5rem",
                    height: "5rem",
                }} component="a" href='/'/>
                </Box>
            <Box sx={{
                display: "flex",
                alignContent: "space-between",
                flexDirection: {xs: "column", sm: "row"}
                }}>
                    <Button variant="contained" component = {NavLink} to="/impresiones" sx={{
                        marginRight: {sm:"2rem", xs:"0rem"},
                    }}>
                        Productos
                    </Button>
                    <Button variant='contained' component= {NavLink} to= "/contacto" sx={{
                        marginLeft: {sm:"2rem", xs:"0rem"},
                        marginTop: {sm:"0rem", xs:"0.5rem"},
                    }}>
                        Contáctanos
                    </Button>
            </Box>
            <Box 
            sx={{display: "flex", justifyContent: "space-between", alignItems: "center"}}>
                {isAuthenticated ? <IconButton aria-label='Shopping cart two tone' size='large' component ={NavLink} to = "/carrito">
                   <ShoppingCartTwoToneIcon fontSize='inherit'/>
                </IconButton> : <IconButton disabled><RemoveShoppingCartIcon/></IconButton>}
                {isLoading ? (<div>...</div>) : (isAuthenticated? (
                    <Box >
                        <Avatar src={user.picture} alt={user.name} onClick={collapseOpen}/>
                        <Collapse in={isCollapseOpen}>
                            <Box sx={{
                                display: "flex",
                                flexDirection: "column",
                                position:"absolute",
                                right: "0",
                                transition: "transform 0.3s cubic-bezier(0.4, 0, 0.2, 1), opacity 0.3s cubic-bezier(0.4, 0, 0.2, 1)",
                                transform: isCollapseOpen ?"translateY(0)" : "translateY(-8%)",
                                opacity: isCollapseOpen ? 1 : 0.7,
                            }}>
                            <Button variant='contained'>Mis Compras</Button>
                            <Button variant= "contained" color="error"> Log out</Button>
                            </Box>
                        </Collapse>
                    </Box>
                        
                    

                ):(
                    <LoginButton/>
                ))}
            </Box>
            </Container>
    </AppBar>
    )
}

export default NavBar;