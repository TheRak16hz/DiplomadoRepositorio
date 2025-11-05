const express = require('express');
const router = express.Router();
const ciudadController = require('../controllers/ciudadController');

// Rutas para ciudad
router.get('/ciudad', ciudadController.getCiudad);
router.get('/ciudad/:id', ciudadController.getCiudadById); // Nueva ruta para obtener por ID
router.post('/ciudad', ciudadController.createCiudad);
router.put('/ciudad/:id', ciudadController.updateCiudad);
router.delete('/ciudad/:id', ciudadController.deleteCiudad);

module.exports = router;