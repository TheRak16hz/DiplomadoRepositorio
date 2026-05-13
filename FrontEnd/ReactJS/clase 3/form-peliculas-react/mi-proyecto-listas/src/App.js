import React from "react";
import ItemTarea from "./components/ItemTarea";
import TAREAS_INICIALES from "./data/tareas";
import './App.css';

function App() {

    // 1. Usamos el metodo .map() para crear los elementos JSX
    const listaDeTareas = TAREAS_INICIALES;

    //crucial la propiedad key
    //se usa el ID unico ede la tarea para ayudar a react a rastrear los elementos
    const elementoJSX = listaDeTareas.map((tarea) => (
      <ItemTarea
        key={tarea.id} //linea obligatoria en listas
        texto={tarea.texto}
        completada={tarea.completada}
      />
    ));

    return (
      <div className="app-container">
        <h1>Mi lista de tareas dinamicas</h1>

        {/* inyectamos el array de elementos JSX general por map() */}
        <ul className="lista-tareas">
          {elementoJSX}
        </ul>
        <p style={{ marginTop: '30px', color: '#888', fontSize: '0.9em' }}>
          <b>NOTA:</b> El Array 'tareas.js' se transforma automaticamente en la lista visual. Si cambias los datos, la vista de React cambia.
        </p>
      </div>
    );
}

export default App;