const User =require('../../models/usuarios')

const infoUsuario = async(id)=>{
    const usuario = await User.findById(id)
    return usuario
}

module.exports = infoUsuario