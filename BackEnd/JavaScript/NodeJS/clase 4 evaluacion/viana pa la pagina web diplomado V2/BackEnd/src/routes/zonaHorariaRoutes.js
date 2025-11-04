const express = require('express');
const router = express.Router();
const zonaHorariaController = require('../controllers/zonaHorariaController');

// Rutas para zonas horarias
router.get('/zona_horaria', zonaHorariaController.getZonaHoraria);
router.get('/zona_horaria/:id', zonaHorariaController.getZonaHorariaById); // Nueva ruta para obtener por ID
router.post('/zona_horaria', zonaHorariaController.createZonaHoraria);
router.put('/zona_horaria/:id', zonaHorariaController.updateZonaHoraria);
router.delete('/zona_horaria/:id', zonaHorariaController.deleteZonaHoraria);

module.exports = router;