const mongoose = require("mongoose")
const {model , Schema} = mongoose

const carrito = new Schema({
    idUser: String,
    impresiones:[{
        nombre:{type:String},
        imagen:{type:String},
        precio:{type:Number},
        cantidad:{type:Number, min:1}
    }],
    estado: Boolean,
})

carrito.set("toJSON",{
    transform: (document, returnedObject) =>{
        returnedObject.id = returnedObject._id
        delete returnedObject._id
        delete returnedObject.__v
    }
})

const Carrito = model("Carrito", carrito)

module.exports = Carrito