const Impresion = require ("../../models/impresiones")
const fs = require ("fs")
const path = require ("path")

const dbProducts = async (_req, res, next) =>{
    try {
        const products = await Impresion.find()
        if(products.length > 0){
           return res.status(200).json("impresiones ya guardadas")
        } else {
            const filepath = path.join(__dirname, "../../utils/impresiones.json")
            const data = await fs.readFileSync(filepath, "utf8")
            const impresiones = await JSON.parse(data)
            const currentDate = new Date()

            for (const item of impresiones){
                const newImpresion = new Impresion({
                    ...item,
                    fecha: currentDate,
                })
                 await newImpresion.save()
            }

            return res.status(201).json("impresiones guardadas correctamente")
        }
    } catch (error) {
        next(error)
    }
}

module.exports = dbProducts

