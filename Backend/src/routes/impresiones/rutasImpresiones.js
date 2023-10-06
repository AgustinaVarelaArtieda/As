const Router = require ("express")

const postNuevaImpresionhandler = require("../../handlers/postNuevaImpresionHandler")

const impresiones = Router()

impresiones.post("/", postNuevaImpresionhandler)


module.exports = impresiones