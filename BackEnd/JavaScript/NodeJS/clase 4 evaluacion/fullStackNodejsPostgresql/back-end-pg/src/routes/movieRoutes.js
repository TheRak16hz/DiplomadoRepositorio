const express = require('express');
const router = express.Router();
const movieController = require('../controllers/movieController');

// Rutas para películas
router.get('/movies', movieController.getMovies);
router.get('/movies/:id', movieController.getMovieById); // Nueva ruta para obtener una película por ID
router.post('/movies', movieController.createMovie);
router.put('/movies/:id', movieController.updateMovie);
router.delete('/movies/:id', movieController.deleteMovie);

module.exports = router;
