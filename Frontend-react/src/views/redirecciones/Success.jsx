import {NavLink} from "react-router-dom"

export default function Success () {

    return (

        <div>
            <h1>Tu compra ha sido exitosa! que lo disfrutes!</h1>
            <NavLink to= "/">
            <button> volver a inicio</button>
            </NavLink>
        </div>

    )
}