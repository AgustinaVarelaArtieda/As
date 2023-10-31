const User=require('../../models/usuarios')

const actualizarUsuario=async(id,nombre,estado)=>{
    const usuarioActualizado=await User.findByIdAndUpdate(id,{
        nombre,
        estado
    },
    {new: true})
    return usuarioActualizado;
}

module.exports=actualizarUsuario