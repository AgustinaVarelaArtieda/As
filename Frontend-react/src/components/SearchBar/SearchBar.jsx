import { useState } from "react"
import {useNavigate} from "react-router-dom"
import {useDispatch, useSelector} from "react-redux"
import {setSearchInput} from "../../redux/reducers/searchReducer1"

import SearchIcon from '@mui/icons-material/Search';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import { IconButton } from "@mui/material";

const SearchBar = () =>{
    const busqueda = useSelector(state => state.search)
    const dispatch = useDispatch()
    const navigate = useNavigate()
    const [name, setName] = useState("")

    function inputHandleChange(e){
        e.preventDefault()
        setName(e.target.value)
    }

    function handleSubmit(e){
        e.preventDefault()
        dispatch(setSearchInput(name))
        navigate("/impresiones")
        console.log(busqueda)
    }

    function handleKeyDown(e){
        if(e.key === "Enter"){
          handleSubmit(e)
        }
    }

    return (
        <Box sx={{ display: 'flex',alignContent:'center', width: '100%', ml:'1rem', maxWidth:'30rem' }} >   
            <TextField id="input-name" label="Buscar..." variant="standard" 
                value={name} 
                onChange={(e)=>inputHandleChange(e)} 
                onKeyDown={(e)=>handleKeyDown(e)}
                sx={{width:'100%'}}
            />
            <IconButton color="primary" aria-label="Buscar impresión" sx={{mt:'1rem'}} onClick={(e)=>handleSubmit(e)}>
                <SearchIcon />
            </IconButton>
        </Box>
    )
}

export default SearchBar