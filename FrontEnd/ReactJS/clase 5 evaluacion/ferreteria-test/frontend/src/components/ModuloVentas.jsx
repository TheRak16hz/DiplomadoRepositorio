// src/components/ModuloVentas.jsx
import { useState, useEffect } from "react";
import { useVentas } from "../hooks/useVentas";

export default function ModuloVentas() {
  const { ventas, cargarVentas, agregarVenta, actualizarVenta, eliminarVenta } = useVentas();
  
  const [idProducto, setIdProducto] = useState("");
  const [cantidad, setCantidad] = useState("");
  const [fecha, setFecha] = useState("");
  const [editandoId, setEditandoId] = useState(null);

  useEffect(() => {
    cargarVentas();
  }, [cargarVentas]);

  const handleSubmit = async (e) => {
    e.preventDefault();
    const datos = {
      id_producto: parseInt(idProducto),
      cantidad_vendida: parseInt(cantidad),
      fecha_venta: fecha,
      status: "A",
      total_pago: 0 // El backend debería recalcularlo o lo enviamos como 0 si no cambia el precio
    };

    if (editandoId) {
      // Nota: Si el backend no recalcula el total en PUT, habría que enviarlo aquí.
      // Por ahora mantenemos la lógica de enviar 0 o el valor previo si lo tuviéramos.
      await actualizarVenta(editandoId, datos);
      setEditandoId(null);
    } else {
      await agregarVenta(datos);
    }
    
    // Limpiar formulario
    setIdProducto(""); setCantidad(""); setFecha("");
  };

  const prepararEdicion = (venta) => {
    setEditandoId(venta.id_venta);
    setIdProducto(venta.id_producto);
    setCantidad(venta.cantidad_vendida);
    // Limpiamos la fecha para que solo tenga YYYY-MM-DD
    const fechaLimpia = venta.fecha_venta ? venta.fecha_venta.split('T')[0].split(' ')[0] : "";
    setFecha(fechaLimpia);
  };

  const cancelarEdicion = () => {
    setEditandoId(null);
    setIdProducto(""); setCantidad(""); setFecha("");
  };

  return (
    <div>
      <h2>💰 Gestión de Ventas</h2>
      
      <form className="formulario" onSubmit={handleSubmit}>
        <input type="number" placeholder="ID del Producto" value={idProducto} onChange={e => setIdProducto(e.target.value)} required />
        <input type="number" placeholder="Cantidad Vendida" value={cantidad} onChange={e => setCantidad(e.target.value)} required />
        <input type="date" value={fecha} onChange={e => setFecha(e.target.value)} required title="Fecha de Venta" />
        <button type="submit">{editandoId ? "Actualizar Venta" : "Registrar Venta"}</button>
        {editandoId && <button type="button" onClick={cancelarEdicion}>Cancelar</button>}
      </form>

      <table>
        <thead>
          <tr>
            <th>ID Venta</th><th>ID Producto</th><th>Cantidad</th><th>Fecha</th><th>Total Pagado</th><th>Acciones</th>
          </tr>
        </thead>
        <tbody>
          {ventas.map(venta => (
            <tr key={venta.id_venta}>
              <td>{venta.id_venta}</td>
              <td>{venta.id_producto}</td>
              <td>{venta.cantidad_vendida}</td>
              <td>{venta.fecha_venta}</td>
              <td>${venta.total_pago}</td>
              <td>
                <button className="btn-editar" onClick={() => prepararEdicion(venta)}>Editar</button>
                <button className="btn-peligro" onClick={() => eliminarVenta(venta.id_venta)}>Eliminar</button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}