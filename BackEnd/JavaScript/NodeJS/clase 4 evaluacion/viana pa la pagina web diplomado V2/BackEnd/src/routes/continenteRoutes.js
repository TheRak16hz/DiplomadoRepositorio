const express = require('express');
const router = express.Router();
const continenteController = require('../controllers/continenteController');

// Rutas para continentes
router.get('/continentes', continenteController.getContinente);
router.get('/continentes/:id', continenteController.getContinenteById); // Nueva ruta para obtener por ID
router.post('/continentes', continenteController.createContinente);
router.put('/continentes/:id', continenteController.updateContinente);
router.delete('/continentes/:id', continenteController.deleteContinente);

module.exports = router;