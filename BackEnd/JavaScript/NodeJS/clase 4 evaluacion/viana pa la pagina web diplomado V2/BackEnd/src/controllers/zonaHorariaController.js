const client = require("../db/db");

//RUTA GET (READ) GENERAL
exports.getZonaHoraria = async (req, res) => {
    try {
        const result = await client.query('select * from ubicacion.zona_horaria');
        res.json(result.rows);
    } catch (error) {
        console.error('Error al obtener las zonas horarias: ', error);
        res.status(500).send('Error al obtener las zonas horarias');
    }
};

//ruta
exports.getZonaHorariaById = async (req, res) => {
    const { id } = req.params;
    try {
        const result = await client.query('SELECT * FROM ubicacion.zona_horaria WHERE cod_zon = $1', [id]);
        if (result.rowCount === 0) {
            return res.status(404).send('Zona horaria no encontrada');
        }
        res.json(result.rows[0]);
    } catch (error) {
        console.error('Error al obtener la zona horaria en especifico', error);
        res.status(500).send('Error al obtener la zona horaria en especifico');
    }
};

//ruta de agregar
exports.createZonaHoraria = async (req, res) => {
    const { nom_zon, acr_zon, dif_zon, est_zon } = req.body;
    try {
        const result = await client.query('INSERT INTO ubicacion.zona_horaria (nom_zon, acr_zon, dif_zon, est_zon) VALUES ($1, $2, $3, $4) RETURNING *', [nom_zon, acr_zon, dif_zon, est_zon]);
        res.json(result.rows[0]);
    } catch (error) {
        console.error('Error al agregar una zona horaria', error);
        res.status(500).send('Error al agregar una zona horaria');
    }
};

//ruta de update
exports.updateZonaHoraria = async (req, res) => {
    const { id } = req.params;
    const { nom_zon, acr_zon, dif_zon, est_zon } = req.body;
    try {
        const result = await client.query('UPDATE ubicacion.zona_horaria SET nom_zon = $1, acr_zon = $2, dif_zon = $3, est_zon = $4 WHERE cod_zon = $5 RETURNING *', [nom_zon, acr_zon, dif_zon, est_zon, id]);
        if (result.rowCount === 0) {
            return res.status(404).send('zona horaria no encontrada para actualizar');
        }
        res.json(result.rows[0]);
    } catch (error) {
        console.error('Error al actualizar la zona horaria', error);
        res.status(500).send('Error al actualizar la zona horaria');
    }
};

//ruta de delete
exports.deleteZonaHoraria = async (req, res) => {
    const { id } = req.params;
    try {
        const result = await client.query('DELETE FROM ubicacion.zona_horaria WHERE cod_zon = $1 RETURNING *', [id])
        if (result.rowCount === 0) {
            return res.status(404).send('zona horaria no encontrada');
        }
        res.json(result.rows[0])
    } catch (error) {
        console.error('Error al eliminar zona horaria', error);
        res.status(500).send('Error al eliminar zona horaria');
    }
};