import NavBar from "../../components/NavBar/NavBar"
import SearchBar from "../../components/SearchBar/SearchBar"
import Carousel from "../../components/Carrusel/Carrusel"
import { Link } from "react-router-dom";
import { Box, Container } from "@mui/material";
import Footer from "../../components/Footer/Footer";

function Landing(){
    return(
        <Box sx={{
            display: "flex",
            flexDirection: "column",
            minHeight: "100vh"
        }}>
                <NavBar/>
            <Container sx={{
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
                mt : "10rem"
            }}>
                <SearchBar/>     
            </Container>
            <Container sx={{
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
                mt: "11rem"
            }}>
                <Carousel/>
            </Container>
            {/* <Link to="/nuevaImpresion">
                <button>formulario</button>
            </Link> */}
            <Box sx={{
                minHeight: "100h"
            }}>
                <Footer/>
            </Box>
        </Box>
    )
}

export default Landing;