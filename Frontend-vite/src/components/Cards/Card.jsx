import PropTypes from "prop-types"
import {useNavigate} from "react-router-dom"

function Card ({impresiones}){
    Card.propTypes = {
        impresiones: PropTypes.array.isRequired
    }

    const navigate = useNavigate()
    
    function handleClick(id){
        navigate(`/detalle/${id}`)
    }

    return(


        <div>
        {
            impresiones.map((el) =>{
                return(
                    <div key={el.id}>
                        <h1>{el.nombre}</h1>
                        <img src={el.imagen} alt={el.nombre} onClick={() => handleClick(el.id)}/>
                        <h2>Medidas</h2>
                        <p>Alto:{el.tamañoBase.z}</p>
                        <p>Ancho:{el.tamañoBase.x}</p>
                    </div>
                )
            })
        }
        </div>
    )
}

export default Card