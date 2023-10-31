const {Router} = require ("express")
const dbProducts = require ("../controllers/impresiones/postAllImpresiones")
const dbFilamentos  = require ("../controllers/filamentos/postAllFilamentos")
const impresiones = require ("../routes/impresiones/rutasImpresiones")
const filamentos = require("../routes/filamentos/rutasFilamentos");
const usuarios = require("../routes/usuarios/rutasUsuarios");

const router = Router()

//cargar productos (se convierte en middleware)
router.use("/db", dbProducts)

//cargar filamentos (se convierte en middleware)
router.use("/dbfilamentos", dbFilamentos)

//ruta impresiones
router.use("/impresiones", impresiones)

//ruta filamentos
router.use("/filamentos", filamentos)

//ruta usuarios
router.use("/usuarios", usuarios);

module.exports = router