import { useEffect, useState } from "react";
import Comprar from "../Comprar/Comprar";
import infoImpresion from "../../utils/infoImpresion";
import infoFilamento from "../../utils/infoFilamento"
import { Box, Divider, Grid, Typography } from "@mui/material";

function DetalleImpresion(props){

    const { id } = props;
    
    const [detalle, setDetalle] = useState({});
    const [cantidad, setCantidad] = useState(1)

    useEffect(()=>{
        const fetchData= async()=>{
            try{
                const data = await infoImpresion(id)
                setDetalle(data);
            }catch(error){
                setDetalle({message:'error al traer la info del detalle'})
            }
        }
        fetchData();
    },[id])

    const precio=detalle.precioBase
    const nombr=detalle.nombre

    

    return(
        <Box sx={{
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
        }}>
            {detalle?.message? <Typography variant="body1" color="textSecondary">{detalle.message}</Typography>
            :
            (
            <Grid container spacing={1} sx={{
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                maxWidth: "80%",
                height: "100%",
                mt: "2rem",
                boxShadow: 3,
                borderRadius: "16px"
            }}>
            <Grid item xs sx={{
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
            }}>
                <Typography variant="h3" sx={{
                    textAlign: "center",
                    fontWeight: "bold",
                    padding: "1rem"
                }}>{detalle.nombre}</Typography>
                    <Box component="img" src={detalle.imagen} alt={detalle.nombre} sx={{
                        width: 300,
                        height: 300,
                        alignItems:"center"
                    }}/>
            </Grid>
            <Divider orientation= "vertical" sx={{height: 475}}/>
            <Grid item xs={6} sx={{
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
                
            }}>
            <Comprar precio={precio} id={id} imagen={detalle.imagen} nombre={nombr} cantidad={cantidad} />
            </Grid>
            <Divider  sx={{width: "100%"}}/>
            <Grid item xs={12} sx={{
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
                padding: "1rem"
                
            }}>
                <Typography variant="h4">Medidas</Typography>
                <Typography variant="body1">Alto:{detalle?.tamañoBase?.z}</Typography>
                <Typography variant="body1">Ancho:{detalle?.tamañoBase?.x}</Typography>
            </Grid>
        </Grid>
        )}
    </Box>
    )
}

export default DetalleImpresion