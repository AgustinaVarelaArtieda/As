const cloudinary = require('cloudinary').v2;
const Impresion = require ("../../models/impresiones")

require("dotenv").config()
const {NOMBRE_CLOUDINARY, APIKEY_CLOUDINARY, SECRET_CLOUDINARY} = process.env

cloudinary.config({
    cloud_name: NOMBRE_CLOUDINARY,
    api_key: APIKEY_CLOUDINARY,
    api_secret: SECRET_CLOUDINARY,
    
  });

const nuevaImpresion = async(nombre, imagen, precioBase, rellenoBase, tiempoBase, tamañoBase, estado) =>{
    console.log('datos controller',nombre, imagen, precioBase, rellenoBase, tiempoBase, tamañoBase, estado)
    
    const existente = await Impresion.findOne({nombre})

    if (existente) {
        return "la impresion ya existe"
    } else {
        console.log('imagen',imagen)

        const uploadedResponse = await cloudinary.uploader.upload(imagen);

        // Obtiene la URL de la imagen guardada en Cloudinary
        const imagenUrl = uploadedResponse.secure_url;

        const fechaActual = new Date() 
        const newImpresion = new Impresion({
            nombre,
            imagen: imagenUrl,
            precioBase,
            rellenoBase,
            tiempoBase,
            tamañoBase:{
                x: tamañoBase.x,
                y: tamañoBase.y,
                z: tamañoBase.z
            },
            estado,
            fecha: fechaActual
        })
            await newImpresion.save()
            return newImpresion
    }
}

module.exports = nuevaImpresion