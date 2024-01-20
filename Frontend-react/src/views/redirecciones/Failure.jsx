import {NavLink} from "react-router-dom"

export default function Failure () {

    return (

        <div>
            <h1>Tu compra ha fallado, intentalo de nuevo mas tarde</h1>
            <NavLink to= "/">
            <button> volver a inicio</button>
            </NavLink>
        </div>

    )
}