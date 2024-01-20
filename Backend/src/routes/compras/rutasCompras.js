const Router = require ("express")
const handlerCompras = require("../../handlers/compras/handlerCompras")
const handlerPutCompras = require("../../handlers/compras/handlerPutCompras")

const mercadoPago = Router()

mercadoPago.post("/:idAuth", handlerCompras)

mercadoPago.put("/:id", handlerPutCompras)

module.exports = mercadoPago