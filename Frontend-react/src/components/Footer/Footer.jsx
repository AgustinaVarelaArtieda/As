import { Box, Typography} from "@mui/material"

function Footer (){
    return (
            <Box>
                <Box sx={{
                display: "flex",
                flexDirection: "column",
                alignItems: "flex-start"
                }} >
                    <Typography variant = "h6" color= "textSecondary">
                        Informacion de contacto:
                    </Typography>
                    <Typography variant="body2" color= "textSecondary">
                        Cordoba, Argentina
                    </Typography>
                </Box>
                <Box>
                    <Typography variant="h5" color= "textSecondary" textAlign= "center">A's impresiones</Typography>
                </Box>
                    <Box sx={{
                display: "flex",
                flexDirection: "column",
                alignItems: "center"
                }}>
                    <Typography variant="body2" color= "textSecondary">Creado por Gusi98 y XII</Typography>
                    </Box>
            </Box>
    )
}

export default Footer