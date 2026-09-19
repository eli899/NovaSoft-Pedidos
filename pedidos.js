const formulario = document.getElementById("formulario-pedido");
const listaPedidos = document.getElementById("lista-pedidos");

formulario.addEventListener("submit", (evento) => {
    evento.preventDefault();

    const cliente = document.getElementById("cliente").value;
    const productoId = Number(document.getElementById("producto").value);
    const cantidad = Number(document.getElementById("cantidad").value);

    const productoSeleccionado = productos.find(
        (producto) => producto.id === productoId
    );

    const total = productoSeleccionado.precio * cantidad;

    const pedido = document.createElement("li");
    pedido.textContent =
        `${cliente}: ${cantidad} ${productoSeleccionado.nombre} - Total: $${total}`;

    listaPedidos.appendChild(pedido);
    formulario.reset();
});