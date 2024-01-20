const nuevoUsuario=require('../../controllers/Usuarios/nuevoUsuario')

const nuevoUsuarioHandler= async(req,res,next)=>{
    try {
        const {nombre,idAuth,email,avatar}=req.body
        const usuario= await nuevoUsuario(nombre,idAuth,email,avatar)
        console.log(usuario)
        return res.status(200).json(usuario)
        
    } catch (error) {
        next(error)
    }
}

module.exports=nuevoUsuarioHandler