const apiUrl = 'http://localhost:3000/ubicacion';
const formContinente = document.getElementById('form-continente'); // El formulario oculto

// --- Funciones CRUD de la Interfaz ---

/**
 * Carga todos los continentes en la tabla.
 */
function cargarContinentes() {
    fetch(apiUrl)
    .then(response => {
        if (!response.ok) {
            throw new Error(`HTTP error! status: ${response.status}`);
        }
        return response.json();
    })
    .then(data => {
        const tbody = document.querySelector('#tabla-continentes tbody');
        tbody.innerHTML = '';
        
        if (data.length === 0) {
            tbody.innerHTML = '<tr><td colspan="5" class="text-center">No hay continentes registrados.</td></tr>';
            return;
        }

        data.forEach(continente => {
            const row = document.createElement("tr");
            const estatusTexto = continente.est_con === 'A' ? 'Activo' : 'Inactivo';
            
            row.innerHTML = `
                <td>${continente.cod_con}</td>
                <td>${continente.nom_con}</td>
                <td>${continente.des_con || '(Sin descripción)'}</td>
                <td>${estatusTexto}</td>
                <td>
                    <button class="btn btn-sm btn-info" onclick="editarContinente(${continente.cod_con})">Editar</button>
                    <button class="btn btn-sm btn-danger" onclick="eliminarContinente(${continente.cod_con})">Eliminar</button>
                </td>
            `;
            tbody.appendChild(row);
        });
    })
    .catch(error => console.error('Error al cargar los continentes:', error));
}


/**
 * Función que redirige al formulario de edición con el ID. 
 * ¡Necesitas crear una página de edición para que funcione correctamente!
 * En este ejemplo, solo alertamos.
 */
function editarContinente(id) {
    // Implementación real: Redirigir al formulario con el ID para cargar los datos a editar.
    // window.location.href = `./Datos_continente.html?id=${id}`; 
    alert(`Redirigiendo a edición del Continente con Código: ${id}. 
    Para implementar la edición completa, modificarías el formulario 'Datos_continente.html' para cargar los datos 
    al recibir un 'id' en la URL y cambiar la acción a 'PUT' en lugar de 'POST'.`);
}


/**
 * Elimina un continente por su código.
 * @param {number} id - El código del continente a eliminar.
 */
function eliminarContinente(id) {
    if (!confirm(`¿Está seguro que desea eliminar el Continente con Código ${id}? Esta acción es irreversible.`)) {
        return;
    }

    fetch(`${apiUrl}/${id}`, {
        method: 'DELETE'
    })
    .then(response => {
        if (!response.ok) {
            // Lanza error para ser capturado en el catch si no se eliminó correctamente
            throw new Error(`Error al eliminar: ${response.statusText}`);
        }
        return response.json();
    })
    .then(() => {
        alert('Continente eliminado exitosamente');
        cargarContinentes(); // recarga la tabla
    })
    .catch(error => console.error('Error al eliminar continente:', error));
}


// Cargar la tabla al cargar la página (¡Esta es la línea clave para llenar la tabla!)
document.addEventListener('DOMContentLoaded', cargarContinentes);