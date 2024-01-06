import {useEffect} from "react"
import Pagination from '@mui/material/Pagination';
import Stack from '@mui/material/Stack';

function Paginacion(props) {
    const { paginaFuncion, totalImpresiones, impresionesPorPagina, paginaActual } = props;
    const numeroPagina = Math.ceil(totalImpresiones / impresionesPorPagina);
  
    function handlePageChange(event, page) {
      paginaFuncion(page);
    }

    useEffect(()=>{
      paginaFuncion(paginaActual)
      // eslint-disable-next-line
    }, [])
    
    return (
      <Stack spacing={2} sx={{mt:'2rem', mb:'2rem', alignItems:'center'}}>
          <Pagination 
            color="primary" 
            count={numeroPagina} 
            page={paginaActual} 
            onChange={handlePageChange} 
            showFirstButton 
            showLastButton
          />
      </Stack>
    );
  }
  
export default Paginacion;