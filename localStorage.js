function añadirLocalStorage(){
    localStorage.setItem("carrito", JSON.stringify(carrito));
}

window.onload = function() {

    const storage = JSON.parse(localStorage.getItem("carrito"));
    if (storage) {
        carrito = storage;
        pintarCarrito();
    }
}

