const infoUsuario = require("../../controllers/Usuarios/infoUsuario")

const infoUsuarioHandler=async (req,res,next)=>{
    try {
        const {idAuth}=req.params
        const usuario=await infoUsuario(idAuth)
        return res.status(200).json(usuario)
    } catch (error) {
        next(error)
    }
}

module.exports=infoUsuarioHandler