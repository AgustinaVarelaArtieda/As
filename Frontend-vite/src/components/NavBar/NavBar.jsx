import {NavLink} from 'react-router-dom'

function NavBar(){

    return (
        <nav class='menu'>
            <img alt='Logo A´s impresiones'/>
            <h1>A's Impresiones</h1>
            <ul>
                <li><NavLink>Productos</NavLink></li>
                <li><NavLink>Contáctanos</NavLink></li>
            </ul>
            <ul>
                <li><NavLink><img alt='Carrito'/></NavLink></li>
                <li><NavLink><img alt='Usuario'/></NavLink></li>
            </ul>
        </nav>
    )
}

export default NavBar;