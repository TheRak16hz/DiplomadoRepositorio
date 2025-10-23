const { response } = require('express');
const { Pool } = require('pg');

const pool = new Pool({
    host: 'localhost',
    user: 'postgres',
    password: '12345',
    database: 'apli',
    port: '5432'
})

const getClient = async(req, res) => {
    const respuesta = await pool.query('select * from public.client order by id');
    //console.log(respuesta.rows)
    //res.send("Clientes")
    res.status(200).json(respuesta.rows);
}

const getClient2 = async(req, res) => {
    //res.send('Recibiendo ID para consulta: '+ req.params.id)
    const xid = req.params.id;
    const respuesta = await pool.query('select * from client where id=$1',[xid]);
    res.json(respuesta.rows);
}

const createClient = async(req, res) => {
    /*console.log(req.body);
    res.send('registro creado');*/
    const { nombre, direc, telef } = req.body;
    const respuesta = await pool.query('insert into client (nombre, direc, telef) values ($1,$2,$3)', [nombre, direc, telef]);
    console.log(respuesta)
    //res.send('Registro creado);
    res.json({
        message:'Cliente agregado',
        body: {
            client:{nombre,direc,telef}
        }
    })
};


const updateClient = async(req, res) => {
    const xid = req.params.id;
    const {nombre, direc, telef} = req.body;
    const respuesta = await pool.query('update client set nombre = $1, direc = $2, telef = $3 where id = $4', [
        nombre,
        direc,
        telef,
        xid
    ]);
    console.log(respuesta);
    res.send(xid);
}

const delClient = async(req, res) => {
    const xid = req.params.id;
    const respuesta = await pool.query('delete from client where id=$1', [xid]);
    res.json('Regsitro eliminado con el id: '+xid);
}

module.exports = {
    getClient,
    getClient2,
    createClient,
    updateClient,
    delClient
}