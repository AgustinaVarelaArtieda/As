import { Box, Typography } from "@mui/material"
import SearchOffIcon from '@mui/icons-material/SearchOff';
import NavBar from "../../components/NavBar/NavBar";

const BusquedaFallida=()=>{
    return(
        <Box alignItems={'center'}>
            <NavBar/>
            <Typography variant="h4" align='center'><SearchOffIcon color="error" sx={{fontSize:'4rem', mt:'5rem'}}/></Typography>
            <Typography variant="h4" align='center'>No encontramos lo que estas buscando</Typography>
        </Box>
    )
}

export default BusquedaFallida