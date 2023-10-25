import { useState } from "react"
import {useNavigate} from "react-router-dom"
import {useDispatch} from "react-redux"
import {setSearchInput} from "../../redux/reducers/searchReducer1"

const SearchBar = () =>{
    
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