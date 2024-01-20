const modificarCarrito = require("../../controllers/carrito/modificarCarrito")

const updateCarritoHandler = async (req, res, next) => {
    try {
        const {idAuth} = req.params
        const producto = req.body
        
        const actualizacion = await modificarCarrito(idAuth, producto)
        return res.status(200).json(actualizacion)
    } catch (error) {
        next(error)
    }
}

module.exports = updateCarritoHandler