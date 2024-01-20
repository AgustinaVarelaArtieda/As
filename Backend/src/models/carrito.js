const mongoose = require("mongoose")
const {model , Schema} = mongoose

const carrito = new Schema({
    impresiones: [{
        type: Schema.Types.ObjectId,
        ref: "Impresion"
    }],
    user:{
        type: Schema.Types.ObjectId,
        ref: "User"
    }
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