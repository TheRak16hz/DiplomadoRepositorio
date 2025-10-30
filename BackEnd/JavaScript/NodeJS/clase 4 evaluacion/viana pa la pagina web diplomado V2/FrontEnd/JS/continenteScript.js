
const apiUrl = 'http://localhost:3000/api/continentes';

//funcion para cargar todos los contienentes en la tabla
function cargarContinentes() {
    fetch(apiUrl)
    .then(response => response.json())
    .then(data => {
        const tbody = document.querySelector('#tabla-continentes tbody');
        tbody.innerHTML = '';
        data.forEach(continente => {
            const row = document.createElement("tr");
            row.innerHTML = `
            <td>${continente.nom_con}</td>
            <td>${continente.des_con}</td>
            <td>${continente.est_con}</td>
            <td>
                <button class='btn-warning rounded' onclick="editarContinente(${continente.cod_con})">Editar</button>
                <button class='btn-danger rounded' onclick="eliminarContinente(${continente.cod_con})">Eliminar</button>
            </td>
            `;
            tbody.appendChild(row);
        });
    })
    .catch(error => console.error('Error al cargar los continentes:', error))
}

//funcion para agregar un nuevo contienente
function agregarNuevo() {
    document.getElementById('form-continente').reset();
    document.getElementById('id').value = '' //limpiar campo oculto
}

//funcion para editar continente
function editarContinente(id) {
    fetch(`${apiUrl}/${id}`)
    .then(response => response.json())
    .then(continente => {
        document.getElementById('nom_con').value = continente.nom_con;
        document.getElementById('des_con').value = continente.des_con;
        document.getElementById('est_con').value = continente.est_con;
        document.getElementById('id').value = continente.cod_con //poner el ID en el campo oculto
    })
    .catch(error => console.error('Error al obtener el contienente', error));
}

//funcion para eliminar
function eliminarContinente(id) {
    fetch(`${apiUrl}/${id}`, {
        method: 'DELETE'
    })
        .then(response => response.json())
        .then(() => {
            alert('continente eliminado');
            cargarContinentes(); //recarga la tabla
        })
        .catch(error => console.error('Error al eliminar continente:', error));
}

//funcion para manejar el formulario agregar/modificar
document.getElementById('form-continente').addEventListener('submit', function(event) {
    event.preventDefault();

    const id = document.getElementById('id').value;
    const nom_con = document.getElementById('nom_con').value;
    const des_con = document.getElementById('des_con').value;
    const est_con = document.getElementById('est_con').value;

    const continente = { nom_con, des_con, est_con };

    if (id) {
        //modificar un continente existente
        fetch(`${apiUrl}/${id}`, {
            method: 'PUT',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(continente)
        })
        .then(response => response.json())
        .then(() => {
            alert('Continente Actualizado');
            cargarContinentes(); //recargar la tabla
        })
        .catch(error => console.error('Error al actualizar el continente', error))
    } else {
        //agregar un nuevo contienente
        fetch(apiUrl, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(continente)
        })
            .then(response => response.json())
            .then(() => {
                alert('Contienente agregado')
                cargarContinentes() //recargar la tabla
            })
            .catch(error => console.error('Error al agregar continente', error))
    }

    //limpiar formulario
    document.getElementById('form-continente').reset();
});

//cargar la tabla al cargar la pagina
cargarContinentes();