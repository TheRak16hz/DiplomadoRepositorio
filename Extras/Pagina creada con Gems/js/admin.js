// js/admin.js

document.addEventListener('DOMContentLoaded', async () => {
    const adminContent = document.getElementById('adminMainContent');
    const sidebarNav = document.getElementById('sidebarMenu');

    let categories = [];
    let posts = [];

    // Función para obtener y guardar datos en localStorage
    const getStoredData = async (key, defaultJsonPath) => {
        let data = JSON.parse(localStorage.getItem(key));
        if (!data || data.length === 0) {
            try {
                const response = await fetch(defaultJsonPath);
                data = await response.json();
                localStorage.setItem(key, JSON.stringify(data)); // Inicializar localStorage
            } catch (error) {
                console.error(`Error al cargar datos desde ${defaultJsonPath}:`, error);
                data = [];
            }
        }
        return data;
    };

    const saveToLocalStorage = (key, data) => {
        localStorage.setItem(key, JSON.stringify(data));
    };

    // Cargar datos iniciales
    categories = await getStoredData('blogCategories', '../data/categories.json');
    posts = await getStoredData('blogPosts', '../data/posts.json');

    // Función para mostrar mensajes de alerta
    const showAlert = (message, type) => {
        const alertHtml = `
            <div class="alert alert-${type} alert-dismissible fade show" role="alert">
                ${message}
                <button type="button" class="btn-close" data-bs-dismiss="alert" aria-label="Close"></button>
            </div>
        `;
        const alertContainer = document.createElement('div');
        alertContainer.innerHTML = alertHtml;
        adminContent.prepend(alertContainer.firstChild); // Añadir al inicio del contenido
        setTimeout(() => {
            const currentAlert = adminContent.querySelector('.alert');
            if (currentAlert) currentAlert.remove();
        }, 5000); // Quitar alerta después de 5 segundos
    };

    // Renderizar el Dashboard
    const renderDashboard = () => {
        const totalPosts = posts.length;
        const totalCategories = categories.length;

        adminContent.innerHTML = `
            <div class="d-flex justify-content-between flex-wrap flex-md-nowrap align-items-center pt-3 pb-2 mb-3 border-bottom">
                <h1 class="h2 text-primary">Dashboard del Administrador</h1>
            </div>

            <div class="row">
                <div class="col-md-6 col-lg-4 mb-4">
                    <div class="card text-white bg-primary mb-3">
                        <div class="card-body">
                            <div class="d-flex justify-content-between align-items-center">
                                <div>
                                    <h5 class="card-title">Publicaciones Totales</h5>
                                    <p class="card-text fs-2">${totalPosts}</p>
                                </div>
                                <i class="fas fa-newspaper fa-3x"></i>
                            </div>
                            <a href="#" class="text-white stretched-link" data-page="manage_posts">Ver Publicaciones</a>
                        </div>
                    </div>
                </div>
                <div class="col-md-6 col-lg-4 mb-4">
                    <div class="card text-white bg-success mb-3">
                        <div class="card-body">
                            <div class="d-flex justify-content-between align-items-center">
                                <div>
                                    <h5 class="card-title">Categorías Totales</h5>
                                    <p class="card-text fs-2">${totalCategories}</p>
                                </div>
                                <i class="fas fa-tags fa-3x"></i>
                            </div>
                            <a href="#" class="text-white stretched-link" data-page="manage_categories">Ver Categorías</a>
                        </div>
                    </div>
                </div>
            </div>

            <div class="mt-4">
                <h3 class="text-secondary">Acciones Rápidas</h3>
                <div class="list-group">
                    <a href="#" class="list-group-item list-group-item-action" data-page="manage_posts" data-action="add"><i class="fas fa-plus-circle me-2"></i>Crear Nueva Publicación</a>
                    <a href="#" class="list-group-item list-group-item-action" data-page="manage_categories" data-action="add"><i class="fas fa-plus-circle me-2"></i>Crear Nueva Categoría</a>
                </div>
            </div>

            <div class="mt-5">
                <h3 class="text-secondary">Últimas Publicaciones</h3>
                <div class="table-responsive">
                    <table class="table table-striped table-hover">
                        <thead>
                            <tr>
                                <th>Título</th>
                                <th>Categoría</th>
                                <th>Fecha</th>
                                <th>Acciones</th>
                            </tr>
                        </thead>
                        <tbody id="latestPostsTableBody">
                            ${posts.length === 0 ? `<tr><td colspan='4' class='text-center'>No hay publicaciones recientes.</td></tr>` : ''}
                        </tbody>
                    </table>
                </div>
            </div>
        `;

        const latestPostsTableBody = document.getElementById('latestPostsTableBody');
        posts.sort((a, b) => new Date(b.created_at) - new Date(a.created_at)).slice(0, 5).forEach(post => {
            const categoryName = categories.find(cat => cat.id === post.category_id)?.name || 'Sin Categoría';
            latestPostsTableBody.innerHTML += `
                <tr>
                    <td>${post.title}</td>
                    <td>${categoryName}</td>
                    <td>${new Date(post.created_at).toLocaleDateString('es-ES', { day: '2-digit', month: 'short', year: 'numeric' })}</td>
                    <td>
                        <button class="btn btn-warning btn-sm me-2" data-page="manage_posts" data-action="edit" data-id="${post.id}"><i class="fas fa-edit"></i></button>
                        <button class="btn btn-danger btn-sm" data-page="manage_posts" data-action="delete" data-id="${post.id}"><i class="fas fa-trash-alt"></i></button>
                    </td>
                </tr>
            `;
        });
    };

    // Renderizar Gestión de Publicaciones
    const renderManagePosts = (editPostId = null) => {
        let currentPost = null;
        if (editPostId) {
            currentPost = posts.find(p => p.id === editPostId);
        }

        adminContent.innerHTML = `
            <div class="d-flex justify-content-between flex-wrap flex-md-nowrap align-items-center pt-3 pb-2 mb-3 border-bottom">
                <h1 class="h2 text-primary">${currentPost ? 'Editar Publicación' : 'Añadir Nueva Publicación'}</h1>
                <div class="btn-toolbar mb-2 mb-md-0">
                    <button class="btn btn-primary" data-page="manage_posts"><i class="fas fa-list me-2"></i>Ver Todas las Publicaciones</button>
                </div>
            </div>

            <div id="alertContainer"></div>

            <div class="card mb-4 shadow-sm">
                <div class="card-header bg-secondary text-white">
                    Formulario de Publicación
                </div>
                <div class="card-body">
                    <form id="postForm">
                        ${currentPost ? `<input type="hidden" name="id" value="${currentPost.id}">` : ''}
                        <div class="mb-3">
                            <label for="title" class="form-label">Título de la Publicación</label>
                            <input type="text" class="form-control" id="title" name="title" value="${currentPost?.title || ''}" required>
                        </div>
                        <div class="mb-3">
                            <label for="content" class="form-label">Contenido de la Publicación</label>
                            <textarea class="form-control" id="content" name="content" rows="10" required>${currentPost?.content || ''}</textarea>
                        </div>
                        <div class="mb-3">
                            <label for="category_id" class="form-label">Categoría</label>
                            <select class="form-select" id="category_id" name="category_id" required>
                                <option value="">Selecciona una categoría</option>
                                ${categories.map(cat => `<option value="${cat.id}" ${currentPost?.category_id === cat.id ? 'selected' : ''}>${cat.name}</option>`).join('')}
                            </select>
                        </div>
                        <div class="mb-3">
                            <label for="image_url" class="form-label">URL de la Imagen (opcional)</label>
                            <input type="url" class="form-control" id="image_url" name="image_url" value="${currentPost?.image_url || ''}" placeholder="Ej: https://example.com/imagen.jpg">
                            <div class="form-text">Si no se proporciona una URL, se usará una imagen de placeholder.</div>
                        </div>
                        <div class="d-grid gap-2">
                            <button type="submit" class="btn btn-primary btn-lg">
                                ${currentPost ? '<i class="fas fa-save me-2"></i>Guardar Cambios' : '<i class="fas fa-plus-circle me-2"></i>Añadir Publicación'}
                            </button>
                        </div>
                    </form>
                </div>
            </div>

            <h2 class="h3 text-secondary mt-5 mb-3">Listado de Publicaciones</h2>
            <div class="table-responsive">
                <table class="table table-striped table-hover">
                    <thead>
                        <tr>
                            <th>ID</th>
                            <th>Título</th>
                            <th>Categoría</th>
                            <th>Fecha de Creación</th>
                            <th>Acciones</th>
                        </tr>
                    </thead>
                    <tbody id="postsTableBody">
                        ${posts.length === 0 ? `<tr><td colspan="5" class="text-center">No hay publicaciones disponibles.</td></tr>` : ''}
                    </tbody>
                </table>
            </div>
        `;

        const postsTableBody = document.getElementById('postsTableBody');
        posts.sort((a, b) => new Date(b.created_at) - new Date(a.created_at)).forEach(post => {
            const categoryName = categories.find(cat => cat.id === post.category_id)?.name || 'Sin Categoría';
            postsTableBody.innerHTML += `
                <tr>
                    <td>${post.id}</td>
                    <td>${post.title}</td>
                    <td>${categoryName}</td>
                    <td>${new Date(post.created_at).toLocaleDateString('es-ES', { day: '2-digit', month: 'short', year: 'numeric' })}</td>
                    <td>
                        <button class="btn btn-warning btn-sm me-2" data-page="manage_posts" data-action="edit" data-id="${post.id}"><i class="fas fa-edit"></i></button>
                        <button class="btn btn-danger btn-sm" data-page="manage_posts" data-action="delete" data-id="${post.id}"><i class="fas fa-trash-alt"></i></button>
                    </td>
                </tr>
            `;
        });

        // Manejar el envío del formulario de publicación
        document.getElementById('postForm').addEventListener('submit', (e) => {
            e.preventDefault();
            const formData = new FormData(e.target);
            const postData = Object.fromEntries(formData.entries());

            if (!postData.title || !postData.content || !postData.category_id) {
                showAlert('Por favor, rellena todos los campos obligatorios.', 'danger');
                return;
            }

            if (postData.id) { // Actualizar
                posts = posts.map(p => p.id === parseInt(postData.id) ? {
                    ...p,
                    title: postData.title,
                    content: postData.content,
                    category_id: parseInt(postData.category_id),
                    image_url: postData.image_url
                } : p);
                showAlert('Publicación actualizada correctamente.', 'success');
            } else { // Añadir
                const newId = posts.length > 0 ? Math.max(...posts.map(p => p.id)) + 1 : 1;
                const newPost = {
                    id: newId,
                    title: postData.title,
                    content: postData.content,
                    category_id: parseInt(postData.category_id),
                    image_url: postData.image_url,
                    created_at: new Date().toISOString()
                };
                posts.push(newPost);
                showAlert('Publicación añadida correctamente.', 'success');
            }
            saveToLocalStorage('blogPosts', posts);
            renderManagePosts(); // Volver a renderizar para ver los cambios
        });
    };

    // Renderizar Gestión de Categorías
    const renderManageCategories = (editCategoryId = null) => {
        let currentCategory = null;
        if (editCategoryId) {
            currentCategory = categories.find(c => c.id === editCategoryId);
        }

        adminContent.innerHTML = `
            <div class="d-flex justify-content-between flex-wrap flex-md-nowrap align-items-center pt-3 pb-2 mb-3 border-bottom">
                <h1 class="h2 text-primary">${currentCategory ? 'Editar Categoría' : 'Añadir Nueva Categoría'}</h1>
                <div class="btn-toolbar mb-2 mb-md-0">
                    <button class="btn btn-primary" data-page="manage_categories"><i class="fas fa-list me-2"></i>Ver Todas las Categorías</button>
                </div>
            </div>

            <div id="alertContainer"></div>

            <div class="card mb-4 shadow-sm">
                <div class="card-header bg-secondary text-white">
                    Formulario de Categoría
                </div>
                <div class="card-body">
                    <form id="categoryForm">
                        ${currentCategory ? `<input type="hidden" name="id" value="${currentCategory.id}">` : ''}
                        <div class="mb-3">
                            <label for="name" class="form-label">Nombre de la Categoría</label>
                            <input type="text" class="form-control" id="name" name="name" value="${currentCategory?.name || ''}" required>
                        </div>
                        <div class="d-grid gap-2">
                            <button type="submit" class="btn btn-primary btn-lg">
                                ${currentCategory ? '<i class="fas fa-save me-2"></i>Guardar Cambios' : '<i class="fas fa-plus-circle me-2"></i>Añadir Categoría'}
                            </button>
                        </div>
                    </form>
                </div>
            </div>

            <h2 class="h3 text-secondary mt-5 mb-3">Listado de Categorías</h2>
            <div class="table-responsive">
                <table class="table table-striped table-hover">
                    <thead>
                        <tr>
                            <th>ID</th>
                            <th>Nombre</th>
                            <th>Acciones</th>
                        </tr>
                    </thead>
                    <tbody id="categoriesTableBody">
                        ${categories.length === 0 ? `<tr><td colspan="3" class="text-center">No hay categorías disponibles.</td></tr>` : ''}
                    </tbody>
                </table>
            </div>
        `;

        const categoriesTableBody = document.getElementById('categoriesTableBody');
        categories.sort((a, b) => a.name.localeCompare(b.name)).forEach(category => {
            categoriesTableBody.innerHTML += `
                <tr>
                    <td>${category.id}</td>
                    <td>${category.name}</td>
                    <td>
                        <button class="btn btn-warning btn-sm me-2" data-page="manage_categories" data-action="edit" data-id="${category.id}"><i class="fas fa-edit"></i></button>
                        <button class="btn btn-danger btn-sm" data-page="manage_categories" data-action="delete" data-id="${category.id}"><i class="fas fa-trash-alt"></i></button>
                    </td>
                </tr>
            `;
        });

        // Manejar el envío del formulario de categoría
        document.getElementById('categoryForm').addEventListener('submit', (e) => {
            e.preventDefault();
            const formData = new FormData(e.target);
            const categoryData = Object.fromEntries(formData.entries());

            if (!categoryData.name) {
                showAlert('El nombre de la categoría no puede estar vacío.', 'danger');
                return;
            }

            const existingCategory = categories.find(c => c.name.toLowerCase() === categoryData.name.toLowerCase() && (!categoryData.id || c.id !== parseInt(categoryData.id)));
            if (existingCategory) {
                showAlert('Error: Ya existe una categoría con ese nombre.', 'danger');
                return;
            }

            if (categoryData.id) { // Actualizar
                categories = categories.map(c => c.id === parseInt(categoryData.id) ? {
                    ...c,
                    name: categoryData.name
                } : c);
                showAlert('Categoría actualizada correctamente.', 'success');
            } else { // Añadir
                const newId = categories.length > 0 ? Math.max(...categories.map(c => c.id)) + 1 : 1;
                const newCategory = {
                    id: newId,
                    name: categoryData.name
                };
                categories.push(newCategory);
                showAlert('Categoría añadida correctamente.', 'success');
            }
            saveToLocalStorage('blogCategories', categories);
            renderManageCategories(); // Volver a renderizar
        });
    };

    // Delegación de eventos para la navegación y acciones CRUD
    adminContent.addEventListener('click', (e) => {
        const target = e.target.closest('[data-page]');
        if (target) {
            e.preventDefault();
            const page = target.dataset.page;
            const action = target.dataset.action;
            const id = parseInt(target.dataset.id);

            if (page === 'manage_posts') {
                if (action === 'edit') {
                    renderManagePosts(id);
                } else if (action === 'delete') {
                    if (confirm('¿Estás seguro de que quieres eliminar esta publicación?')) {
                        posts = posts.filter(p => p.id !== id);
                        saveToLocalStorage('blogPosts', posts);
                        showAlert('Publicación eliminada correctamente.', 'success');
                        renderManagePosts();
                    }
                } else {
                    renderManagePosts(); // Ver todas o añadir
                }
            } else if (page === 'manage_categories') {
                if (action === 'edit') {
                    renderManageCategories(id);
                } else if (action === 'delete') {
                    const hasPosts = posts.some(p => p.category_id === id);
                    if (hasPosts) {
                        showAlert('No se puede eliminar la categoría porque tiene publicaciones asociadas. Elimina las publicaciones primero.', 'danger');
                    } else if (confirm('¿Estás seguro de que quieres eliminar esta categoría?')) {
                        categories = categories.filter(c => c.id !== id);
                        saveToLocalStorage('blogCategories', categories);
                        showAlert('Categoría eliminada correctamente.', 'success');
                        renderManageCategories();
                    }
                } else {
                    renderManageCategories(); // Ver todas o añadir
                }
            }
        }
    });

    sidebarNav.addEventListener('click', (e) => {
        const navLink = e.target.closest('.nav-link');
        if (navLink && navLink.dataset.page) {
            e.preventDefault();
            document.querySelectorAll('.admin-sidebar .nav-link').forEach(link => link.classList.remove('active'));
            navLink.classList.add('active');

            const page = navLink.dataset.page;
            if (page === 'dashboard') {
                renderDashboard();
            } else if (page === 'manage_posts') {
                renderManagePosts();
            } else if (page === 'manage_categories') {
                renderManageCategories();
            }
        }
    });

    // Cargar el dashboard al inicio
    renderDashboard();
});