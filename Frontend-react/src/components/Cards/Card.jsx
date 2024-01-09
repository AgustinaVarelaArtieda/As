import {useNavigate} from "react-router-dom"

import Card from "@mui/material/Card"
import CardHeader from '@mui/material/CardHeader';
import CardMedia from '@mui/material/CardMedia';
import { CardActionArea, Grid } from '@mui/material';


function Impresion ({impresiones}){

    const navigate = useNavigate()
    
    function handleClick(id){
        navigate(`/detalle/${id}`)
    }

    return(
        <Grid container spacing={1} justifyContent={"center"}>
        {
            impresiones.map((el) =>{
                return(
                    <Card key={el.id} sx={{ width: 345, height:300 ,m:'.5rem' }}>
                        <CardActionArea>
                            <CardHeader
                                title={el.nombre}
                                sx={{textAlign:"center"}}
                                />
                            <CardMedia
                                component="img"
                                height="230"
                                image={el.imagen}
                                alt={el.nombre}
                                onClick={() => handleClick(el.id)}
                                sx={{
                                    objectFit: 'contain',
                                }}
                                />
                        </CardActionArea>
                    </Card>
                )
            })
        }
        </Grid>
    )
}

export default Impresion