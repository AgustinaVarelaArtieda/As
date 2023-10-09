const Router = require ("express")

const postNuevaImpresionhandler = require("../../handlers/impresiones/postNuevaImpresionHandler")
const {handlerGetImpresiones,handlerGetImpresionPorId}=require('../../handlers/impresiones/handlerGetImpresiones')
const putImpresionhandler = require("../../handlers/impresiones/putImpresionHandler")
const impresiones = Router()

impresiones.get('/',handlerGetImpresiones)
impresiones.get('/:id',handlerGetImpresionPorId)
impresiones.post("/", postNuevaImpresionhandler)
impresiones.put("/id", putImpresionhandler)

module.exports = impresiones