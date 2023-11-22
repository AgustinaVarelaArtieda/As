import {NavLink} from 'react-router-dom'
import { useEffect } from "react";
import LoginButton from '../Login/Login';
import { useAuth0 } from '@auth0/auth0-react';
import {useDispatch} from "react-redux"
import {setUser} from "../../redux/reducers/userReducer"
import {LocalStorageCache} from "@auth0/auth0-react"
import axios from 'axios';

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
        <nav className='menu'>
            <img alt='Logo A´s impresiones'/>
            <h1>As Impresiones</h1>
            <ul>
                <li><NavLink to= "/impresiones">Productos</NavLink></li>
                <li><NavLink>Contáctanos</NavLink></li>
            </ul>
            <ul>
                <li><NavLink to="/carrito"><img alt='Carrito'/></NavLink></li>
                {isLoading ? (<div>...</div>) : (isAuthenticated? (<NavLink to="/usuario"><img src={user.picture} alt={user.name}/></NavLink>):(
                    <li><LoginButton/></li>
                ))}
            </ul>
        </nav>
    )
}

export default NavBar;