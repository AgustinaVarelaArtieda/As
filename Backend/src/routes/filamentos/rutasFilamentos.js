const Router = require ("express")

const {handlerGetFilamentos,handlerPutFilamento}=require('../../handlers/filamentos/handlerFilamentos')

const filamentos = Router()

filamentos.get('/',handlerGetFilamentos)
filamentos.put('/:id',handlerPutFilamento)

module.exports = filamentos