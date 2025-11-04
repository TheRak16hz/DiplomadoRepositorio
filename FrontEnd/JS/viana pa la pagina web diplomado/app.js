//importamos con require cada modulo que usaremos
const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const { Client } = require('pg');

//creamos la app, y asignamos puerto
const app = express();
const port = 3000;

// Configuración de conexión a la base de datos PostgreSQL
// ¡Asegúrate de que esta configuración coincida con tu base de datos!
const client = new Client({
    host: 'localhost',
    database: 'social_red', // Tu nombre de base de datos
    user: 'postgres', // Tu usuario de PostgreSQL
    password: '1234', // Tu contraseña de PostgreSQL
    port: 5432,
});

// Iniciamos la conexión
client.connect()
    .then(() => console.log('Conexión a PostgreSQL exitosa'))
    .catch(err => console.error('Error al conectar a PostgreSQL:', err.stack));

// Middleware
// Permitimos todas las solicitudes CORS. Es esencial para que el frontend (puerto diferente)
// pueda comunicarse con el backend (puerto 3000).
app.use(cors()); 
app.use(bodyParser.json());

// Rutas CRUD para continentes
const BASE_URL = '/ubicacion';

// Obtener todos los continentes (GET /ubicacion)
app.get(BASE_URL, async (req, res) => {
    try {
        // La consulta debe traer cod_con para las funciones de Editar/Eliminar
        const result = await client.query('SELECT cod_con, nom_con, des_con, est_con FROM ubicacion.continente ORDER BY cod_con');
        res.json(result.rows);
    } catch (error) {
        console.error('Error al obtener los continentes: ', error);
        res.status(500).send('Error al obtener los continentes');
    }
});

// Obtener un continente específico por código (GET /ubicacion/:id)
app.get(`${BASE_URL}/:id`, async (req, res) => {
    const { id } = req.params;
    try {
        const result = await client.query('SELECT cod_con, nom_con, des_con, est_con FROM ubicacion.continente WHERE cod_con = $1', [id]);
        if (result.rowCount === 0) {
            return res.status(404).send('Continente no encontrado');
        }
        res.json(result.rows[0]);
    } catch (error) {
        console.error('Error al obtener el continente en específico', error);
        res.status(500).send('Error al obtener el continente en específico');
    }
});

// Crear un nuevo continente (POST /ubicacion)
app.post(BASE_URL, async (req, res) => {
    // Hemos agregado 'cod_con' a la desestructuración ya que se envía desde el formulario.
    const { cod_con, nom_con, des_con, est_con } = req.body; 
    try {
        const result = await client.query(
            'INSERT INTO ubicacion.continente (cod_con, nom_con, des_con, est_con) VALUES ($1, $2, $3, $4) RETURNING *', 
            [cod_con, nom_con, des_con, est_con] // Pasamos cod_con
        );
        res.status(201).json(result.rows[0]);
    } catch (error) {
        console.error('Error al agregar un continente', error);
        // Si hay un error de clave duplicada o de otro tipo, se devuelve un 500
        res.status(500).send('Error al agregar un continente. Posiblemente el código ya existe o hay un problema con los datos.');
    }
});

// Actualizar un continente existente (PUT /ubicacion/:id)
app.put(`${BASE_URL}/:id`, async (req, res) => {
    const { id } = req.params;
    // Ya NO se usa cod_con en el body, pues es la clave para la actualización
    const { nom_con, des_con, est_con } = req.body; 
    try {
        const result = await client.query(
            'UPDATE ubicacion.continente SET nom_con = $1, des_con = $2, est_con = $3 WHERE cod_con = $4 RETURNING *', 
            [nom_con, des_con, est_con, id] // id es el cod_con
        );
        if (result.rowCount === 0) {
            return res.status(404).send('Continente no encontrado para actualizar');
        }
        res.json(result.rows[0]);
    } catch (error) {
        console.error('Error al actualizar el continente', error);
        res.status(500).send('Error al actualizar el continente');
    }
});

// Eliminar un continente (DELETE /ubicacion/:id)
app.delete(`${BASE_URL}/:id`, async (req, res) => {
    const { id } = req.params;
    try {
        const result = await client.query('DELETE FROM ubicacion.continente WHERE cod_con = $1 RETURNING *', [id])
        if (result.rowCount === 0) {
            return res.status(404).send('Continente no encontrado para eliminar');
        }
        res.json({ message: 'Continente eliminado exitosamente', deleted_continent: result.rows[0] });
    } catch (error) {
        console.error('Error al eliminar continente', error);
        res.status(500).send('Error al eliminar continente');
    }
});

// Iniciar servidor
app.listen(port, () => {
    console.log(`🚀 Servidor corriendo en http://localhost:${port}`);
});