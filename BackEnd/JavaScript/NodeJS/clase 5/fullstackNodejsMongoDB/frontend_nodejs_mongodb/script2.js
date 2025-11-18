const apiUrl = 'http://localhost:3000/api/movies';

// cargar peliculas
const loadMovies = async () => {
    const response = await fetch(apiUrl);
    const movies = await response.json();
    moviesTableBody.innerHTML = "";
    movies.forEach(movie => {
        const row = document.createElement('tr');
        row.innerHTML = `
        <td>${movie.title}</td>
        <td>${movie.director}</td>
        <td>${movie.year}</td>
        <td>
            <button class="button2" onclick="editMovie('${movie._id}')"> Editar </button>
            <button class="button3" onclick="deleteMovie('${movie._id}')"> Eliminar </button>
        </td>
        `;
        moviesTableBody.appendChild(row);
    });
};

// Mostrar formulario para editar pelicula (Función global para el onclick)
    window.editMovie = async (id) => {
    const response = await fetch(`${apiUrl}/${id}`);
    const movie = await response.json();
    formTitle.textContent = 'Editar Pelicula';
    submitBtn.textContent = "Actualizar";
    movieIdInput.value = movie._id;
    titleInput.value = movie.title;
    directorInput.value = movie.director;
    yearInput.value = movie.year;
    movieFormContainer.classList.remove('hidden');
};
//===============================================
document.addEventListener('DOMContentLoaded', () => {
    moviesTableBody = document.querySelector('#moviesTable tbody');
    movieFormContainer = document.querySelector('#movieFormContainer');
    movieForm = document.querySelector('#movieForm');
    addMovieBtn = document.querySelector('#addMovieBtn');
    cancelBtn = document.querySelector('#cancelBtn');
    submitBtn = document.querySelector('#submitBtn');
    formTitle = document.querySelector('#formTitle');
    movieIdInput = document.querySelector('#movieId');
    titleInput = document.querySelector('#title');
    directorInput = document.querySelector('#director');
    yearInput = document.querySelector('#year');
    loadMovies();
    
    // Listener: mostrar formulario para agregar pelicula
    addMovieBtn.addEventListener('click', () => {
        formTitle.textContent = 'Agregar Pelicula';
        submitBtn.textContent = 'Agregar';
        movieIdInput.value = "";
        titleInput.value = "";
        directorInput.value = "";
        yearInput.value = "";
        movieFormContainer.classList.remove('hidden');
    });

    // Listener: enviar formulario (Agregar/Actualizar)
    movieForm.addEventListener('submit', async (e) => {
        e.preventDefault();
        const movie = {
            title: titleInput.value,
            director: directorInput.value,
            year: parseInt(yearInput.value, 10)
        };
        const method = movieIdInput.value ? 'PUT' : 'POST';
        const url = movieIdInput.value ? `${apiUrl}/${movieIdInput.value}` : apiUrl;
        await fetch(url, {
            method: method,
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(movie)
        });

        movieFormContainer.classList.add('hidden');
        loadMovies();
    });

    // Listener: cancelar formulario
    cancelBtn.addEventListener('click', () => {
        movieFormContainer.classList.add('hidden');
    });
});

// Nota: La función deleteMovie aún no está definida en tu script original, 
// pero 'editMovie' se movió para ser global como lo habías intentado.