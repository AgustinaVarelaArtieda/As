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
            <Box sx={{
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
                mt : "8rem"
            }}>
                <SearchBar/>     
            </Box>
            <Box sx={{
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
            }}>
                <Carousel/>
            </Box>
            <Box sx={{
                minHeight: "100h"
            }}>
                <Box sx={{
                    display: "flex",
                    flexDirection: "column",
                    alignItems: "center",
                    mt : "8.7rem"
                }}>
                <Footer/>
                </Box>
            </Box>
        </Box>
    )
}

export default Landing;