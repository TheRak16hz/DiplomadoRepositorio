const { Client } = require('pg');

const client = new Client({
    host: 'localhost',
    database: 'social_red',
    user: 'postgres',
    password: '1234',
    port: 5432,
});

module.exports = client;