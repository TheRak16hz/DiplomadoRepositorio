import React from "react";
import '../App.css'

function ItemTarea({ texto, completada }) {
    const claseCSS = completada ? 'tarea-item tarea-completada' : 'tarea-item';

    return (
        <li className={claseCSS}>
            <span>{texto}</span>
            {/* renderizado condicional: muestra el check solo si esta completada */}
            {completada && <span className="icono-check"></span> }
        </li>
    );
}

export default ItemTarea;
