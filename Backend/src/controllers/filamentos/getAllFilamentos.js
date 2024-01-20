const Filamento = require ("../../models/filamentos")

function getAllFilamentos(req, res, next) {
    Filamento.find()
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

module.exports = getAllFilamentos