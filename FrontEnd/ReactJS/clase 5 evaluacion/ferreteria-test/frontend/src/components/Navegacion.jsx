// src/components/Navegacion.jsx
export default function Navegacion({ vistaActual, setVista }) {
  return (
    <div className="nav-bar" style={{ flexWrap: 'wrap' }}>
      <button className={`btn-nav ${vistaActual === 'inicio' ? 'activo' : ''}`} onClick={() => setVista("inicio")}>
        🏠 Inicio
      </button>
      
      <button className={`btn-nav ${vistaActual === 'productos' ? 'activo' : ''}`} onClick={() => setVista("productos")}>
        📦 Productos
      </button>
      <button className={`btn-nav ${vistaActual === 'papelera' ? 'activo' : ''}`} onClick={() => setVista("papelera")}>
        🗑️ Papelera Productos
      </button>

      <button className={`btn-nav ${vistaActual === 'ventas' ? 'activo' : ''}`} onClick={() => setVista("ventas")}>
        💰 Ventas
      </button>
      <button className={`btn-nav ${vistaActual === 'papeleraVentas' ? 'activo' : ''}`} onClick={() => setVista("papeleraVentas")}>
        🚫 Ventas Anuladas
      </button>
    </div>
  );
}