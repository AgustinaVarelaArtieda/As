const nuevaImpresion = require("../../controllers/impresiones/postNuevaImpresion")

const nuevaImpresionHandler = async (req, res, next) =>{
    const {nombre, imagen, precioBase, rellenoBase, tiempoBase, tamañoBase, estado} = req.body

    try {
        const newImpresion = await nuevaImpresion(nombre, imagen, precioBase, rellenoBase, tiempoBase, tamañoBase, estado)
        return res.status(201).json(newImpresion)
    } catch (error) {
        next(error)
    }
}

module.exports = nuevaImpresionHandler