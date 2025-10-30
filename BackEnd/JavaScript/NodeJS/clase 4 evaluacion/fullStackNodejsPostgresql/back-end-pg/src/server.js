const express = require('express');
const cors = require('cors'); // Importa el paquete cors
const app = express();
const movieRoutes = require('./routes/movieRoutes');

// Middleware
app.use(express.json()); // Para parsear JSON en las solicitudes
app.use(cors()); // Habilita CORS para todas las rutas

// Rutas
app.use('/api', movieRoutes);

// Inicia el servidor
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
