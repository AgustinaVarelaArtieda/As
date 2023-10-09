const Router = require ("express")

const getAllFilamentos=require('../../controllers/filamentos/getAllFilamentos')

const filamentos = Router()

filamentos.get('/',getAllFilamentos)

module.exports = filamentos