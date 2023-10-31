const mongoose = require("mongoose")
const {model , Schema} = mongoose

const user = new Schema({
    nombre: String,
    idAuth: String,
    email: String,
    avatar: String,
    estado: Boolean,
    rol: String,
    compras:[{
        type: Schema.Types.ObjectId,
        ref: "Compra"
    }]
})

user.set("toJSON",{
    transform: (document, returnedObject) =>{
        returnedObject.id = returnedObject._id
        delete returnedObject._id
        delete returnedObject.__v
    }
})

const User = model("User", user)

module.exports = User