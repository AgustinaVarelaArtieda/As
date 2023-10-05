const Impresion = require ("../../models/impresiones")
const fs = require ("fs")
const path = require ("path")

const dbProducts = async (_req, res, next) =>{
    try {
        const products = await Impresion.find()
        if(products){
           return res.status(200).json("impresiones ya guardadas")
        } else {
            const filepath = path.join(__dirname, "../../utils/impresiones.json")
            const data = await fs.readFileSync(filepath, "utf8")
            const impresiones = await JSON.parse(data)
             await impresiones.forEach((item) =>{
                const newImpresion = new Impresion(item)
                newImpresion.save()
            })
            return res.status(201).json("impresiones guardadas correctamente")
        }
    } catch (error) {
        next(error)
    }
}

module.exports = dbProducts

