const { Client } = require('pg');

const client = new Client({
    host: 'localhost',
    database: 'social_red',
    user: 'postgres',
    password: '12345',
    port: 5432,
});

module.exports = client;