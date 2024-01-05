import NavBar from "../../components/NavBar/NavBar"
import SearchBar from "../../components/SearchBar/SearchBar"
import Carousel from "../../components/Carrusel/Carrusel"
import { Link } from "react-router-dom";

function Landing(){
    return(
        <div>
                <NavBar/>
            <div>
                <SearchBar/>
            </div>
            <Carousel/>
            <Link to="/nuevaImpresion">
                <button>formulario</button>
            </Link>
        </div>
    )
}

export default Landing;