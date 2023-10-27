import {NavLink} from 'react-router-dom'
import LoginButton from '../Login/Login';
import { useAuth0 } from '@auth0/auth0-react';

function NavBar(){

    const { user, isAuthenticated, isLoading } = useAuth0();


    return (
        <nav className='menu'>
            <img alt='Logo A´s impresiones'/>
            <h1>As Impresiones</h1>
            <ul>
                <li><NavLink to= "/impresiones">Productos</NavLink></li>
                <li><NavLink>Contáctanos</NavLink></li>
            </ul>
            <ul>
                <li><NavLink><img alt='Carrito'/></NavLink></li>
                {isLoading ? (<div>...</div>) : (isAuthenticated?  <img src={user.picture} alt={user.name} />:(
                    <li><LoginButton/></li>
                ))}
            </ul>
        </nav>
    )
}

export default NavBar;