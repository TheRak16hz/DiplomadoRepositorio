const apiUrl = 'http://localhost:3000/api/estado';

// Nueva constante para la API de Estados
const apiUrlPais = 'http://localhost:3000/api/pais';

//funcion para cargar todos los estados en la tabla
function cargarEstados() {
    fetch(apiUrl)
    .then(response => response.json())
    .then(data => {
        const tbody = document.querySelector('#tabla-estados tbody');
        tbody.innerHTML = '';
        data.forEach(estado => {
            const row = document.createElement("tr");
            row.innerHTML = `
            <td>${estado.nom_est}</td>
            <td>${estado.des_est}</td>
            <td>${estado.fky_pai}</td>
            <td>${estado.est_est}</td>
            <td>
                <button class='btn-warning rounded' onclick="editarEstado(${estado.cod_est})">Editar</button>
                <button class='btn-danger rounded' onclick="eliminarEstado(${estado.cod_est})">Eliminar</button>
            </td>
            `;
            tbody.appendChild(row);
        });
    })
    .catch(error => console.error('Error al cargar los estados:', error))
}

//Función para obtener y cargar los PAISES en el select
function cargarPaises() {
    fetch(apiUrlPais)
        .then(response => response.json())
        .then(data => {
            const selectPais = document.getElementById('fky_pai');
            selectPais.innerHTML = '<option value="">Seleccione...</option>';
            data.forEach(pais => {
                const option = document.createElement("option");
                option.value = pais.cod_pai; // El valor que se envía al servidor
                option.textContent = pais.nom_pai; // El texto que ve el usuario

                selectPais.appendChild(option);
            });
        })
        .catch(error => console.error('Error al cargar paises:', error))
}



//funcion para agregar un nuevo estado
function agregarNuevo() {
    document.getElementById('form-estado').reset();
    document.getElementById('id').value = '' //limpiar campo oculto
}

//funcion para editar estado
function editarEstado(id) {
    fetch(`${apiUrl}/${id}`)
    .then(response => response.json())
    .then(estado => {
        document.getElementById('nom_est').value = estado.nom_est;
        document.getElementById('des_est').value = estado.des_est;
        document.getElementById('fky_pai').value = estado.fky_pai;
        document.getElementById('est_est').value = estado.est_est;
        document.getElementById('id').value = estado.cod_est //poner el ID en el campo oculto
    })
    .catch(error => console.error('Error al obtener el estado', error));
}

//funcion para eliminar
function eliminarEstado(id) {
    fetch(`${apiUrl}/${id}`, {
        method: 'DELETE'
    })
        .then(response => response.json())
        .then(() => {
            alert('estado eliminado');
            cargarEstados(); //recarga la tabla
        })
        .catch(error => console.error('Error al eliminar estado:', error));
}

//falta funcion para hacer get a los continentes del frontend

//funcion para manejar el formulario agregar/modificar
document.getElementById('form-estado').addEventListener('submit', function(event) {
    event.preventDefault();

    const id = document.getElementById('id').value;
    const nom_est = document.getElementById('nom_est').value;
    const des_est = document.getElementById('des_est').value;
    const fky_pai = document.getElementById('fky_pai').value;
    const est_est = document.getElementById('est_est').value;

    const pais = { nom_est, des_est, fky_pai, est_est };

    if (id) {
        //modificar un est existente
        fetch(`${apiUrl}/${id}`, {
            method: 'PUT',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(pais)
        })
        .then(response => response.json())
        .then(() => {
            alert('Estado Actualizado');
            cargarEstados(); //recargar la tabla
        })
        .catch(error => console.error('Error al actualizar el est', error))
    } else {
        //agregar un nuevo estado
        fetch(apiUrl, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(pais)
        })
            .then(response => response.json())
            .then(() => {
                alert('Estado agregado')
                cargarEstados() //recargar la tabla
            })
            .catch(error => console.error('Error al agregar estado', error))
    }

    //limpiar formulario
    document.getElementById('form-estado').reset();
});

//cargar la tabla al cargar la pagina
cargarEstados();
cargarPaises();
