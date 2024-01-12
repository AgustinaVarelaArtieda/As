import {NavLink} from 'react-router-dom'
import { useEffect } from "react";
import LoginButton from '../Login/Login';
import { useAuth0 } from '@auth0/auth0-react';
import {useDispatch} from "react-redux"
import {setUser} from "../../redux/reducers/userReducer"
import {LocalStorageCache} from "@auth0/auth0-react"
import axios from 'axios';
import {Avatar, Box, Button, IconButton} from "@mui/material"
import {AppBar} from '@mui/material';
import {Container} from '@mui/material'
import ShoppingCartTwoToneIcon from '@mui/icons-material/ShoppingCartTwoTone';
export const cache = new LocalStorageCache()

function NavBar(){
    
    const dispatch = useDispatch()
    const { user, isAuthenticated, isLoading } = useAuth0();

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

    return (
    <AppBar position='static' sx={{ mb: "1rem"}}>
            <Container maxWidth = "x1" sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center',}}>
                <Box
                sx={{display: "flex", flexDirection: "column"}}>
                <img alt='Logo A´s impresiones'/>
                <h5>As Impresiones</h5>
                </Box>
            <Box sx={{
                display: "flex",
                alignContent: "space-evenly"}}>
                    <Button variant="contained" component = {NavLink} to="/impresiones">
                        Productos
                    </Button>
            </Box>
            <Box sx={{
                display: "flex",
                alignContent: "space-evenly",
            }}>
                    <Button variant='contained' component= {NavLink} to= "/contacto">
                        Contáctanos
                    </Button>
            </Box>
            <Box 
            sx={{display: "flex", justifyContent: "space-between", alignItems: "center"}}>
                <IconButton aria-label='Shopping cart two tone' size='large' component ={NavLink} to = "/carrito">
                   <ShoppingCartTwoToneIcon fontSize='inherit'/>
                </IconButton>
                {isLoading ? (<div>...</div>) : (isAuthenticated? (<NavLink to="/usuario"><Avatar src={user.picture} alt={user.name}/></NavLink>):(
                    <LoginButton/>
                ))}
            </Box>
            </Container>
    </AppBar>
    )
}

export default NavBar;