const productos = [
    { id: 1, nombre: "Teclado", precio: 25 },
    { id: 2, nombre: "Mouse", precio: 15 },
    { id: 3, nombre: "Monitor", precio: 180 }
];

const selectorProducto = document.getElementById("producto");

productos.forEach((producto) => {
    const opcion = document.createElement("option");
    opcion.value = producto.id;
    opcion.textContent = `${producto.nombre} - $${producto.precio}`;
    selectorProducto.appendChild(opcion);
});