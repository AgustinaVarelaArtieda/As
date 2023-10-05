const {Router} = require ("express")
const dbProducts = require ("../controllers/impresiones/postAllImpresiones")
const router = Router()

//cargar productos (se convierte en middleware)
router.use("/db", dbProducts)


module.exports = router