import NavBar from "../../components/NavBar/NavBar"
import SearchBar from "../../components/SearchBar/SearchBar"
import Carousel from "../../components/Carrusel/Carrusel"
import NuevaImpresion from "../../components/Formularios/NuevaImpresion/NuevaImpresion";

function Landing(){
    return(
        <div>
            <h1>HOLA</h1>
            <div>
                <NuevaImpresion/>
            </div>
            <NavBar/>
            <div>
                <SearchBar/>
            </div>
            <Carousel/>
        </div>
    )
}

export default Landing;