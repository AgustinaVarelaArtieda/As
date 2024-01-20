const Compra=require('../../models/compras')

const handlerPutCompras = async (req,res,next)=>{
    try {
        const {id}=req.params

        const compra = await Compra.findOneAndUpdate({ _id:id },{
            estado: true
        }, {new:true})

        if (!compra ) {
          return 'Compra no encontrada, ocurrio un error';
        }

        console.log(compra)
        return res.status(200).json(compra)

    } catch (error) {
        console.log('Error en el handler',error)
        next(error)
    }
}

module.exports= handlerPutCompras