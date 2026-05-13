import { useEffect, useState } from "react";
import axios from "axios";
import './App.css'

// definimos las URL de nuestra API de Node,js
const API_URL = 'http://localhost:3000/clientes'

function App() {
  //estado (Hooks)
  //clientes: guardará el array y que viene de la BD
  const [clientes, setClientes] = useState([])

  //form: objeto que controla los inputs del formulario
  const [form, setForm] = useState({
    id: null, nombre:'', apellido:'', direccion:'', telefono:'', nacimiento:''
  });

  //editando: switch para saber si el boton debe guardar o actualizar
  const [editando, setEditando] = useState(false);

  // ---EFECTOS---
  //se ejecuta una sola vez al cargar la App para traer los datos iniciales
  useEffect(() => {
    listarClientes();
  }, []);

  // ---FUNCIONES LOGICAS (Consumo de API)---
  // 1. GET: Obtener todos los clientes
  const listarClientes = async () => {
    try {
      const res = await axios.get(API_URL);
      setClientes(res.data); //guardamos la respuesta del estado
    } catch (error) {
      console.error("Error en el GET", error)
    }
  }

  //2. GET con ID: Buscar un clientre para cargarlo en el formulario
  const seleccionarCliente = async (id) => {
    try {
      const res = await axios.get(`${API_URL}/${id}`);
      setForm(res.data); //Llenamos el formulario con los datos encontrados
      setEditando(true) //activamos modo edicion
    } catch (error) {
      alert("No se pudo obtener detalles del cliente")
    }
  };

  //3. POST (Crear) y 4. PUT (Actualizar)
  const enviarDatos = async (e) => {
    e.preventDefault(); //evita que la pagina se recargue
    try {
      if (editando) {
        //si estamos editando, usamos el metodo PUT y pasamos el ID
        await axios.put(`${API_URL}/${form.id}`, form)
        alert("Cliente actualizado");
      } else {
        //si no estamos editando, usamos el metodo POST
        await axios.post(API_URL, form)
        alert("Cliente creado");
      }
      limpiarFormulario();
      listarClientes(); //Refrescamos la lista de la tabla
    } catch (error) {
      console.error("ERROR al enviar", error)
    }
  };
  // 5. DELETE Eliminar cliente
  const eliminarClientes = async (id) => {
    if (window.confirm("¿Estas seguro de eliminar el cliente de Merida?")) {
      try {
        await axios.delete(`${API_URL}/${id}`);
        alert("Cliente eliminado");
        listarClientes(); //actualiza la vista
      } catch (error) {
        console.error("error al eliminar", error)
      }
    }
  };

  const limpiarFormulario = () => {
    setForm({
      id: null, nombre: '', apellido: '', direccion: '', telefono: '', nacimiento: ''
    });
    setEditando(false);
  };

  //Funcion para calturar lo que el usuario escribe en los inputs
  const manejarCambios = (e) => {
    setForm({
      ...form,
      [e.target.name]:e.target.value
    })
  };
  return (
    <div style={{padding: '20px'}}>
      <h1>Merida Bussines Manager🏔️</h1> 
      {/* SECCION FORMULARIO */}
      <div style={{background: '#eee', padding: '15px', borderRadius: '10px'}}>
        <h3>{editando ? "Modificar Cliente" : "Nuevo cliente"}</h3>
        <form onSubmit={enviarDatos}>
          <input name="nombre" placeholder="Nombre" value={form.nombre} onChange={manejarCambios} required />
          <input name="apellido" placeholder="Apellido" value={form.apellido} onChange={manejarCambios} required />
          <input name="direccion" placeholder="Direccion" value={form.direccion} onChange={manejarCambios} />
          <input name="telefono" placeholder="Telefono" value={form.telefono} onChange={manejarCambios} />
          <input type="date" name="nacimiento" value={form.nacimiento} onChange={manejarCambios} />
          
          <button type="submit" style={{marginLeft:'10px'}}>
            {editando ? "Actualizar" : "Guardar"}
          </button>
          {editando && <button type="button" onClick={limpiarFormulario}>Cancelar</button>}
        </form>
      </div>

      {/* SECCION TABLA */}
      <table border="1" style={{width: '100%', marginTop:'20px', borderCollapse:"collapse"}}>
        <thead>
          <tr>
            <th>Nombre</th>
            <th>Apellido</th>
            <th>Direccion</th>
            <th>Telefono</th>
            <th>Nacimiento</th>
            <th>Acciones</th>
          </tr>
        </thead>
        <tbody>
          {clientes.map(cli => (
            <tr key={cli.id}>
              <td>{cli.nombre}</td>
              <td>{cli.apellido}</td>
              <td>{cli.direccion}</td>
              <td>{new Date(cli.nacimiento).toLocaleDateString()}</td>
              <td>{cli.telefono}</td>
              <td>
                <button onClick={() => seleccionarCliente(cli.id)}>✏️</button>
                <button onClick={() => eliminarClientes(cli.id)}>🗑️</button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default App;

