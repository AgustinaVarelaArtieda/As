const User =require('../../models/usuarios')
const Compra=require('../../models/compras')

const mongoose = require("mongoose");

const mercadopago = require ("mercadopago")
const dotenv = require("dotenv")
dotenv.config()

mercadopago.configure({
    access_token: process.env.ACCESS_TOKEN
})

const handlerCompras = async (req, res) => {
    
    const producto = req.body
    const {idAuth}=req.params

    const usuario = await User.findOne({ idAuth })
    if (!usuario ) {
      return 'Usuario no encontrado';
    }

    const arrayProductos = producto.map((e) =>{
        return {
            title: e.nombre,
            picture_url: e.imagen,              
            unit_price: e.precioBase,
            quantity: e.cantidad,
            currency_id: "ARS",
            id:e.id
        }
    })

    try {

        const preference = {
            items: 
                    arrayProductos
              ,
            //rutas del front para redirigir en caso de exito o fallo
            back_urls: {
                success: "http://localhost:3000/success",
                failure: "http://localhost:3000/failure",
            },
            auto_return: "approved"
        }

        let total=arrayProductos.reduce((a,e)=>{
           return a+e.unit_price*e.quantity
        },0)

        
        console.log(total, idAuth)

        const arrayProductosIds = arrayProductos.map(e => new mongoose.Types.ObjectId(e.id));
        const idUsuario= new mongoose.Types.ObjectId(usuario.id)

        const nuevaCompra= new Compra({
            impresiones: arrayProductosIds,
            precioTotal: total,
            estado: true,
            user:  idUsuario
        })
        
        await nuevaCompra.save()
        
        const id = nuevaCompra.id

        await Compra.findById(id).populate("user").populate("impresiones")

        await User.findByIdAndUpdate(usuario.id,
            {
                $push:{
                    compras: id
                }
        },{
            new: true
        }).populate("compras")    
        const {response} = await mercadopago.preferences.create(preference)

        res.status(200).json(response.init_point)

    } catch (error) {
        console.error (error.message)
        res.status(500). json(error.message)
    }
}

module.exports = handlerCompras
