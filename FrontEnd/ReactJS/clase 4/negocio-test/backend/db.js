const { Pool } = require('pg');

// Configuración directa de parámetros
const pool = new Pool({
    user: 'postgres',          // Tu usuario de Postgres (usualmente 'postgres')
    host: 'localhost',         // Tu servidor local
    database: 'negocio',       // El nombre de la base de datos que creamos
    password: '1234',   // ¡IMPORTANTE! Pon aquí tu clave real entre comillas
    port: 5432,                // Puerto por defecto de PostgreSQL
});

// Pequeña validación de conexión al iniciar
pool.query('SELECT NOW()', (err, res) => {
    if (err) {
        console.error('Error de conexión a la base de datos:', err.stack);
    } else {
        console.log('Conexión a PostgreSQL establecida exitosamente.');
    }
});

module.exports = pool;