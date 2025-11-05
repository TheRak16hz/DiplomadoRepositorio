const express = require('express');
const router = express.Router();
const paisController = require('../controllers/paisController');

// Rutas para pais
router.get('/pais', paisController.getPais);
router.get('/pais/:id', paisController.getPaisById); // Nueva ruta para obtener por ID
router.post('/pais', paisController.createPais);
router.put('/pais/:id', paisController.updatePais);
router.delete('/pais/:id', paisController.deletePais);

module.exports = router;