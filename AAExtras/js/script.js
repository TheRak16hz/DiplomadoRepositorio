// js/script.js

document.addEventListener('DOMContentLoaded', async () => {
    const mainContent = document.querySelector('main .container');

    // Función para obtener datos desde localStorage o JSON
    const fetchData = async (key, defaultJsonPath) => {
        let data = JSON.parse(localStorage.getItem(key));
        if (!data || data.length === 0) {
            try {
                const response = await fetch(defaultJsonPath);
                data = await response.json();
                // Guardar los datos iniciales en localStorage si no existen
                localStorage.setItem(key, JSON.stringify(data));
            } catch (error) {
                console.error(`Error al cargar datos desde ${defaultJsonPath}:`, error);
                data = [];
            }
        }
        return data;
    };

    const categories = await fetchData('blogCategories', 'data/categories.json');
    const posts = await fetchData('blogPosts', 'data/posts.json');

    // Función para renderizar posts
    const renderPosts = () => {
        mainContent.innerHTML = ''; // Limpiar contenido anterior

        if (categories.length === 0 && posts.length === 0) {
            mainContent.innerHTML = `
                <h1 class="text-center mb-5 display-4 text-primary">Bienvenido a Mi Blog Personal</h1>
                <p class="text-center lead">Actualmente no hay categorías ni publicaciones para mostrar. ¡Visita el <a href="admin.html">panel de administración</a> para empezar a crear contenido!</p>
            `;
            return;
        }

        mainContent.innerHTML = `<h1 class="text-center mb-5 display-4 text-primary">Bienvenido a Mi Blog Personal</h1>`;

        categories.forEach(category => {
            const categoryPosts = posts.filter(post => post.category_id === category.id)
                                      .sort((a, b) => new Date(b.created_at) - new Date(a.created_at))
                                      .slice(0, 3); // Mostrar solo 3 posts por categoría

            if (categoryPosts.length > 0) {
                const categorySection = document.createElement('section');
                categorySection.classList.add('category-section', 'mb-5');
                categorySection.innerHTML = `<h2>Categoría: ${category.name}</h2><div class="row"></div>`;
                const rowDiv = categorySection.querySelector('.row');

                categoryPosts.forEach(post => {
                    const postCardHtml = `
                        <div class="col-md-4 mb-4">
                            <div class="card post-card h-100">
                                <img src="${post.image_url || 'https://via.placeholder.com/600x400?text=Sin+Imagen'}" class="card-img-top" alt="${post.title}">
                                <div class="card-body">
                                    <h5 class="card-title">${post.title}</h5>
                                    <p class="card-text">${post.content.substring(0, 150)}...</p>
                                    <a href="post.html?id=${post.id}" class="read-more">Leer más &raquo;</a>
                                </div>
                                <div class="card-footer text-muted">
                                    <small>Publicado el: ${new Date(post.created_at).toLocaleDateString('es-ES', { day: '2-digit', month: 'short', year: 'numeric' })}</small>
                                </div>
                            </div>
                        </div>
                    `;
                    rowDiv.innerHTML += postCardHtml;
                });
                mainContent.appendChild(categorySection);
            }
        });
        // Si hay categorías pero ninguna tiene posts
        if (mainContent.innerHTML === `<h1 class="text-center mb-5 display-4 text-primary">Bienvenido a Mi Blog Personal</h1>`) {
             mainContent.innerHTML += `<p class="text-center lead">No hay publicaciones en ninguna categoría todavía.</p>`;
        }
    };

    // Función para renderizar un post individual (usado en post.html)
    const renderSinglePost = () => {
        const urlParams = new URLSearchParams(window.location.search);
        const postId = parseInt(urlParams.get('id'));
        const singlePostContainer = document.getElementById('singlePostContainer');

        if (!singlePostContainer) return; // Si no estamos en post.html, salimos

        const post = posts.find(p => p.id === postId);
        const category = categories.find(c => c.id === post.category_id);

        if (post && category) {
            singlePostContainer.innerHTML = `
                <article class="single-post-content">
                    <h1 class="text-center">${post.title}</h1>
                    <div class="single-post-meta text-center mb-4">
                        <span>Categoría: <strong>${category.name}</strong></span>
                        <span>Publicado el: ${new Date(post.created_at).toLocaleDateString('es-ES', { day: '2-digit', month: 'short', year: 'numeric' })}</span>
                    </div>
                    ${post.image_url ? `<img src="${post.image_url}" class="img-fluid d-block mx-auto mb-4" alt="${post.title}">` : ''}
                    <div class="post-content-body">
                        <p>${post.content.replace(/\n/g, '<br>')}</p>
                    </div>
                    <div class="mt-5 text-center">
                        <a href="index.html" class="btn btn-primary"><i class="fas fa-arrow-left me-2"></i>Volver al inicio</a>
                    </div>
                </article>
            `;
        } else {
            singlePostContainer.innerHTML = `
                <div class="alert alert-warning" role="alert">Publicación no encontrada o ID inválido.</div>
                <div class="mt-5 text-center">
                    <a href="index.html" class="btn btn-primary"><i class="fas fa-arrow-left me-2"></i>Volver al inicio</a>
                </div>
            `;
        }
    };

    // Determinar qué página estamos cargando
    const currentPage = window.location.pathname.split('/').pop();

    if (currentPage === 'index.html' || currentPage === '') { // Para el index o la raíz
        renderPosts();
    } else if (currentPage === 'post.html') {
        renderSinglePost();
    }
});