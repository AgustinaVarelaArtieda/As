import { AppBar, Box, Toolbar, Typography} from "@mui/material"

function Footer (){
    return (
            <AppBar  color="info" position="fixed" sx={{top: "auto", bottom:0}} >
                <Toolbar sx={{justifyContent: "space-between", }}>
                    <Box sx={{
                        display: "flex",
                        flexDirection: "column",
                        
                        alignItems: "flex-start",
                        }} >
                        <Typography variant = "h6">
                            Informacion de contacto:
                        </Typography>
                        <Typography variant="body2">
                            Cordoba, Argentina
                        </Typography>
                    </Box>
                    <Box>
                        <Typography variant="h5" textAlign= "center">A's impresiones</Typography>
                    </Box>
                        <Box sx={{
                            display: "flex",
                            flexDirection: "column",
                            alignItems: "center"
                            }}>
                        <Typography variant="body2" color= "textSecondary">Creado por Gusi98 y XII</Typography>
                        </Box>
                </Toolbar>
            </AppBar>
    )
}

export default Footer