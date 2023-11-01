import {Routes, Route} from "react-router-dom"
import Landing from "./views/Landing/Landing"
import Home from "./views/Home/Home"
import Detail from "./views/Detalle/Detail"
import PerfilUsuario from "./views/Perfil/PerfilUsuario";

import './App.css';

function App() {
  return (
    <Routes>
        <Route path="/" element={<Landing/>}/>
        <Route path="/impresiones" element={<Home/>}/>
        <Route path= "/detalle/:id" element={<Detail/>}/>
        <Route path="/usuario" element={<PerfilUsuario/>}/>
     </Routes>
  );
}

export default App;
