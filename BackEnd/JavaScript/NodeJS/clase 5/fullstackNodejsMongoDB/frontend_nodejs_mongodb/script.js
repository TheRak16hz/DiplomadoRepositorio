const apiUrl = 'http://localhost:3000/api/movies';


document.addEventListener('DOMContentLoaded', () => {
    const moviesTableBody = document.querySelector('#moviesTable tbody');
    const movieFormContainer = document.querySelector('#movieFormContainer');
    const movieForm = document.querySelector('#movieForm');
    const addMovieBtn = document.querySelector('#addMovieBtn');
    const cancelBtn = document.querySelector('#cancelBtn');
    const submitBtn = document.querySelector('#submitBtn');
    const formTitle = document.querySelector('#formTitle');
    const movieIdInput = document.querySelector('#movieId');
    const titleInput = document.querySelector('#title');
    const directorInput = document.querySelector('#director');
    const yearInput = document.querySelector('#year');

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

    //inicializar
    loadMovies();

    //Mostrar formulario para editar pelicula
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

    //mostrar formulario para agregar pelicula
    addMovieBtn.addEventListener('click', () => {
        formTitle.textContent = 'Agregar Pelicula';
        submitBtn.textContent = 'Agregar';
        movieIdInput.value = "";
        titleInput.value = "";
        directorInput.value = "";
        yearInput.value = "";
        movieFormContainer.classList.remove('hidden');
    });

    //enviar formulario
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



