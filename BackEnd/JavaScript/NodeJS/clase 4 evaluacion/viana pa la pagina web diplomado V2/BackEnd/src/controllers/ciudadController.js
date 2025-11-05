const client = require("../db/db");

//RUTA GET (READ) GENERAL
exports.getCiudad = async (req, res) => {
    try {
        const result = await client.query('select * from ubicacion.ciudad');
        res.json(result.rows);
    } catch (error) {
        console.error('Error al obtener ciudades: ', error);
        res.status(500).send('Error al obtener ciudades');
    }
};

//ruta
exports.getCiudadById = async (req, res) => {
    const { id } = req.params;
    try {
        const result = await client.query('SELECT * FROM ubicacion.ciudad WHERE cod_ciu = $1', [id]);
        if (result.rowCount === 0) {
            return res.status(404).send('ciudad no encontrado');
        }
        res.json(result.rows[0]);
    } catch (error) {
        console.error('Error al obtener la ciudad en especifico', error);
        res.status(500).send('Error al obtener la ciudad en especifico');
    }
};

//ruta de agregar
exports.createCiudad = async (req, res) => {
    const { nom_ciu, des_ciu, fky_est, fky_zon, est_ciu } = req.body;
    try {
        const result = await client.query('INSERT INTO ubicacion.ciudad (nom_ciu, des_ciu, fky_est, fky_zon, est_ciu) VALUES ($1, $2, $3, $4, $5) RETURNING *', [nom_ciu, des_ciu, fky_est, fky_zon, est_ciu]);
        res.json(result.rows[0]);
    } catch (error) {
        console.error('Error al agregar una ciudad', error);
        res.status(500).send('Error al agregar ciudad');
    }
};

//ruta de update
exports.updateCiudad = async (req, res) => {
    const { id } = req.params;
    const { nom_ciu, des_ciu, fky_est, fky_zon, est_ciu  } = req.body;
    try {
        const result = await client.query('UPDATE ubicacion.ciudad SET nom_ciu = $1, des_ciu = $2, fky_est = $3, fky_zon = $4, est_ciu = $5 WHERE cod_ciu = $6 RETURNING *', [nom_ciu, des_ciu, fky_est, fky_zon, est_ciu, id]);
        if (result.rowCount === 0) {
            return res.status(404).send('ciudad no encontrado para actualizar');
        }
        res.json(result.rows[0]);
    } catch (error) {
        console.error('Error al actualizar ciudad', error);
        res.status(500).send('Error al actualizar ciudad');
    }
};

//ruta de delete
exports.deleteCiudad = async (req, res) => {
    const { id } = req.params;
    try {
        const result = await client.query('DELETE FROM ubicacion.ciudad WHERE cod_ciu = $1 RETURNING *', [id])
        if (result.rowCount === 0) {
            return res.status(404).send('ciudad no encontrado');
        }
        res.json(result.rows[0])
    } catch (error) {
        console.error('Error al eliminar ciudad', error);
        res.status(500).send('Error al eliminar ciudad');
    }
};