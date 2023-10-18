import {Routes, Route, Router} from "react-router-dom"
import Landing from "./views/Landing/Landing"
import Home from "./views/Home/Home"

function App() {

  return (
    
     <Routes>
        <Route path="/" element={<Landing/>}/>
        <Route path="/impresiones" element={<Home/>}/>
     </Routes>
   
  )
}

export default App
