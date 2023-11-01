export default function MisCompras(props){
    const { idAuth }=props

    const [miscompras, setMisCompras] = useState([]);

    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await axios.get(`/usuarios/${idAuth}`);
                setMisCompras(response.data.compras);
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
                        {compra.precioTotal}
                        {compra.impresiones?.map((el,index)=>(
                            <li key={index}>
                                {el.imagen}
                            </li>
                        ))}
                    </li>
                )): <h2>Realiza tu primera compra!</h2>}
            </ul>
        </div>
    )
}