import Box from "@mui/material/Box";
import NavBar from "../../components/NavBar/NavBar";
import Usuario from "../../components/Usuario/Usuario";

export default function PerfilUsuario(){
    return(
        <Box >
            <NavBar/> 
            <Box>
                <Usuario/>
            </Box>
        </Box>
    )
}