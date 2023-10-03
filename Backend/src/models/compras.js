const mongoose = require("mongoose")
const {model , Schema} = mongoose

const compras = new Schema({
    idUser: String,
    impresiones: [{
        type: String
    }],
    precioTotal: Number,
    estado: Boolean,
})

compras.set("toJSON",{
    transform: (document, returnedObject) =>{
        returnedObject.id = returnedObject._id
        delete returnedObject._id
        delete returnedObject.__v
    }
})

const Compra = model("Compra", compras)

module.exports = Compra