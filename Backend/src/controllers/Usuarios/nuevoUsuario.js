const User =require('../../models/usuarios')
const Carrito=require('../../models/carrito')

const nuevoUsuario = async(nombre,idAuth,email,avatar) => {
    const existe=await User.findOne({idAuth})

    if(existe){
        return "el usuario ya existe"
    }else{
        let rol = 'cliente'
    
        if(email==='agusvarela5@gmail.com'||email==='andresinfernoxii@gmail.com'){
            rol='administrador'
        }

        const carro= new Carrito({
            impresiones:[]
        })
        await carro.save()
    
        const newUsuario= new User({
            nombre,
            idAuth,
            email,
            avatar,
            estado:true,
            rol:rol,
            compras:[],
            carrito: carro._id
            })
        
        await newUsuario.save()
        
        await Carrito.findByIdAndUpdate(carro.id,{
            $set:{
                user:newUsuario._id
            }
        },{new:true})
            
        return newUsuario
    }
}

module.exports=nuevoUsuario