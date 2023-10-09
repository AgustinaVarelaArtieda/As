const getAllFilamentos=require('../../controllers/filamentos/getAllFilamentos')

function handlerGetFilamentos(req,res,next){
    try {
        getAllFilamentos(req,res,next)
    } catch (error) {
        console.log('Error en el handler',error)
        next(error)
    }
}

module.exports=handlerGetFilamentos