const mongoose = require("mongoose")
const {model , Schema} = mongoose

const filamento = new Schema({
    color: String,
    tipo: String,
    estado: Boolean,
})

filamento.set("toJSON",{
    transform: (document, returnedObject) =>{
        returnedObject.id = returnedObject._id
        delete returnedObject._id
        delete returnedObject.__v
    }
})

const Filamento = model("Filamento", filamento)

module.exports = Filamento