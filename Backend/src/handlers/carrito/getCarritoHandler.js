const infoCarrito = require("../../controllers/carrito/infoCarrito")

async function handlerGetCarrito(req,res,next){
    try {
        const {idAuth}=req.params
        const carrito=await infoCarrito(idAuth)
        return res.status(200).json(carrito)
    } catch (error) {
        console.log('Error en el handler',error)
        next(error)
    }
}

module.exports= handlerGetCarrito