import { Box, Container } from "@mui/material";
import Cards from "../../components/Cards/Cards";
import NavBar from "../../components/NavBar/NavBar"

function Home(){
    return(
        <Box>
            <NavBar/>
            <Container fixed>
                <Cards/>
            </Container>        
        </Box>
    )
}

export default Home;