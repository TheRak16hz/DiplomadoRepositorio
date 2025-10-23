const express = require('express');
const app = express();

//middlewares para procesar lo que viajaa por la aplicacion (funciones que se ejecutan antes de la llegada de los datos en diferentes formatos)
app.use(express.json()); //recive datos para convertir a JSON
app.use(express.urlencoded({extended:false})); //recibe datos desde el formulario y convierte a objetos

//ruta para el server
app.use(require("./routes/index"));
//puerto del servidor
app.listen(4000);
console.log("todo ok en el server por el http://127.0.0.1:4000/client")