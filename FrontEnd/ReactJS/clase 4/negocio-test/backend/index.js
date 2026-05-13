const express = require('express');
const app = express();
const cors = require('cors');
app.use(cors()); // Permite que cualquier origen se conecte (ideal para desarrollo)
const { getClientes, getClienteById, createCliente, updateCliente, deleteCliente } = require('./clienteController');

// Middlewares
app.use(express.json()); // Para que el servidor entienda JSON

// Definición de Endpoints
app.get('/clientes', getClientes);
app.get('/clientes/:id', getClienteById);
app.post('/clientes', createCliente);
app.put('/clientes/:id', updateCliente);
app.delete('/clientes/:id', deleteCliente);

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
    console.log(`Servidor corriendo en el puerto ${PORT}. ¡Listo para trabajar!`);
});