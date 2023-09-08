// Función para cargar contenido dinámico
function cargarContenido(seccion) {
    var contenido = document.getElementById("contenido");

    // Lógica para cargar contenido según la sección
    switch (seccion) {
        case "inicio":
            contenido.innerHTML = "<h2>Bienvenido a la página educativa</h2><p>Explora nuestros recursos y aprende algo nuevo cada día.</p>";
            break;
        case "recursos":
            contenido.innerHTML = "<h2>Recursos Educativos</h2><p>Aquí encontrarás una lista de recursos educativos que te ayudarán en tu aprendizaje.</p><ul><li><a href='#'>Recurso 1</a></li><li><a href='#'>Recurso 2</a></li><li><a href='#'>Recurso 3</a></li></ul>";
            break;
        case "contacto":
            contenido.innerHTML = "<h2>Contacto</h2><p>¿Tienes preguntas o sugerencias? ¡No dudes en contactarnos!</p><p>Email: tu@email.com</p>";
            break;
        default:
            contenido.innerHTML = "<h2>Página no encontrada</h2><p>La página que buscas no existe.</p>";
    }
}

// Event listeners para la navegación
document.getElementById("inicio").addEventListener("click", function () {
    cargarContenido("inicio");
});

document.getElementById("recursos").addEventListener("click", function () {
    cargarContenido("recursos");
});

document.getElementById("contacto").addEventListener("click", function () {
    cargarContenido("contacto");
});

// Cargar la página de inicio por defecto
cargarContenido("inicio");
