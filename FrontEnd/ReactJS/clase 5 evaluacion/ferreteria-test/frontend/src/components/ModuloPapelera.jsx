// src/components/ModuloPapelera.jsx
import { useEffect } from "react";
import { useProductos } from "../hooks/useProductos";

export default function ModuloPapelera() {
  const { eliminados, cargarProductos, restaurarProducto } = useProductos();

  useEffect(() => {
    cargarProductos(); // Esto también carga la lista de eliminados desde el hook
  }, []);

  return (
    <div>
      <h2 style={{ color: 'var(--danger-color)' }}>Productos Eliminados</h2>
      
      {eliminados.length === 0 ? (
        <p>La papelera está vacía.</p>
      ) : (
        <table>
          <thead>
            <tr>
              <th>ID</th><th>Nombre</th><th>Acción</th>
            </tr>
          </thead>
          <tbody>
            {eliminados.map(prod => (
              <tr key={prod.id_producto}>
                <td>{prod.id_producto}</td>
                <td>{prod.nombre}</td>
                <td>
                  <button className="btn-exito" onClick={() => restaurarProducto(prod)}>♻️ Restaurar</button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      )}
    </div>
  );
}