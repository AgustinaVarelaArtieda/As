import { Box } from "@mui/material";
import Carrito from "../../components/Carrito/Carrito";
import ComprasMayor from "../../components/Contacto/contactoCompras";

function CarritoUsuario (){
    return(
        <Box>
            <Carrito/>
            <Box sx={{
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
            }}>
                <ComprasMayor/>
            </Box>
        </Box>
    )
}

export default CarritoUsuario