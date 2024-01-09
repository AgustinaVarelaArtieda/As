import { useState, useEffect } from "react";
import axios from "axios";
import { Box, Card, CardContent, ImageList, ImageListItem, Typography } from "@mui/material";

export default function MisCompras(props){
    const { idAuth }=props

    const [miscompras, setMisCompras] = useState([]);

    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await axios.get(`/usuarios/${idAuth}`);
                 let datos = response.data.compras
                setMisCompras(datos);
            } catch (error) {
                console.error(error);
            }
        };
        fetchData();
    }, []);

    console.log(miscompras)
    
    return (
        <Box sx={{mb:'2rem'}}>
            <Typography variant="h4" gutterBottom="true" color="action" >Mis Compras</Typography>
            <Box display='flex' flexWrap='wrap' justifyContent= 'center'>
                {miscompras.length>0 ? miscompras.map((compra,index) => (
                    <Card key={index} sx={{ width:'32rem', height:200, m:'1rem', display: 'flex', flexDirection: 'row', borderRadius: '16px'}}>
                        <ImageList sx={{ width: 200, height:200, m:".5rem", borderRight: 1, borderColor:"grey.500"}} variant="owven" cols={2}>
                            {compra.impresiones?.map((el,index)=>(
                                <ImageListItem key={el.imagen}> 
                                    <img src={el.imagen} alt={el.nombre} loading="lazy"/>
                                </ImageListItem>
                            ))}
                        </ImageList>
                        <CardContent sx={{flex:1}}>
                            {compra.estado===true?<Typography variant="h4" color="success.main">Entregado</Typography>:<Typography variant="h4" color='error.main'>Compra cancelada</Typography>}
                            <Typography fontWeight='regular' variant="h5" color="text.secondary">${compra.precioTotal}</Typography>
                        </CardContent>
                    </Card>
                )): <Typography align="center" variant="h5">Realiza tu primera compra!</Typography>}
            </Box>
        </Box>
    )
}