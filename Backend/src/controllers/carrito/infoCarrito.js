const User =require('../../models/usuarios')
const Carrito =require('../../models/carrito')

const infoCarrito=async(idAuth)=>{
    const usuario=await User.findOne({idAuth})
    if(!usuario){
        return 'Usuario no encontrado'
    }else{
        let carrito=await Carrito.find({user:usuario.id})
          .populate('impresiones')
        return carrito
    }
}

module.exports=infoCarrito