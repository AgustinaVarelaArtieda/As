const {getAllImpresiones, getImpresionPorId}=require('../../controllers/impresiones/getImpresiones')

function handlerGetImpresiones(req,res,next){
    try {
        getAllImpresiones(req,res,next)
    } catch (error) {
        console.log('Error en el handler',error)
        next(error)
    }
}

function handlerGetImpresionPorId(req,res,next){
    try {
        getImpresionPorId(req,res,next)
    } catch (error) {
        console.log('Error en el handler',error)
        next(error)
    }
}

module.exports={
    handlerGetImpresiones,
    handlerGetImpresionPorId
}