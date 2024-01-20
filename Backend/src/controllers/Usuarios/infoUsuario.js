const User =require('../../models/usuarios')
const Compra = require('../../models/compras')

const infoUsuario = async (idAuth) => {
    let usuario = await User.findOne({ idAuth })
    if (!usuario ) {
      return 'Usuario no encontrado';
    }
    let populatedCompra = await Compra.find({user:usuario.id})
      .populate('impresiones')

    usuario.compras = populatedCompra
    
    return usuario;
  };

module.exports = infoUsuario