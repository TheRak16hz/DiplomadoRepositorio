const pool = require('./db');

const getClientes = async (req, res) => {
    try {
        const response = await pool.query('SELECT * FROM cliente ORDER BY id ASC');
        res.status(200).json(response.rows);
    } catch (error) {
        res.status(500).json({ message: "Error al obtener clientes", error: error.message });
    }
};

const getClienteById = async (req, res) => {
    const id = parseInt(req.params.id);
    try {
        const response = await pool.query('SELECT * FROM cliente WHERE id = $1', [id]);
        if (response.rows.length === 0) return res.status(404).json({ message: "Cliente no encontrado" });
        res.status(200).json(response.rows[0]);
    } catch (error) {
        res.status(500).json({ message: "Error al obtener el cliente", error: error.message });
    }
};

const createCliente = async (req, res) => {
    const { nombre, apellido, direccion, telefono, nacimiento } = req.body;
    try {
        const response = await pool.query(
            'INSERT INTO cliente (nombre, apellido, direccion, telefono, nacimiento) VALUES ($1, $2, $3, $4, $5) RETURNING *',
            [nombre, apellido, direccion, telefono, nacimiento]
        );
        res.status(201).json({ message: "Cliente creado", body: response.rows[0] });
    } catch (error) {
        res.status(500).json({ message: "Error al crear cliente", error: error.message });
    }
};

const updateCliente = async (req, res) => {
    const id = parseInt(req.params.id);
    const { nombre, apellido, direccion, telefono, nacimiento } = req.body;
    try {
        const response = await pool.query(
            'UPDATE cliente SET nombre = $1, apellido = $2, direccion = $3, telefono = $4, nacimiento = $5 WHERE id = $6 RETURNING *',
            [nombre, apellido, direccion, telefono, nacimiento, id]
        );
        if (response.rows.length === 0) return res.status(404).json({ message: "Cliente no encontrado" });
        res.status(200).json({ message: "Cliente actualizado", body: response.rows[0] });
    } catch (error) {
        res.status(500).json({ message: "Error al actualizar", error: error.message });
    }
};

const deleteCliente = async (req, res) => {
    const id = parseInt(req.params.id);
    try {
        const response = await pool.query('DELETE FROM cliente WHERE id = $1', [id]);
        if (response.rowCount === 0) return res.status(404).json({ message: "Cliente no encontrado" });
        res.status(200).json({ message: `Cliente ${id} eliminado satisfactoriamente` });
    } catch (error) {
        res.status(500).json({ message: "Error al eliminar", error: error.message });
    }
};

module.exports = { getClientes, getClienteById, createCliente, updateCliente, deleteCliente };