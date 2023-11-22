const { default: mongoose } = require("mongoose")
const Carrito=require("../../models/carrito")
const User=require("../../models/usuarios")

async function modificarCarrito(idAuth, producto){

    const solicitud=producto.solicitud
    
    console.log(solicitud)
    const usuario= await User.findOne({idAuth}).populate("carrito")
    
    if(!usuario){
        return 'Usuario no encontrado'
    }else{
        const carritoId = usuario.carrito._id
        switch (solicitud) {
            case "agregar":
                const nuevoProducto=new mongoose.Types.ObjectId(producto.id)
                await Carrito.findByIdAndUpdate(carritoId, {$push:{impresiones:nuevoProducto}},{new:true}).populate('impresiones');
                break;
            case "eliminar":
                const carritoActualizado=await Carrito.findByIdAndUpdate(carritoId, {$pull:{impresiones: producto.id}},{new:true});
                return carritoActualizado
            case "limpiar":
                await Carrito.findByIdAndUpdate(carritoId, {impresiones: []},{new:true});
                break;
            default:
                break;
        }
    }
}

module.exports=modificarCarrito