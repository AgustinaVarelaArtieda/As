import { Box, Button, Typography } from "@mui/material"
function ComprasMayor(){
    return(
        <Box sx={{
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            padding: "2rem"
        }}>
            <Typography variant="h5" >Compras por mayor</Typography>
            <Typography variant="body1">Si deseas realizar compras mayores a 10 impresiones contactanos con nosotros!</Typography>
            <Button variant="contained">Contactar</Button>
        </Box>
    )
}

export default ComprasMayor