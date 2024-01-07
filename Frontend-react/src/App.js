import {Routes, Route} from "react-router-dom"
import Landing from "./views/Landing/Landing"
import Home from "./views/Home/Home"
import Detail from "./views/Detalle/Detail"
import PerfilUsuario from "./views/Perfil/PerfilUsuario";
import Failure from "./views/redirecciones/Failure"
import Success from "./views/redirecciones/Success";
import CarritoUsuario from "./views/Carrito/CarritoUsuario";
import './App.css';
import NuevaImpresion from "./components/Formularios/NuevaImpresion/NuevaImpresion";


function App() {
  return (
    <Routes>
        <Route path="/" element={<Landing/>}/>
        <Route path="/impresiones" element={<Home/>}/>
        <Route path= "/detalle/:id" element={<Detail/>}/>
        <Route path="/usuario" element={<PerfilUsuario/>}/>
        <Route path="/carrito" element={<CarritoUsuario/>}/>
        <Route path="/nuevaimpresion" element={<NuevaImpresion/>}/>
        <Route path="/success/:id" element={<Success/>}/>
        <Route path="/failure" element={<Failure/>}/>
     </Routes>
  );
}

export default App;
