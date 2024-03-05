
        // Función para agregar un producto al carrito
        function agregarAlCarrito(nombreProducto) {
            var listaProductos = document.getElementById('lista-productos');
            var productosEnCarrito = listaProductos.getElementsByTagName('p');

            // Verificar si el producto ya está en el carrito
            var productoExistente = Array.from(productosEnCarrito).find(p => p.textContent.includes(nombreProducto));

            if (productoExistente) {
                // Si el producto ya está en el carrito, aumentar su cantidad
                var cantidadActual = parseInt(productoExistente.dataset.cantidad);
                productoExistente.textContent = nombreProducto + ' x' + (cantidadActual + 1);
                productoExistente.dataset.cantidad = cantidadActual + 1;
            } else {
                // Si el producto no está en el carrito, agregarlo
                var nuevoProducto = document.createElement('p');
                nuevoProducto.textContent = nombreProducto + ' x1';
                nuevoProducto.dataset.cantidad = 1;
                listaProductos.appendChild(nuevoProducto);
            }
        }

        // Mostrar u ocultar el carrito al hacer clic en "Carrito"
        document.getElementById('abrir-carrito').addEventListener('click', function() {
            var carrito = document.getElementById('carrito');
            carrito.style.display = 'block';
        });

        // Cerrar el carrito al hacer clic en el botón de cerrar
        document.getElementById('cerrar-carrito').addEventListener('click', function() {
            var carrito = document.getElementById('carrito');
            carrito.style.display = 'none';
        });
