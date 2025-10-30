const pool = require('../db/db');

// Obtener todas las películas
exports.getMovies = async (req, res) => {
  try {
    const result = await pool.query('SELECT * FROM movies ORDER BY id');
    res.json(result.rows);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

// Obtener una película por ID
exports.getMovieById = async (req, res) => {
  const { id } = req.params;
  try {
    const result = await pool.query('SELECT * FROM movies WHERE id = $1', [id]);
    if (result.rows.length === 0) {
      return res.status(404).json({ error: 'Movie not found' });
    }
    res.json(result.rows[0]);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

// Crear una nueva película
exports.createMovie = async (req, res) => {
  const { title, director, release_year } = req.body;
  try {
    const result = await pool.query(
      'INSERT INTO movies (title, director, release_year) VALUES ($1, $2, $3) RETURNING *',
      [title, director, release_year]
    );
    res.status(201).json(result.rows[0]);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

// Actualizar una película existente
exports.updateMovie = async (req, res) => {
  const { id } = req.params;
  const { title, director, release_year } = req.body;
  try {
    const result = await pool.query(
      'UPDATE movies SET title = $1, director = $2, release_year = $3 WHERE id = $4 RETURNING *',
      [title, director, release_year, id]
    );
    if (result.rows.length === 0) {
      return res.status(404).json({ error: 'Movie not found' });
    }
    res.json(result.rows[0]);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

// Eliminar una película
exports.deleteMovie = async (req, res) => {
  const { id } = req.params;
  try {
    const result = await pool.query('DELETE FROM movies WHERE id = $1 RETURNING *', [id]);
    if (result.rows.length === 0) {
      return res.status(404).json({ error: 'Movie not found' });
    }
    res.json({ message: 'Movie deleted successfully' });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};
