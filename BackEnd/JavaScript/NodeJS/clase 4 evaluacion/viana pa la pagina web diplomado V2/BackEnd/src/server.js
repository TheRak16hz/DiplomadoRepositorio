const express = require('express');
const cors = require('cors'); // Importa el paquete cors
const app = express();

const continenteRoutes = require('./routes/continenteRoutes');
const zonaHorariaRoutes = require('./routes/zonaHorariaRoutes')
const client = require('./db/db'); //agregado desde DB

// Middleware
app.use(express.json()); // Para parsear JSON en las solicitudes
app.use(cors()); // Habilita CORS para todas las rutas

// Rutas
app.use('/api', continenteRoutes);
app.use('/api', zonaHorariaRoutes)

// Inicia el servidor
const PORT = process.env.PORT || 3000;
client.connect(); //agregado de manera epica
app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
});
