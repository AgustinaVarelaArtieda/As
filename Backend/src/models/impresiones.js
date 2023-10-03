const mongoose = require("mongoose")
const {model , Schema} = mongoose

const impresion = new Schema({
    nombre: String,
    imagen: String,
    precioBase: Number,
    rellenoBase: Number,
    tiempoBase: Number,
    tamañoBase:{
        x: {type: Number, min: 0},
        y: {type: Number, min: 0},
        z: {type: Number, min: 0}
    },
    estado: Boolean,
})

impresion.set("toJSON",{
    transform: (document, returnedObject) =>{
        returnedObject.id = returnedObject._id
        delete returnedObject._id
        delete returnedObject.__v
    }
})

const Impresion = model("Impresion", impresion)

module.exports = Impresion