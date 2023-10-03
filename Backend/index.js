const express = require("express")
const cors = require("cors")
const app = express()

require("dotenv").config()
const {USER,PASSWORD} = process.env

const mongoose = require("mongoose")
const {Schema} = mongoose

app.use(cors())
app.use(express.json())

mongoose.connect(`mongodb+srv://${USER}:${PASSWORD}@cluster0.rpunaol.mongodb.net/impresiones3D?retryWrites=true&w=majority`,{
    useNewUrlParser: true,
    useUnifiedTopology: true,
}).then(()=>{
    console.log("Conectado a la base de datos")
}).catch(err =>{
    console.log(err)
})


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

const filamento = new Schema({
    color: String,
    tipo: String,
    estado: Boolean,
})

const user = new Schema({
    nombre: String,
    password: String,
    idAuth: String,
    email: String,
    avatar: String,
    estado: Boolean,
    rol: String,
})

const compras = new Schema({
    idUser: String,
    impresiones: [{
        type: String
    }],
    precioTotal: Number,
    estado: Boolean,
})

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