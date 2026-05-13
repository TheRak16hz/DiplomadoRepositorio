// src/hooks/useVentas.js
import { useState } from 'react';

export function useVentas() {
  const [ventas, setVentas] = useState([]);
  const [eliminadas, setEliminadas] = useState([]);

  const API_URL = "http://localhost:8000/ventas/";

  const cargarVentas = async () => {
    const res = await fetch(API_URL);
    const data = await res.json();
    // Filtramos usando el nuevo campo status que agregaste a tu BD
    setVentas(data.filter(v => v.status !== "I"));
    setEliminadas(data.filter(v => v.status === "I"));
  };

  const agregarVenta = async (nuevaVenta) => {
    await fetch(API_URL, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(nuevaVenta)
    });
    await cargarVentas();
  };

  const eliminarVenta = async (id) => {
    await fetch(`${API_URL}${id}/eliminar`, { method: "PUT" });
    await cargarVentas();
  };

  const restaurarVenta = async (venta) => {
    const ventaRestaurada = { ...venta, status: "A" };
    await fetch(`${API_URL}${venta.id_venta}`, {
      method: "PUT",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(ventaRestaurada)
    });
    await cargarVentas();
  };

  const actualizarVenta = async (id_venta, ventaEditada) => {
    await fetch(`${API_URL}${id_venta}`, {
      method: "PUT",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(ventaEditada)
    });
    await cargarVentas();
  };

  return {
    ventas,
    eliminadas,
    cargarVentas,
    agregarVenta,
    actualizarVenta,
    eliminarVenta,
    restaurarVenta
  };
}