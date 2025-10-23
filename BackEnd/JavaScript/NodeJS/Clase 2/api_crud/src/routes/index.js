const { Router } = require("express");
const router = Router();

//importar rutas de los metodos del crud
const {getClient, getClient2, createClient, updateClient, delClient} = require('../controllers/index.controller.js');

//rutas definidas
router.get('/client', getClient); //consulta general
router.get('/client/:id', getClient2); //conslta especifica
router.post('/client', createClient); //insertar nuevo registro
router.put('/client/:id', updateClient); //modificar un registro especifico
router.delete('/client/:id', delClient); //borrar un registro especifico

module.exports = router;