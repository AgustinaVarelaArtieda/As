import { useState } from "react";

import Collapse from '@mui/material/Collapse';
import Button from "@mui/material/Button";
import AddIcon from '@mui/icons-material/Add';

import NuevaImpresion from "../Formularios/NuevaImpresion/NuevaImpresion";
import { Box } from "@mui/material";


const Admin=()=>{

    const [expanded, setExpanded] = useState(false)
    const handleExpandClick = () => {
        setExpanded(!expanded);
      };

    return(
        <Box>
            <Button onClick={handleExpandClick} startIcon={<AddIcon/>} >Agregar impresion</Button>
            <Collapse in={expanded} timeout="auto" unmountOnExit>
                <NuevaImpresion/>
            </Collapse>
        </Box>
    )
}

export default Admin