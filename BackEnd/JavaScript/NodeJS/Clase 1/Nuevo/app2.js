const http = require('http');
const servidor = http.createServer( (peticion, respuesta) => {
    respuesta.writeHead(200,{'Content-Type':'text/html'}); //;charset=utf-8
    respuesta.write('<h1> Prueba del servidor en accion con NodeJS </h1>')
    console.log('Solicitud web')
    respuesta.end()
});

servidor.listen(5000)
console.log('ya funcionando el servidor')

