const {Router} = require ("express")
const dbProducts = require ("../controllers/impresiones/postAllImpresiones")
const dbFilamentos  = require ("../controllers/filamentos/postAllFilamentos")
const impresiones = require ("../routes/impresiones/rutasImpresiones")

const router = Router()

//cargar productos (se convierte en middleware)
router.use("/db", dbProducts)

//ruta impresiones
router.use("/impresiones", impresiones)

//cargar filamentos (se convierte en middleware)
router.use("/dbfilamentos", dbFilamentos)

module.exports = router