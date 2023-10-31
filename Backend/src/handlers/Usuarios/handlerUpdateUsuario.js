const actualizarUsuario=require('../../controllers/Usuarios/actualizarUsuario')

const actualizarUsuarioHandler=async(req,res,next)=>{
    try {
        const {id}=req.params
        const {nombre,estado}=req.body
        const usuarioActualizado=await actualizarUsuario(id,nombre,estado)
        return res.status(200).json(usuarioActualizado)
        
    } catch (error) {
        next(error)
    }
}

module.exports=actualizarUsuarioHandler