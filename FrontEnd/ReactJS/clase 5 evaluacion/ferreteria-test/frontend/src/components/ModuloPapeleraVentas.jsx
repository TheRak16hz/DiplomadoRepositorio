// src/components/ModuloPapeleraVentas.jsx
import { useEffect } from "react";
import { useVentas } from "../hooks/useVentas";

export default function ModuloPapeleraVentas() {
  const { eliminadas, cargarVentas, restaurarVenta } = useVentas();

  useEffect(() => {
    cargarVentas();
  }, []);

  return (
    <div>
      <h2 style={{ color: 'var(--danger-color)' }}>Ventas Anuladas / Eliminadas</h2>
      
      {eliminadas.length === 0 ? (
        <p>No hay ventas anuladas.</p>
      ) : (
        <table>
          <thead>
            <tr>
              <th>ID Venta</th><th>ID Producto</th><th>Cantidad</th><th>Total</th><th>Acción</th>
            </tr>
          </thead>
          <tbody>
            {eliminadas.map(venta => (
              <tr key={venta.id_venta}>
                <td>{venta.id_venta}</td>
                <td>{venta.id_producto}</td>
                <td>{venta.cantidad_vendida}</td>
                <td>${venta.total_pago}</td>
                <td>
                  <button className="btn-exito" onClick={() => restaurarVenta(venta)}>♻️ Restaurar</button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      )}
    </div>
  );
}