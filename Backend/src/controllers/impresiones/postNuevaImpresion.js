const Impresion = require ("../../models/impresiones")

const nuevaImpresion = async(nombre, imagen, precioBase, rellenoBase, tiempoBase, tamañoBase, estado) =>{
    const existente = await Impresion.findOne({nombre})
    if (existente) {
        return "la impresion ya existe"
    } else {
        const newImpresion = new Impresion({
            nombre,
            imagen,
            precioBase,
            rellenoBase,
            tiempoBase,
            tamañoBase:{
                x: tamañoBase.x,
                y: tamañoBase.y,
                z: tamañoBase.z
            },
            estado
        })
            await newImpresion.save()
            return newImpresion
    }
}

module.exports = nuevaImpresion