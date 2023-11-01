const User =require('../../models/usuarios')

const nuevoUsuario = async(nombre,idAuth,email,avatar) => {
    const existe=await User.findOne({idAuth})

    if(existe){
        return "el usuario ya existe"
    }else{
        let rol = 'cliente'
    
        if(email==='agusvarela5@gmail.com'||email==='andresinfernoxii@gmail.com'){
            rol='administrador'
        }
    
        const newUsuario= new User({
            nombre,
            idAuth,
            email,
            avatar,
            estado:true,
            rol:rol,
            compras:[]
        })
        await newUsuario.save()
        return newUsuario
    }
}

module.exports=nuevoUsuario