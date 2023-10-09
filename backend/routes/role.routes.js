const routesRole = require('express').Router()
const {postRole} = require('../controllers/rol.controllers')


routesRole.post('/',postRole)//POST//http://localhost:8001/api/roles
//routesRole.get('/',getRoles)//GET//http://localhost:8001/api/roles 

module.exports= routesRole;