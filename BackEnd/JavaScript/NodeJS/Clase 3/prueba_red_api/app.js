//importamos con require cada modulo que usaremos
const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const { Client } = require('pg');



//creamos la app, y asignamos puerto
const app = express();
const port = 3000;

//conexion con la base de datos
const client = new Client({
    host: 'localhost',
    database: 'social_red',
    user: 'postgres',
    password: '1234',
    port: 5432,
});

//iniciamos la conexion
client.connect();

//Middleware
app.use(cors());
app.use(bodyParser.json());

//rutas CRUD para continentes
app.get('/ubicacion', async (req, res) => {
    try {
        const result = await client.query('select * from ubicacion.continente');
        res.json(result.rows);
    } catch (error) {
        console.error('Error al obtener los continentes: ', error);
        res.status(500).send('Error al obtener los continentes');
    }
});

app.get('/ubicacion/:id', async (req, res) => {
    const { id } = req.params;
    try {
        const result = await client.query('SELECT * FROM ubicacion.continente WHERE cod_con = $1', [id]);
        if (result.rowCount === 0) {
            return res.status(404).send('Continente no encontrado');
        }
        res.json(result.rows[0]);
    } catch (error) {
        console.error('Error al obtener al continente en especifico', error);
        res.status(500).send('Error al obtener al continente en especifico');
    }
});

app.post('/ubicacion', async (req, res) => {
    const { nom_con, des_con, est_con } = req.body;
    try {
        const result = await client.query('INSERT INTO ubicacion.continente (nom_con, des_con, est_con) VALUES ($1, $2, $3) RETURNING *', [nom_con, des_con, est_con]);
        res.json(result.rows[0]);
    } catch (error) {
        console.error('Error al agregar un contiente', error);
        res.status(500).send('Error al agregar un contiente');
    }
});

app.put('/ubicacion/:id', async (req, res) => {
    const { id } = req.params;
    const { nom_con, des_con, est_con } = req.body;
    try {
        const result = await client.query('UPDATE ubicacion.continente SET nom_con = $1, des_con = $2, est_con = $3 WHERE cod_con = $4 RETURNING *', [nom_con, des_con, est_con, id]);
        if (result.rowCount === 0) {
            return res.status(404).send('Continente no encontrado para actualizar');
        }
        res.json(result.rows[0]);
    } catch (error) {
        console.error('Error al actualizar el continente', error);
        res.status(500).send('Error al actualizar el continente');
    }
});

app.delete('/ubicacion/:id', async (req, res) => {
    const { id } = req.params;
    try {
        const result = await client.query('DELETE FROM ubicacion.continente WHERE cod_con = $1 RETURNING *', [id])
        if (result.rowCount === 0) {
            return res.status(404).send('Continente no encontrado');
        }
        res.json(result.rows[0])
    } catch (error) {
        console.error('Error al eliminar continente', error);
        res.status(500).send('Error al eliminar continente');
    }
});

//iniciar servidor
app.listen(port, () => {
    console.log(`Servidor corriendo en http://localhost:${port}`);
})