import NavBar from "../../components/NavBar/NavBar"
import SearchBar from "../../components/SearchBar/SearchBar"
import Carousel from "../../components/Carrusel/Carousel"

function Landing(){
    return(
        <div>
            <h1>HOLA</h1>
            <NavBar/>
            <div>
                <SearchBar/>
            </div>
            <Carousel/>
        </div>
    )
}

export default Landing;