const express = require("express")
const cors = require("cors")
const app = express()

require("dotenv").config()
const {USER,PASSWORD} = process.env

const mongoose = require("mongoose")

mongoose.connect(`mongodb+srv://${USER}:${PASSWORD}@cluster0.rpunaol.mongodb.net/impresiones3D?retryWrites=true&w=majority`,{
    useNewUrlParser: true,
    useUnifiedTopology: true,
}).then(()=>{
    console.log("Conectado a la base de datos")
}).catch(err =>{
    console.log(err)
})

app.use(cors())
app.use(express.json())
