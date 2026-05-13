// src/components/ModuloProductos.jsx
import { useState, useEffect } from "react";
import { useProductos } from "../hooks/useProductos";

export default function ModuloProductos() {
  const { productos, cargarProductos, agregarProducto, actualizarProducto, eliminarProducto } = useProductos();
  
  const [nombre, setNombre] = useState("");
  const [categoria, setCategoria] = useState("");
  const [precio, setPrecio] = useState("");
  const [stock, setStock] = useState("");
  const [editandoId, setEditandoId] = useState(null);

  useEffect(() => {
    cargarProductos();
  }, [cargarProductos]);

  const handleSubmit = async (e) => {
    e.preventDefault();
    const datos = {
      nombre,
      categoria,
      precio: parseFloat(precio),
      stock: parseInt(stock),
      status: "A"
    };

    if (editandoId) {
      await actualizarProducto(editandoId, datos);
      setEditandoId(null);
    } else {
      await agregarProducto(datos);
    }
    
    // Limpiar formulario
    setNombre(""); setCategoria(""); setPrecio(""); setStock("");
  };

  const prepararEdicion = (prod) => {
    setEditandoId(prod.id_producto);
    setNombre(prod.nombre);
    setCategoria(prod.categoria);
    setPrecio(prod.precio);
    setStock(prod.stock);
  };

  const cancelarEdicion = () => {
    setEditandoId(null);
    setNombre(""); setCategoria(""); setPrecio(""); setStock("");
  };

  return (
    <div>
      <h2>Gestión de Productos</h2>
      
      <form className="formulario" onSubmit={handleSubmit}>
        <input placeholder="Nombre" value={nombre} onChange={e => setNombre(e.target.value)} required />
        <input placeholder="Categoría" value={categoria} onChange={e => setCategoria(e.target.value)} required />
        <input type="number" placeholder="Precio" value={precio} onChange={e => setPrecio(e.target.value)} required />
        <input type="number" placeholder="Stock" value={stock} onChange={e => setStock(e.target.value)} required />
        <button type="submit">{editandoId ? "Actualizar" : "Guardar"}</button>
        {editandoId && <button type="button" onClick={cancelarEdicion}>Cancelar</button>}
      </form>

      <table>
        <thead>
          <tr>
            <th>ID</th><th>Nombre</th><th>Categoría</th><th>Precio</th><th>Stock</th><th>Acciones</th>
          </tr>
        </thead>
        <tbody>
          {productos.map(prod => (
            <tr key={prod.id_producto}>
              <td>{prod.id_producto}</td>
              <td>{prod.nombre}</td>
              <td>{prod.categoria}</td>
              <td>${prod.precio}</td>
              <td>{prod.stock}</td>
              <td>
                <button className="btn-editar" onClick={() => prepararEdicion(prod)}>Editar</button>
                <button className="btn-peligro" onClick={() => eliminarProducto(prod.id_producto)}>Eliminar</button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}