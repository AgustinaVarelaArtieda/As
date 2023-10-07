const Impresion = require ("../../models/impresiones")

function getAllImpresiones(req,res,next){   //con paginado, filtrado por nombre y ordenamiento
    
    const {numeroPagina,cantidadPorPagina,tipoOrden,orden,nombre}=req.query

    const skip = (numeroPagina - 1) * cantidadPorPagina; // Cantidad de elementos a omitir  //revisar esta parte, el paginado se hace raro
    const limite = cantidadPorPagina; // Cantidad de elementos por página

    const filtrado = {}

    if(nombre){
        filtrado.nombre = { $regex: nombre, $options:'i' } //el options:'i' hace que la busqueda sea insensible a las mayusc
    }

    Impresion.find(filtrado)
        .sort({[tipoOrden]: orden}) //orden:se utiliza 1 para ASC y -1 para DESC-tipoOrden: debe ser un string
        .skip(skip)
        .limit(limite)
        .then((impresiones)=>{
            if(impresiones.length<1){
                console.log('No hay impresiones guardadas con esas caracteristicas')
                return res.status(204).json('No hay impresiones guardadas con esas caracteristicas')    //revisar esta respuesta
            }else{
                return res.status(200).json(impresiones)
            }
        })
        .catch((error)=>{
            console.log(error)
            next(error)
        })
}


function getImpresionPorId(req,res,next){ 
    const {id}=req.params   
    Impresion.findById(id)
    .then((impresion) => {
      if (impresion.length<1) {
        console.log('No se encontró ninguna impresión con el ID:', id); 
        throw res.status(204).json('No se encontró ninguna impresión con el ID:', id)   //revisar status de respuesta
      } else {
        console.log('Impresión encontrada:', impresion);
        return res.status(302).json(impresion)
      }
    })
    .catch((error) => {
      console.error('Error al obtener la impresión por ID:', error);
      next(error)
    });
}

module.exports = {
    getAllImpresiones,
    getImpresionPorId,
}