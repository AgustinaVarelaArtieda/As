const Router = require ("express")
const handlerGetCarrito = require("../../handlers/carrito/getCarritoHandler")
const updateCarritoHandler = require("../../handlers/carrito/updateCarritoHandler")

const carrito=Router()

carrito.get("/info/:idAuth", handlerGetCarrito)

carrito.put("/:idAuth", updateCarritoHandler)

module.exports = carrito