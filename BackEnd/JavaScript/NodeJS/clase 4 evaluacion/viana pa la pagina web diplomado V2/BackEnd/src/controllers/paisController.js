const client = require("../db/db");

//RUTA GET (READ) GENERAL
exports.getPais = async (req, res) => {
    try {
        const result = await client.query('select * from ubicacion.pais');
        res.json(result.rows);
    } catch (error) {
        console.error('Error al obtener los paises: ', error);
        res.status(500).send('Error al obtener los paises');
    }
};

//ruta
exports.getPaisById = async (req, res) => {
    const { id } = req.params;
    try {
        const result = await client.query('SELECT * FROM ubicacion.pais WHERE cod_pai = $1', [id]);
        if (result.rowCount === 0) {
            return res.status(404).send('pais no encontrado');
        }
        res.json(result.rows[0]);
    } catch (error) {
        console.error('Error al obtener al pais en especifico', error);
        res.status(500).send('Error al obtener al pais en especifico');
    }
};

//ruta de agregar
exports.createPais = async (req, res) => {
    const { nom_pai, des_pai, ali_pai, cti_pai, fky_con, est_pai } = req.body;
    try {
        const result = await client.query('INSERT INTO ubicacion.pais (nom_pai, des_pai, ali_pai, cti_pai, fky_con, est_pai) VALUES ($1, $2, $3, $4, $5, $6) RETURNING *', [nom_pai, des_pai, ali_pai, cti_pai, fky_con, est_pai]);
        res.json(result.rows[0]);
    } catch (error) {
        console.error('Error al agregar un pais', error);
        res.status(500).send('Error al agregar un pais');
    }
};

//ruta de update
exports.updatePais = async (req, res) => {
    const { id } = req.params;
    const { nom_pai, des_pai, ali_pai, cti_pai, fky_con, est_pai } = req.body;
    try {
        const result = await client.query('UPDATE ubicacion.pais SET nom_pai = $1, des_pai = $2, ali_pai = $3, cti_pai = $4, fky_con = $5, est_pai = $6 WHERE cod_pai = $7 RETURNING *', [nom_pai, des_pai, ali_pai, cti_pai, fky_con, est_pai, id]);
        if (result.rowCount === 0) {
            return res.status(404).send('Pais no encontrado para actualizar');
        }
        res.json(result.rows[0]);
    } catch (error) {
        console.error('Error al actualizar el pais', error);
        res.status(500).send('Error al actualizar el pais');
    }
};

//ruta de delete
exports.deletePais = async (req, res) => {
    const { id } = req.params;
    try {
        const result = await client.query('DELETE FROM ubicacion.pais WHERE cod_pai = $1 RETURNING *', [id])
        if (result.rowCount === 0) {
            return res.status(404).send('pais no encontrado');
        }
        res.json(result.rows[0])
    } catch (error) {
        console.error('Error al eliminar pais', error);
        res.status(500).send('Error al eliminar pais');
    }
};