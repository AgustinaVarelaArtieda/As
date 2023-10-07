const Router = require ("express")

const postNuevaImpresionhandler = require("../../handlers/postNuevaImpresionHandler")
const {handlerGetImpresiones,handlerGetImpresionPorId}=require('../../handlers/impresiones/handlerGetImpresiones')

const impresiones = Router()

impresiones.get('/',handlerGetImpresiones)
impresiones.get('/:id',handlerGetImpresionPorId)
impresiones.post("/", postNuevaImpresionhandler)

module.exports = impresiones