const User =require('../../models/usuarios')

const infoUsuario = async (idAuth) => {
    const usuario = await User.findOne({ idAuth })
    if (!usuario ) {
      return 'Usuario no encontrado';
    }
    return usuario;
  };

module.exports = infoUsuario