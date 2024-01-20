const Filamento = require ("../../models/filamentos")

const putFilamento = async (req, res, next) =>{
    const {id} = req.params
    
    Filamento.findByIdAndUpdate(id,{
        estado: req.body.estado
    },
    {new:true})
        .then((filamento)=>{
            if(filamento.length<1){
                return res.status(204).json("No hay filamentos guardados")
            }else{
                return res.status(200).json(filamento)
            }
        })
        .catch((error)=>{
            console.log('Error:', error);
            next(error)
        })
}

module.exports = putFilamento