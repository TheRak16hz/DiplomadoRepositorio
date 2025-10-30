const apiUrl = 'http://127.0.0.1:3000/api/movies'; // Cambia esto a la URL de tu API

document.addEventListener('DOMContentLoaded', () => {
    fetchMovies();

    document.getElementById('addMovieForm').addEventListener('submit', addMovie);
    document.getElementById('editMovieForm').addEventListener('submit', updateMovie);
});

async function fetchMovies() {
    try {
        const response = await fetch(apiUrl);
        const movies = await response.json();
        const tableBody = document.querySelector('#moviesTable tbody');
        tableBody.innerHTML = '';

        movies.forEach(movie => {
            const row = document.createElement('tr');
            row.innerHTML = `
                <td>${movie.title}</td>
                <td>${movie.director}</td>
                <td>${movie.release_year}</td>
                <td>
                    <button class="button2" onclick="showEditForm(${movie.id})"><i class='bx bx-edit'></i></button>
                    <button class="button3" onclick="deleteMovie(${movie.id})"><i class='bx bx-trash'></i></button>
                </td>
            `;
            tableBody.appendChild(row);
        });
    } catch (error) {
        console.error('Error fetching movies:', error);
    }
}

async function addMovie(event) {
    event.preventDefault();

    const title = document.getElementById('title').value;
    const director = document.getElementById('director').value;
    const releaseYear = document.getElementById('releaseYear').value;

    try {
        await fetch(apiUrl, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                title,
                director,
                release_year: releaseYear
            })
        });
        fetchMovies();
        document.getElementById('addMovieForm').reset();
        document.getElementById('addFormContainer').style.display = 'block'; // Asegúrate de mostrar el formulario de agregar
        document.getElementById('editFormContainer').style.display = 'none'; // Oculta el formulario de editar
    } catch (error) {
        console.error('Error adding movie:', error);
    }
}

async function deleteMovie(id) {
    try {
        await fetch(`${apiUrl}/${id}`, {
            method: 'DELETE'
        });
        fetchMovies();
    } catch (error) {
        console.error('Error deleting movie:', error);
    }
}

function showEditForm(id) {
    document.getElementById('addFormContainer').style.display = 'none'; // Oculta el formulario de agregar
    document.getElementById('editFormContainer').style.display = 'block'; // Muestra el formulario de editar
    document.getElementById('editMovieId').value = id;

    fetch(`${apiUrl}/${id}`)
        .then(response => {
            if (!response.ok) {
                throw new Error(`HTTP error! Status: ${response.status}`);
            }
            return response.json();
        })
        .then(movie => {
            console.log('Datos obtenidos:', movie);
            
            if (movie) {
                document.getElementById('editTitle').value = movie.title || '';
                document.getElementById('editDirector').value = movie.director || '';
                document.getElementById('editReleaseYear').value = movie.release_year || '';
            } else {
                console.error('No movie data received');
            }
        })
        .catch(error => {
            console.error('Error fetching movie for edit:', error);
        });
}
        
async function updateMovie(event) {
    event.preventDefault();

    const id = document.getElementById('editMovieId').value;
    const title = document.getElementById('editTitle').value;
    const director = document.getElementById('editDirector').value;
    const releaseYear = document.getElementById('editReleaseYear').value;

    try {
        await fetch(`${apiUrl}/${id}`, {
            method: 'PUT',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                title,
                director,
                release_year: releaseYear
            })
        });
        fetchMovies();
        document.getElementById('editFormContainer').style.display = 'none'; // Oculta el formulario de editar
        document.getElementById('addFormContainer').style.display = 'block'; // Muestra el formulario de agregar
    } catch (error) {
        console.error('Error updating movie:', error);
    }
}

