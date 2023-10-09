const putImpresion = require ("../../controllers/impresiones/putImpresion")

const putImpresionhandler = async(req, res, next) =>{
    try {
        const {id} = req.params
        const {nombre, imagen, precioBase, estado} = req.body

        const actualizacion = await putImpresion(id, nombre, imagen, precioBase, estado)
        if(!actualizacion){
            return res.status(404).json({error: "Impresión no encontrada"})
        }
        return res.status(200).json(actualizacion)
    } catch (error) {
        next(error)
    }
}

module.exports = putImpresionhandler