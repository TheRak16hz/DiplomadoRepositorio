// src/hooks/useProductos.js
import { useState } from 'react';

export function useProductos() {
  const [productos, setProductos] = useState([]);
  const [eliminados, setEliminados] = useState([]);

  const API_URL = "http://localhost:8000/productos/";

  const cargarProductos = async () => {
    const res = await fetch(API_URL);
    const data = await res.json();
    setProductos(data.filter(p => p.status !== "I"));
    setEliminados(data.filter(p => p.status === "I"));
  };

  const agregarProducto = async (nuevoProducto) => {
    await fetch(API_URL, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(nuevoProducto)
    });
    await cargarProductos();
  };

  const eliminarProducto = async (id) => {
    await fetch(`${API_URL}${id}/eliminar`, { method: "PUT" });
    await cargarProductos();
  };

  const restaurarProducto = async (producto) => {
    const productoRestaurado = { ...producto, status: "A" };
    await fetch(`${API_URL}${producto.id_producto}`, {
      method: "PUT",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(productoRestaurado)
    });
    await cargarProductos();
  };

  const actualizarProducto = async (id, productoEditado) => {
    await fetch(`${API_URL}${id}`, {
      method: "PUT",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(productoEditado)
    });
    await cargarProductos();
  };

  return {
    productos,
    eliminados,
    cargarProductos,
    agregarProducto,
    actualizarProducto,
    eliminarProducto,
    restaurarProducto
  };
}