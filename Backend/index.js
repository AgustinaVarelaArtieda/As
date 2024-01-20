const express = require("express")
const bodyParser = require ("body-parser")
const cookieParser = require ("cookie-parser")
const cors = require("cors")
const app = express()

const routes = require ("./src/routes/index")

const notFound = require('./middlewares/notFound')
const errorHandler = require('./middlewares/errorHandler')
const requestLoguer = require('./middlewares/requestLoguer')

require("dotenv").config()
const {USER,PASSWORD, PORT} = process.env

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

app.use(bodyParser.urlencoded({ extended: true, limit: '50mb' })); //Establece la opción extended en true para permitir datos anidados en los cuerpos de las solicitudes y establece un límite de tamaño de 50 MB para los cuerpos de las solicitudes.
app.use(bodyParser.json({ limit: '50mb' })); //También se establece un límite de tamaño de 50 MB para los cuerpos de las solicitudes.
app.use(cookieParser()); //para analizar las cookies en las solicitudes entrantes.
app.use(requestLoguer);

//Midlewares para rutas
app.use('/asImpresiones', routes);

//Midlewares para errores. !!En la parte de catch utilizar error=>next(error)
app.use(notFound)
app.use(errorHandler)

app.listen(PORT,()=>{
    console.log(`Servidor corriendo en el puerto ${PORT}`)
})

