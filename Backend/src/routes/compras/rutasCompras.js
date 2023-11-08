const Router = require ("express")
const handlerCompras = require("../../handlers/compras/handlerCompras")

const mercadoPago = Router()

mercadoPago.post("/", handlerCompras)


module.exports = mercadoPago