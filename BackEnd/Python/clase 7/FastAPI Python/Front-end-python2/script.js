const apiUrl = "http://localhost:8000"; //URL base de la API

document.addEventListener('DOMContentLoaded', () => {
    cargarPeliculas();
});

//cargar peliculas para que el usuario pueda seleccionar una al agregar un comentario
async function cargarPeliculas() {
    const peliculasList = document.getElementById("peliculas-list");
    const selectPelicula = document.getElementById("comentario-pelicula");
    try {
        const response = await fetch(`${apiUrl}/peliculas/`);
        const peliculas = await response.json();
        // mostrar peliculas
        peliculasList.innerHTML = peliculas.map(pelicula =>
            `<li>
            ${pelicula.titulo} (${pelicula.anio}) - Director: ${pelicula.director}
            <button onclick=cargarComentarios(${pelicula.id})>Ver comentarios</button>
            </li>`
        ).join("");

        //llenar el select con las peliculas para agregar comentarios
        selectPelicula.innerHTML = peliculas.map(pelicula =>
            `<option value="${pelicula.id}">${pelicula.titulo}</option>`
        ).join("");
    } catch (error) {
        console.error("Error cargando peliculas")
    }
}

//cargar los comentarios de la pelicula especifica
async function cargarComentarios(peliculaId) {
    const comentariosList = document.getElementById("comentarios-list");
    try {
        const response = await fetch(`${apiUrl}/peliculas/${peliculaId}/comentarios`);
        const comentarios = await response.json();
        comentariosList.innerHTML = comentarios.length ? comentarios.map(comentario => 
            `
            <div>
                <p>${comentario.contenido}</p>
                <button onclick="eliminarComentario(${comentario.id})">Eliminar</button>
            </div>`
        ).join("")
        : "<p>No hay comentarios de esta pelicula</p>"

    } catch (error) {
        console.error("Error cargando los comentarios", error)
    }
}

document.getElementById("form-comentario").addEventListener("submit", async (event) =>
{
    event.preventDefault();
    const contenido = document.getElementById("comentario-text").value;
    const peliculaId = document.getElementById("comentario-pelicula").value;
    if (!contenido || !peliculaId) {
        alert("por favor completar los otros campos");
        return
    }
    try {
        const response = await fetch(`${apiUrl}/comentarios/`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body:JSON.stringify({
                contenido,
                pelicula_id: peliculaId
            })
        });
        const comentario = await response.json()
        alert("comentario agregado exitosamente!");
        cargarComentarios(peliculaId); // volver a cargar los comentarios despues de agregar uno
    } catch (error) {
        console.error("Error al agregar el comentario", error)
    }
})

async function eliminarComentario(comentarioId) {
    try {
        await fetch(`${apiUrl}/comentarios/${comentarioId}`, {
            method: 'DELETE'
        });

        alert("Comentario Eliminado!");
        cargarComentarios(); //recarga todos los comentarios despues de eliminar uno
    } catch (error) {
        console.error("Error eliminando comentario:", error);
    }
}