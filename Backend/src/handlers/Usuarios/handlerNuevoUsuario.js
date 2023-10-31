const nuevoUsuario=require('../../controllers/Usuarios/nuevoUsuario')

const nuevoUsuarioHandler=(req,res,next)=>{
    try {
        const {nombre,idAuth,email,avatar}=req.body
        const usuario=nuevoUsuario(nombre,idAuth,email,avatar)
        return res.status(200).json(usuario)
        
    } catch (error) {
        next(error)
    }
}

module.exports=nuevoUsuarioHandler