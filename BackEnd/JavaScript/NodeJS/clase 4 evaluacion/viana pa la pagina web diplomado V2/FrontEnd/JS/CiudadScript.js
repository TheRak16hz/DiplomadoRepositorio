const apiUrl = 'http://localhost:3000/api/ciudad';

// Nueva constante para la API de estados
const apiUrlEstado = 'http://localhost:3000/api/estado';

// Nueva constante para la API de estados
const apiUrlZonaHoraria = 'http://localhost:3000/api/zona_horaria';

//funcion para cargar todos los ciudads en la tabla
function cargarCiudades() {
    fetch(apiUrl)
    .then(response => response.json())
    .then(data => {
        const tbody = document.querySelector('#tabla-ciudades tbody');
        tbody.innerHTML = '';
        data.forEach(ciudad => {
            const row = document.createElement("tr");
            row.innerHTML = `
            <td>${ciudad.nom_ciu}</td>
            <td>${ciudad.des_ciu}</td>
            <td>${ciudad.fky_est}</td>
            <td>${ciudad.fky_zon}</td>
            <td>${ciudad.est_ciu}</td>
            <td>
                <button class='btn-warning rounded' onclick="editarCiudad(${ciudad.cod_ciu})">Editar</button>
                <button class='btn-danger rounded' onclick="eliminarCiudad(${ciudad.cod_ciu})">Eliminar</button>
            </td>
            `;
            tbody.appendChild(row);
        });
    })
    .catch(error => console.error('Error al cargar las ciudades:', error))
}

//Función para obtener y cargar los ESTADOS en el select
function cargarEstados() {
    fetch(apiUrlEstado)
        .then(response => response.json())
        .then(data => {
            const selectEstado = document.getElementById('fky_est');
            selectEstado.innerHTML = '<option value="">Seleccione...</option>';
            data.forEach(estado => {
                const option = document.createElement("option");
                option.value = estado.cod_est; // El valor que se envía al servidor
                option.textContent = estado.nom_est; // El texto que ve el usuario

                selectEstado.appendChild(option);
            });
        })
        .catch(error => console.error('Error al cargar paises:', error))
}


//Función para obtener y cargar las ZONAS HORARIAS en el select
function cargarZonasHorarias() {
    fetch(apiUrlZonaHoraria)
        .then(response => response.json())
        .then(data => {
            const selectZona = document.getElementById('fky_zon');
            selectZona.innerHTML = '<option value="">Seleccione...</option>';
            data.forEach(estado => {
                const option = document.createElement("option");
                option.value = estado.cod_zon; // El valor que se envía al servidor
                option.textContent = estado.nom_zon; // El texto que ve el usuario

                selectZona.appendChild(option);
            });
        })
        .catch(error => console.error('Error al cargar zonas:', error))
}



//funcion para agregar un nuevo ciudad
function agregarNuevo() {
    document.getElementById('form-ciudad').reset();
    document.getElementById('id').value = '' //limpiar campo oculto
}

//funcion para editar ciudad
function editarCiudad(id) {
    fetch(`${apiUrl}/${id}`)
    .then(response => response.json())
    .then(ciudad => {
        document.getElementById('nom_ciu').value = ciudad.nom_ciu;
        document.getElementById('des_ciu').value = ciudad.des_ciu;
        document.getElementById('fky_est').value = ciudad.fky_est;
        document.getElementById('fky_zon').value = ciudad.fky_zon;
        document.getElementById('est_ciu').value = ciudad.est_ciu;
        document.getElementById('id').value = ciudad.cod_ciu //poner el ID en el campo oculto
    })
    .catch(error => console.error('Error al obtener el ciudad', error));
}

//funcion para eliminar
function eliminarCiudad(id) {
    fetch(`${apiUrl}/${id}`, {
        method: 'DELETE'
    })
        .then(response => response.json())
        .then(() => {
            alert('ciudad eliminado');
            cargarCiudades(); //recarga la tabla
        })
        .catch(error => console.error('Error al eliminar ciudad:', error));
}

//falta funcion para hacer get a los continentes del frontend

//funcion para manejar el formulario agregar/modificar
document.getElementById('form-ciudad').addEventListener('submit', function(event) {
    event.preventDefault();

    const id = document.getElementById('id').value;
    const nom_ciu = document.getElementById('nom_ciu').value;
    const des_ciu = document.getElementById('des_ciu').value;
    const fky_est = document.getElementById('fky_est').value;
    const fky_zon = document.getElementById('fky_zon').value;
    const est_ciu = document.getElementById('est_ciu').value;

    const pais = { nom_ciu, des_ciu, fky_est, fky_zon, est_ciu };

    if (id) {
        //modificar una ciudad existente
        fetch(`${apiUrl}/${id}`, {
            method: 'PUT',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(pais)
        })
        .then(response => response.json())
        .then(() => {
            alert('ciudad Actualizada');
            cargarCiudades(); //recargar la tabla
        })
        .catch(error => console.error('Error al actualizar ciudad', error))
    } else {
        //agregar un nuevo ciudad
        fetch(apiUrl, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(pais)
        })
            .then(response => response.json())
            .then(() => {
                alert('ciudad agregada')
                cargarCiudades() //recargar la tabla
            })
            .catch(error => console.error('Error al agregar ciudad', error))
    }

    //limpiar formulario
    document.getElementById('form-ciudad').reset();
});

//cargar la tabla al cargar la pagina
cargarCiudades();
cargarEstados();
cargarZonasHorarias();
