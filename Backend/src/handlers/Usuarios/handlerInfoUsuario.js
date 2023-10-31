const infoUsuario = require("../../controllers/Usuarios/infoUsuario")

const infoUsuarioHandler=(req,res,next)=>{
    try {
        const {id}=req.params
        const usuario=infoUsuario(id)
        return res.status(200).json(usuario)
    } catch (error) {
        next(error)
    }
}

module.exports=infoUsuarioHandler