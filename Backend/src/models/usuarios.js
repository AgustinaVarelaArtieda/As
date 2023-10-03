const mongoose = require("mongoose")
const {model , Schema} = mongoose

const user = new Schema({
    nombre: String,
    password: String,
    idAuth: String,
    email: String,
    avatar: String,
    estado: Boolean,
    rol: String,
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