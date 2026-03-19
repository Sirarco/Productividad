/**
 * app.js
 * Controlador Principal - Single Page Application (SPA)
 */

document.addEventListener('DOMContentLoaded', () => {
    // 1. Inicializar Navegación SPA
    initNavigation();
});

/**
 * Maneja el cambio de vistas (Calendario, Matriz, Kanban)
 */
function initNavigation() {
    const navButtons = document.querySelectorAll('.nav-btn');
    const views = document.querySelectorAll('.view-section');

    navButtons.forEach(button => {
        button.addEventListener('click', (e) => {
            // Remover clase 'active' de todos los botones
            navButtons.forEach(btn => btn.classList.remove('active'));
            // Ocultar todas las vistas
            views.forEach(view => view.classList.add('hidden'));

            // Activar botón clickeado
            const clickedBtn = e.target;
            clickedBtn.classList.add('active');

            // Mostrar la vista correspondiente
            const targetId = clickedBtn.getAttribute('data-target');
            document.getElementById(targetId).classList.remove('hidden');
        });
    });
}