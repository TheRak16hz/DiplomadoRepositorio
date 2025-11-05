const apiUrl = 'http://localhost:3000/api/zona_horaria';

//funcion para cargar todos los contienentes en la tabla
function cargarZonasHorarias() {
    fetch(apiUrl)
    .then(response => response.json())
    .then(data => {
        const tbody = document.querySelector('#tabla-zonas-horarias tbody');
        tbody.innerHTML = '';
        data.forEach(zona_horaria => {
            const row = document.createElement("tr");
            row.innerHTML = `
            <td>${zona_horaria.nom_zon}</td>
            <td>${zona_horaria.acr_zon}</td>
            <td>${zona_horaria.dif_zon}</td>
            <td>${zona_horaria.est_zon}</td>
            <td>
                <button class='btn-warning rounded' onclick="editarZonaHoraria(${zona_horaria.cod_zon})">Editar</button>
                <button class='btn-danger rounded' onclick="eliminarZonaHoraria(${zona_horaria.cod_zon})">Eliminar</button>
            </td>
            `;
            tbody.appendChild(row);
        });
    })
    .catch(error => console.error('Error al cargar las zonas horarias:', error))
}

//funcion para agregar un nuevo contienente
function agregarNuevo() {
    document.getElementById('form-zona-horaria').reset();
    document.getElementById('id').value = '' //limpiar campo oculto
}

//funcion para editar continente
function editarZonaHoraria(id) {
    fetch(`${apiUrl}/${id}`)
    .then(response => response.json())
    .then(zona_horaria => {
        document.getElementById('nom_zon').value = zona_horaria.nom_zon;
        document.getElementById('acr_zon').value = zona_horaria.acr_zon;
        document.getElementById('dif_zon').value = zona_horaria.dif_zon;
        document.getElementById('est_zon').value = zona_horaria.est_zon;
        document.getElementById('id').value = zona_horaria.cod_zon //poner el ID en el campo oculto
    })
    .catch(error => console.error('Error al obtener la zona horaria', error));
}

//funcion para eliminar
function eliminarZonaHoraria(id) {
    fetch(`${apiUrl}/${id}`, {
        method: 'DELETE'
    })
        .then(response => response.json())
        .then(() => {
            alert('zona horaria eliminado');
            cargarZonasHorarias(); //recarga la tabla
        })
        .catch(error => console.error('Error al eliminar zona horaria:', error));
}

//funcion para manejar el formulario agregar/modificar
document.getElementById('form-zona-horaria').addEventListener('submit', function(event) {
    event.preventDefault();

    const id = document.getElementById('id').value;
    const nom_zon = document.getElementById('nom_zon').value;
    const acr_zon = document.getElementById('acr_zon').value;
    const dif_zon = document.getElementById('dif_zon').value;
    const est_zon = document.getElementById('est_zon').value;

    const zonaHoraria = { nom_zon, acr_zon ,dif_zon, est_zon };

    if (id) {
        //modificar una zona horaria existente
        fetch(`${apiUrl}/${id}`, {
            method: 'PUT',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(zonaHoraria)
        })
        .then(response => response.json())
        .then(() => {
            alert('Zona horaria Actualizada');
            cargarZonasHorarias(); //recargar la tabla
        })
        .catch(error => console.error('Error al actualizar la zona horaria', error))
    } else {
        //agregar una nueva zona horaria
        fetch(apiUrl, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(zonaHoraria)
        })
            .then(response => response.json())
            .then(() => {
                alert('zona horaria agregada')
                cargarZonasHorarias() //recargar la tabla
            })
            .catch(error => console.error('Error al agregar zona horaria', error))
    }

    //limpiar formulario
    document.getElementById('form-zona-horaria').reset();
});

//cargar la tabla al cargar la pagina
cargarZonasHorarias();