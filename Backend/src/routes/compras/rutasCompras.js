const Router = require ("express")
const handlerCompras = require("../../handlers/compras/handlerCompras")

const mercadoPago = Router()

mercadoPago.post("/:idAuth", handlerCompras)


module.exports = mercadoPago