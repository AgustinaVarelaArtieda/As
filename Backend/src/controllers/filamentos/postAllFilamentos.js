const Filamento = require ("../../models/filamentos")
const fs = require ("fs")
const path = require ("path")

const dbFilamentos = async(_req, res, next)=>{
    try {
        const filamentos = await Filamento.find()
        if(filamentos.length > 0){
           return res.status(200).json("filamentos ya guardados")
        } else {
            const filepath = path.join(__dirname, "../../utils/filamentos.json")
            const data = await fs.readFileSync(filepath, "utf8")
            const filamentos = await JSON.parse(data)
             await filamentos.forEach((item) =>{
                const newFilamento = new Filamento(item)
                newFilamento.save()
            })
            return res.status(201).json("filamentos guardados correctamente")
        }
    } catch (error) {
        next(error)
    }
}

module.exports = dbFilamentos