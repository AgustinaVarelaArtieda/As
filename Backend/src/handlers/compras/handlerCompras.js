const mercadopago = require ("mercadopago")
const dotenv = require("dotenv")
dotenv.config()

mercadopago.configure({
    access_token: process.env.ACCESS_TOKEN
})

const handlerCompras = async (req, res) => {
    
    const producto = req.body
    

    const arrayProductos = producto.map((e) =>{
        return {
            title: e.nombre,
            picture_url: e.imagen,              
            unit_price: e.precioBase,
            quantity: e.cantidad,
            currency_id: "ARS"
        }
    })

    try {

        const preference = {
            items: [
                {
                    arrayProductos
                },
            ],
            //rutas del front para redirigir en caso de exito o fallo
            back_urls: {
                success: "http://elpackfeliz",
                failure: "http://elpacktriste",
                pending: "http://elpackesperando"
            },
            auto_return: "approved"
        }
    
        const {response} = await mercadopago.preferences.create(preference)
        console.log(response)
        res.status(200).json(response.init_point)


    } catch (error) {
        console.error (error.message)
        res.status(500). json(error.message)
    }
}

module.exports = handlerCompras
