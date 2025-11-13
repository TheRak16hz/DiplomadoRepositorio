const Movie = require('../models/moviesModel');

//obtener todas las peliculas
exports.getAllMovies = async (req, res) => {
    try {
        const movies = await Movie.find();
        res.json(movies)
    } catch(err) {
        res.status(500).json({ message: err.message});
    }
};

//obtener una pelicula por ID
exports.getMoviesById = async (req, res) => {
    try {
        const movie = await Movie.findById(req.params.id);
        if (movie == null) {
            return res.status(404).json({ message:'Pelicula no encontrada' });
        }
        res.json(movie);
    } catch (err) {
        res.status(500).json({ message: err.message });
    }
};

//crear una nueva pelicula
exports.createMovie = async (req, res) => {

    const movie = new Movie({
        title: req.body.title,
        director: req.body.director,
        year: req.body.year
    });

    try {
        const newMovie = await movie.save();
        res.status(201).json(newMovie);
    } catch (err) {
        res.status(500).json({ message: err.message })
    }
};

//Actualizar una pelicula
exports.updateMovie = async (req,res) => {
    try {
        const movie = await Movie.findById(req.params.id);
        if (movie == null) {
            return res.status(404).json({ message:'Pelicula no encontrada' });
        }
        
        if (req.body.title != null) {
            movie.title = req.body.title;
        }

        if (req.body.director != null) {
            movie.director = req.body.director;
        }

        if (req.body.year != null) {
            movie.year = req.body.year;
        }

        const updatedMovie = await movie.save();
        res.json(updatedMovie);

    } catch (err) {
        res.status(400).json({ message:err.message });
    }
};

//Borrar una pelicula
exports.deleteMovie = async (req, res) => {
    try {
        //Buscar y eliminar por ID
        const deletedMovie = await Movie.findByIdAndDelete(req.params.id);

        //Si no encuentra la pelicula, devolver un 404
        if (!deletedMovie) {
            return res.status(404).json({ message: 'Pelicula no encontrada' });
        }
        res.status(200).json({ message: 'Pelicula eliminada' }) // Respuesta exitosa
    } catch (err) {
        //manejar errores
        console.error('Error al eliminar la pelicula:', err.message);
        res.status(500).json({ message: 'Error al eliminar la pelicula' });
    }
};