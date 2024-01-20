import {Box, Grid, IconButton, Typography} from "@mui/material"
import NavBar from "../NavBar/NavBar"
import WhatsAppIcon from '@mui/icons-material/WhatsApp';

export default function Contacto(){


    return(
        <Box>
            <NavBar/>
            <Box sx={{
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
            }}>
                <Typography variant="h2" sx={{m: "2rem",}}>Contacto</Typography>
                <Typography variant="body1" >para cantidades mayores a 10 impresiones o impresiones personalizadas puedes contactarte con este whatsapp</Typography>
            </Box>
            <Box sx={{
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
                m: "2rem",

            }}>
                <IconButton aria-label= "whatsapp" component="a" href=" https://wa.link/5ltcd0"><WhatsAppIcon sx={{ fontSize: "8rem"}}/></IconButton>
            </Box>
            <Box sx={{
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
            }}>
                <Typography variant="body2">o comunicate por estos correos</Typography>
                <Grid container>
                    <Grid item xs={6} sx={{
                        display: "flex",
                        flexDirection: "column",
                        alignItems: "center",
                    }}>
                        <Typography variant="body1" component="a" href="mailto:andresinfernoxii@gmail.com" sx={{
                            textDecoration:"none",
                            color:"inherit"
                        }}
                        >andresinfernoxii@gmail.com</Typography>
                    </Grid>
                    <Grid item xs={6} sx={{
                        display: "flex",
                        flexDirection: "column",
                        alignItems: "center",
                    }}>
                        <Typography variant="body1" component="a" href="mailto:agusvarela5@gmail.com" sx={{
                            textDecoration:"none",
                            color:"inherit"
                        }}
                        >agusvarela5@gmail.com</Typography>
                    </Grid>
                </Grid>
            </Box>

        </Box>
    )
}