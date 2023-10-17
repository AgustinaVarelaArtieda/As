import { useState } from "react"
import {useNavigate} from "react-router-dom"
import axios from "axios"

const SearchBar = () =>{
    
    //const navigate = useNavigate() //
    const [name, setName] = useState("")

    function inputHandleChange(e){
        e.preventDegault()
        setName(e.target.value)
    }

    function handleSubmit(e){
        e.preventDefault()
    }
    

    function handleKeyDown(e){
        if(e.key === "Enter"){
          handleSubmit(e)
        }
    }

    return (
        <div>
            <input type="text" placeholder="Buscar..." value={name} onChange={(e)=>inputHandleChange(e)} onKeyDown={(e)=>handleKeyDown(e)} />
            <button onClick={(e)=>handleSubmit(e)}>Buscar</button>
        </div>
    )
}

export default SearchBar