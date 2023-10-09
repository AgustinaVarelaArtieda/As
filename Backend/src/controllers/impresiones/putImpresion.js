const Impresion = require ("../../models/impresiones")

const actualizarImpresion = async (id, nombre, imagen, precioBase, estado) =>{
    const impresionActualizada = await Impresion.findByIdAndUpdate(id,{
        nombre,
        imagen,
        precioBase,
        estado
    },
    {new: true}
    )
    return impresionActualizada
}

module.exports = actualizarImpresion