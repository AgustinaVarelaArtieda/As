import { useState, useEffect } from "react";
import axios from "axios";

export default function MisCompras(props){
    const { idAuth }=props

    const [miscompras, setMisCompras] = useState([]);

    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await axios.get(`/usuarios/${idAuth}`);
                 let datos = response.data.compras
                const filtrados = datos.filter((el) => el.estado === true)
                setMisCompras(filtrados);
            } catch (error) {
                console.error(error);
            }
        };
        fetchData();
    }, []);
    
    return (
        <div>
            <h1>Mis Compras</h1>
            <ul>
                {miscompras.length>0 ? miscompras.map((compra,index) => (
                    <li key={index}>
                        <p>{compra.precioTotal}</p>
                        <ul>
                        {compra.impresiones?.map((el,index)=>(
                            <li key={index}>
                                <img src={el.imagen} alt={el.nombre}/>
                            </li>
                        ))}
                        </ul>
                    </li>
                )): <h2>Realiza tu primera compra!</h2>}
            </ul>
        </div>
    )
}