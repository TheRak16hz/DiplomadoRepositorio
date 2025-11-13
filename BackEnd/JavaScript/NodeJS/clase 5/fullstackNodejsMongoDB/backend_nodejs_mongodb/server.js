const express = require("express")
const mongoose = require("mongoose")

const bodyParser = require("body-parser")
const cors = require("cors")
const moviesRoutes = require("./routes/moviesRoutes")

const app = express()
const port = 3000

//middleware
app.use(bodyParser.json());
app.use(cors()); //Habilita CORS para todas las rutas

//Routes
app.use('/api/movies', moviesRoutes);

//conectar a MongoDB
mongoose.connect('mongodb://127.0.0.1:27017/moviesdb', {
    serverSelectionTimeoutMS: 5000, //tiempo de espera en milisegundos para seleccionar el servidor
    socketTimeoutMS: 45000, //tiempo de espera en milisegundos para operaciones del socket
}).then(() => {
    console.log('Conectado a MongoDB');
    app.listen(port, () => {
        console.log(`Servidor corriendo en http://localhost:${port}`);
    });
}).catch(err => {
    console.log('Error al conectar a MongoDB', err);
});