const client = require("../db/db");

//RUTA GET (READ) GENERAL
exports.getEstado = async (req, res) => {
    try {
        const result = await client.query('select * from ubicacion.estado');
        res.json(result.rows);
    } catch (error) {
        console.error('Error al obtener los estados: ', error);
        res.status(500).send('Error al obtener los estados');
    }
};

//ruta
exports.getEstadoById = async (req, res) => {
    const { id } = req.params;
    try {
        const result = await client.query('SELECT * FROM ubicacion.estado WHERE cod_est = $1', [id]);
        if (result.rowCount === 0) {
            return res.status(404).send('estado no encontrado');
        }
        res.json(result.rows[0]);
    } catch (error) {
        console.error('Error al obtener al estado en especifico', error);
        res.status(500).send('Error al obtener al estado en especifico');
    }
};

//ruta de agregar
exports.createEstado = async (req, res) => {
    const { nom_est, des_est, fky_pai, est_est } = req.body;
    try {
        const result = await client.query('INSERT INTO ubicacion.estado (nom_est, des_est, fky_pai, est_est) VALUES ($1, $2, $3, $4) RETURNING *', [nom_est, des_est, fky_pai, est_est]);
        res.json(result.rows[0]);
    } catch (error) {
        console.error('Error al agregar un estado', error);
        res.status(500).send('Error al agregar un estado');
    }
};

//ruta de update
exports.updateEstado = async (req, res) => {
    const { id } = req.params;
    const { nom_est, des_est, fky_pai, est_est  } = req.body;
    try {
        const result = await client.query('UPDATE ubicacion.estado SET nom_est = $1, des_est = $2, fky_pai = $3, est_est = $4 WHERE cod_est = $5 RETURNING *', [nom_est, des_est, fky_pai, est_est, id]);
        if (result.rowCount === 0) {
            return res.status(404).send('Estado no encontrado para actualizar');
        }
        res.json(result.rows[0]);
    } catch (error) {
        console.error('Error al actualizar el estado', error);
        res.status(500).send('Error al actualizar el estado');
    }
};

//ruta de delete
exports.deleteEstado = async (req, res) => {
    const { id } = req.params;
    try {
        const result = await client.query('DELETE FROM ubicacion.estado WHERE cod_est = $1 RETURNING *', [id])
        if (result.rowCount === 0) {
            return res.status(404).send('estado no encontrado');
        }
        res.json(result.rows[0])
    } catch (error) {
        console.error('Error al eliminar estado', error);
        res.status(500).send('Error al eliminar estado');
    }
};