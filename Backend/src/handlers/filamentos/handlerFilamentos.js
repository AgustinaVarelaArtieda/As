const getAllFilamentos=require('../../controllers/filamentos/getAllFilamentos')
const putFilamento=require('../../controllers/filamentos/putFilamento')

function handlerGetFilamentos(req,res,next){
    try {
        getAllFilamentos(req,res,next)
    } catch (error) {
        console.log('Error en el handler',error)
        next(error)
    }
}

function handlerPutFilamento(req,res,next){
    try {
        putFilamento(req,res,next)
    } catch (error) {
        console.log('Error en el handler',error)
        next(error)
    }
}

module.exports={handlerGetFilamentos, handlerPutFilamento}