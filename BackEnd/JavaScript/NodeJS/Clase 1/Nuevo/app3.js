const express=require('express');
const { request } = require('http');
const app=express()

app.get('/', (request, response) => { // peticion y respuesta
    response.send('servidor respondiendo');
});

app.get('/consultar', (request, response) => { //peticion y respuesta
    response.send("modulo para consulta");
})

app.get('/detallar', (request, response) => { //peticion y respuesta
    response.send("modulo para detallar");
})

app.listen(5000, () => {
    console.log("todo finoooo")
});

