function mostrarDescripcion(event) {
    // Obtener las coordenadas del mouse
    var x = event.clientX;
    var y = event.clientY;

    // Obtener la descripción del producto
    var descripcion = document.querySelector('.descripcion');

    // Ajustar la posición de la descripción
    descripcion.style.top = y + 'px';
    descripcion.style.left = x + 'px';
}

function ocultarDescripcion() {
    // Ocultar la descripción cuando se retira el mouse
    var descripcion = document.querySelector('.descripcion');
    descripcion.style.opacity = 0;
}