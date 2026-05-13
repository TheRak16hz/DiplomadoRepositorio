// src/App.jsx
import { useState } from "react";
import "./App.css";

import Navegacion from "./components/Navegacion";
import ModuloProductos from "./components/ModuloProductos";
import ModuloPapelera from "./components/ModuloPapelera";
import ModuloVentas from "./components/ModuloVentas";
import ModuloPapeleraVentas from "./components/ModuloPapeleraVentas";

export default function App() {
  const [vista, setVista] = useState("inicio");

  return (
    <div className="contenedor">
      <h1>🛠️ Mi Ferretería</h1>
      
      <Navegacion vistaActual={vista} setVista={setVista} />

      {vista === "inicio" && (
        <div style={{ textAlign: 'center', padding: '40px 0' }}>
          <h2>Bienvenido al sistema</h2>
          <p>Selecciona una opción en el menú superior para comenzar.</p>
        </div>
      )}
      
      {vista === "productos" && <ModuloProductos />}
      {vista === "papelera" && <ModuloPapelera />}
      
      {vista === "ventas" && <ModuloVentas />}
      {vista === "papeleraVentas" && <ModuloPapeleraVentas />}
    </div>
  );
}