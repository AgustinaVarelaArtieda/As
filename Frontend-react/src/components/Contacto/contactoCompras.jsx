import { Box, IconButton, Typography } from "@mui/material"
import WhatsAppIcon from '@mui/icons-material/WhatsApp';
function ComprasMayor(){
    return(
        <Box sx={{
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            padding: "2rem"
        }}>
            <Typography variant="h5" >Compras por mayor</Typography>
            <Typography variant="body1">Si deseas realizar compras mayores a 10 impresiones contactate con nosotros!</Typography>
            <IconButton aria-label="whatsapp" component='a' href="https://wa.link/5ltcd0" ><WhatsAppIcon sx={{fontSize:'3rem'}} color="success"/></IconButton>
        </Box>
    )
}

export default ComprasMayor