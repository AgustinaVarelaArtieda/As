const Router = require ("express")

const nuevoUsuarioHandler = require("../../handlers/Usuarios/handlerNuevoUsuario")
const actualizarUsuarioHandler = require("../../handlers/Usuarios/handlerUpdateUsuario")
const infoUsuarioHandler = require("../../handlers/Usuarios/handlerInfoUsuario")

const usuarios = Router()

usuarios.get("/:id", infoUsuarioHandler)
usuarios.post("/", nuevoUsuarioHandler)
usuarios.put("/actualizar/:id", actualizarUsuarioHandler)


module.exports = usuarios