const express = require('express');
const router = express.Router();
const estadoController = require('../controllers/estadoController');

// Rutas para estado
router.get('/estado', estadoController.getEstado);
router.get('/estado/:id', estadoController.getEstadoById); // Nueva ruta para obtener por ID
router.post('/estado', estadoController.createEstado);
router.put('/estado/:id', estadoController.updateEstado);
router.delete('/estado/:id', estadoController.deleteEstado);

module.exports = router;