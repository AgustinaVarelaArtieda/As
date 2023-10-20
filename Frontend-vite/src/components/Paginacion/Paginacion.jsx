import PropTypes from 'prop-types'

function Paginacion(props) {
    
    Paginacion.propTypes={
        paginaFuncion:PropTypes.func.isRequired,
        totalImpresiones:PropTypes.number.isRequired,
        impresionesPorPagina:PropTypes.number.isRequired,
        paginaActual:PropTypes.number.isRequired
    }

    const { paginaFuncion, totalImpresiones, impresionesPorPagina, paginaActual } = props;
    
    const numeroPagina = Array.from({ length: Math.ceil(totalImpresiones / impresionesPorPagina) }, (_, i) => i + 1);
  
    function handlePrevPage() {
      const prevPage = Math.max(paginaActual - 1, 1);
      paginaFuncion(prevPage);
    }
  
    function handleNextPage() {
      const nextPage = Math.min(paginaActual + 1, numeroPagina.length);
      paginaFuncion(nextPage);
    }
  
    return (
      <div>
        <ul>
          <li>
            <button onClick={handlePrevPage}>Prev</button>
          </li>
          {numeroPagina.map((numero, index) => {
            const primeraPagina = index === 0;
            const ultimaPagina = index === numeroPagina.length - 1;
            const paginaActiva = numero === paginaActual || Math.abs(numero - paginaActual) === 1;
  
            return (
              <li key={index} className={paginaActiva ? "activo" : ""}>
                <button onClick={() => paginaFuncion(numero)} disabled={paginaActiva}>
                  {numero}
                </button>
              </li>
            );
          })}
          <li>
            <button onClick={handleNextPage}>Next</button>
          </li>
        </ul>
      </div>
    );
  }
  
export default Paginacion;