import {useEffect, useState} from "react"

function Paginacion(props) {
  

    const { paginaFuncion, totalImpresiones, impresionesPorPagina, paginaActual } = props;
    
    const numeroPagina = Array.from({ length: Math.ceil(totalImpresiones / impresionesPorPagina) }, (_, i) => i + 1);
  
    function handlePrevPage() {
      const prevPage = paginaActual - 1
        ;
      paginaFuncion(prevPage);
    }
  
    function handleNextPage() {
      const nextPage = paginaActual + 1;
      paginaFuncion(nextPage);
    }

    useEffect(()=>{
      paginaFuncion(paginaActual)
    }, [])
    
    console.log(paginaActual)
    return (
      <div>
        <ul>
          <li>
            <button onClick={handlePrevPage} disabled={paginaActual===1}>Prev</button>
          </li>
          {numeroPagina.map((numero, index) => {
            const primeraPagina = index === 0;
            const ultimaPagina = index === numeroPagina.length - 1;
            const paginaActiva = numero === paginaActual;
  
            return (
              <li key={index} className={paginaActiva ? "activo" : ""}>
                <button onClick={() => paginaFuncion(numero)} disabled={paginaActiva}>
                  {numero}
                </button>
              </li>
            );
          })}
          <li>
            <button onClick={handleNextPage} disabled={paginaActual===numeroPagina.length}>Next</button>
          </li>
        </ul>
      </div>
    );
  }
  
export default Paginacion;