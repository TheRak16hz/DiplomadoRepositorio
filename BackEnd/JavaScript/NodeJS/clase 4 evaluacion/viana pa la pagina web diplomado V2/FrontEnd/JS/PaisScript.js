const apiUrl = 'http://localhost:3000/api/pais';

// Nueva constante para la API de Continentes
const apiUrlContinentes = 'http://localhost:3000/api/continentes';

//funcion para cargar todos los contienentes en la tabla
function cargarPaises() {
    fetch(apiUrl)
    .then(response => response.json())
    .then(data => {
        const tbody = document.querySelector('#tabla-paises tbody');
        tbody.innerHTML = '';
        data.forEach(pais => {
            const row = document.createElement("tr");
            row.innerHTML = `
            <td>${pais.nom_pai}</td>
            <td>${pais.des_pai}</td>
            <td>${pais.ali_pai}</td>
            <td>${pais.cti_pai}</td>
            <td>${pais.fky_con}</td>
            <td>${pais.est_pai}</td>
            <td>
                <button class='btn-warning rounded' onclick="editarPais(${pais.cod_pai})">Editar</button>
                <button class='btn-danger rounded' onclick="eliminarPais(${pais.cod_pai})">Eliminar</button>
            </td>
            `;
            tbody.appendChild(row);
        });
    })
    .catch(error => console.error('Error al cargar los paises:', error))
}

//Función para obtener y cargar los continentes en el select
function cargarContinentes() {
    fetch(apiUrlContinentes)
        .then(response => response.json())
        .then(data => {
            const selectContinente = document.getElementById('fky_con');
            selectContinente.innerHTML = '<option value="">Seleccione...</option>';
            data.forEach(continente => {
                // Asumo que tu API devuelve { cod_con, nom_con }
                const option = document.createElement("option");
                option.value = continente.cod_con; // El valor que se envía al servidor
                option.textContent = continente.nom_con; // El texto que ve el usuario

                selectContinente.appendChild(option);
            });
        })
        .catch(error => console.error('Error al cargar continentes:', error))
}



//funcion para agregar un nuevo contienente
function agregarNuevo() {
    document.getElementById('form-pais').reset();
    document.getElementById('id').value = '' //limpiar campo oculto
}

//funcion para editar pais
function editarPais(id) {
    fetch(`${apiUrl}/${id}`)
    .then(response => response.json())
    .then(pais => {
        document.getElementById('nom_pai').value = pais.nom_pai;
        document.getElementById('des_pai').value = pais.des_pai;
        document.getElementById('ali_pai').value = pais.ali_pai;
        document.getElementById('cti_pai').value = pais.cti_pai;
        document.getElementById('fky_con').value = pais.fky_con;
        document.getElementById('est_pai').value = pais.est_pai;
        document.getElementById('id').value = pais.cod_pai //poner el ID en el campo oculto
    })
    .catch(error => console.error('Error al obtener el pais', error));
}

//funcion para eliminar
function eliminarPais(id) {
    fetch(`${apiUrl}/${id}`, {
        method: 'DELETE'
    })
        .then(response => response.json())
        .then(() => {
            alert('pais eliminado');
            cargarPaises(); //recarga la tabla
        })
        .catch(error => console.error('Error al eliminar pais:', error));
}

//falta funcion para hacer get a los continentes del frontend

//funcion para manejar el formulario agregar/modificar
document.getElementById('form-pais').addEventListener('submit', function(event) {
    event.preventDefault();

    const id = document.getElementById('id').value;
    const nom_pai = document.getElementById('nom_pai').value;
    const des_pai = document.getElementById('des_pai').value;
    const ali_pai = document.getElementById('ali_pai').value;
    const cti_pai = document.getElementById('cti_pai').value;
    const fky_con = document.getElementById('fky_con').value;
    const est_pai = document.getElementById('est_pai').value;

    const pais = { nom_pai, des_pai, ali_pai, cti_pai, fky_con, est_pai };

    if (id) {
        //modificar un pais existente
        fetch(`${apiUrl}/${id}`, {
            method: 'PUT',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(pais)
        })
        .then(response => response.json())
        .then(() => {
            alert('Pais Actualizado');
            cargarPaises(); //recargar la tabla
        })
        .catch(error => console.error('Error al actualizar el pais', error))
    } else {
        //agregar un nuevo pais
        fetch(apiUrl, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(pais)
        })
            .then(response => response.json())
            .then(() => {
                alert('Pais agregado')
                cargarPaises() //recargar la tabla
            })
            .catch(error => console.error('Error al agregar pais', error))
    }

    //limpiar formulario
    document.getElementById('form-pais').reset();
});

//cargar la tabla al cargar la pagina
cargarPaises();
cargarContinentes();