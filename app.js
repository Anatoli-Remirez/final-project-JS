//CONSTATNES BOTONES AÑADIR CARRITO Y CONTENEDOR DONDE SE PINTA EL CARRITO, DECLARACIÓN DEL ARRAY DE CARRITO
//SELECCIÖN BOTON COMPRAR Y BOTON CERRAR MODAL

const botonAgregar = document.querySelectorAll(".boton__carrito")
let = carrito = [];
const contenedorProductosCarrito = document.querySelector(".shopping-cart-items");
const botonComprar = document.querySelector(".comprarButton");
const botonCerrarModal = document.querySelector(".btn-secondary");

//EVENTO CLICK EN LOS BOTONES DEL CARRITO

botonAgregar.forEach(btn => {

    btn.addEventListener("click", añadirAlCarritoConClick)

});

//EVENTO CLICK EN BOTON COMPRAR PARA BORRAR TODO LO SELECCIONADO QUE YA FUE COMPRADO

botonComprar.addEventListener("click", comprarClickeado);

botonCerrarModal.addEventListener("click", refrescarPagina);

botonCerrarModal2.addEventListener("click", refrescarPagina);


// FUNCIÓN AÑADIR CON CLICK CON SELECTORES DE LOS DATOS Y LA DECLARACIÓN DEL OBJETO NUEVO ITEM

function añadirAlCarritoConClick(e){

    const boton = e.target;
    const item = boton.closest(".producto");
    const itemTitulo = item.querySelector(".producto-titulo").textContent;
    const itemPrecio = item.querySelector(".precio").textContent;
    const itemImagen = item.querySelector(".producto-imagen").src;
   
    const itemNuevo = {

        titulo: itemTitulo,
        precio: itemPrecio,
        imagen: itemImagen,
        cantidad: 1
    }

    añadirItemCarrito(itemNuevo);
    
}

//FUNCIÓN AÑADIR ITEMNUEVO RECORRIENDO EL ARRAY DEL CARRITO PARA QUE AL AUMENTAR LA CANTIDAD
//SE REFLEJE TANTO EN EL ARRAY COMO EN EL CONTENEDER DEL CARRITO

function añadirItemCarrito(itemNuevo){

    const inputElemento = contenedorProductosCarrito.getElementsByClassName("input__elemento")
   
    for (let i = 0; i < carrito.length; i++ ){

        if(carrito[i].titulo === itemNuevo.titulo){
            carrito[i].cantidad++;
            const inputValue = inputElemento[i];
            inputValue.value++;
            carritoTotales();
            return null;
        }
    }
    carrito.push(itemNuevo);
    pintarCarrito();
    carritoTotales();
   
}

//FUNCIÓN PINTAR CARRITO, MAPEAMOS EL ARRAY Y CREAMOS UN ROW DONDE PINTAMOS LOS DATOS SELECCIONADOS
//AÑADIMOS EVENTOS CLICK Y CHANGE PARA LOS BOTONES DE BORRAR Y CAMBIAR CANTIDAD

function pintarCarrito(){

    contenedorProductosCarrito.innerHTML = "";
    carrito.map(item => {

        const row = document.createElement("row");
        row.classList.add("shoppingCartItem");
        const contenido = `<div class="col-6">
        <div class="shopping-cart-item d-flex align-items-center h-100 border-bottom pb-2 pt-3">
            <img src=${item.imagen} class="shopping-cart-image">
            <h6 class="shopping-cart-item-title shoppingCartItemTitle text-truncate ml-3 mb-0">${item.titulo}
            </h6>
        </div>
        </div>
        <div class="col-2">
            <div class="shopping-cart-price d-flex align-items-center h-100 border-bottom pb-2 pt-3">
                <p class="item-price mb-0 shoppingCartItemPrice">${item.precio}</p>
            </div>
        </div>
        <div class="col-4">
            <div
                class="shopping-cart-quantity d-flex justify-content-between align-items-center h-100 border-bottom pb-2 pt-3">
                <input class="shopping-cart-quantity-input shoppingCartItemQuantity input__elemento" type="number"
                    value=${item.cantidad}>
                <button class="btn btn-danger buttonDelete" type="button">X</button>
            </div>
        </div>
        </div>`
    row.innerHTML = contenido;
    contenedorProductosCarrito.append(row);
    row.querySelector(".buttonDelete").addEventListener("click", borrarItem);
    row.querySelector(".input__elemento").addEventListener("change", sumaCantidad);
   
    });
    carritoTotales()

}

//FUNCIÓN PARA CALCULO TOTAL DEL CARRITO Y AÑADIMOS LA INFORMACIÓN AL LOCAL STORAGE PARA QUE 
// NO SE BORRA SI ACTUALIZAMOS LA PÁGINA

function carritoTotales(){

    let total = 0;
    const itemCarritoTotal = document.querySelector(".shoppingCartTotal");
    carrito.forEach((item) => {

        const precio = Number(item.precio.replace("€", " "));
        total = total + precio * item.cantidad
    });
    itemCarritoTotal.innerHTML = `${total} €`
    añadirLocalStorage();
}

// FUNCIÓN PARA BORRAR EL ITEM TANTO PINTADO EN EL CONTENEDOR COMO EN EL ARRAY

function borrarItem(event){

    const boton = event.target;
    const elemento = boton.closest(".shoppingCartItem");

    const Titulo = elemento.querySelector(".shoppingCartItemTitle").textContent;
    
    for (let i = 0; i < carrito.length; i++ ){

        if(carrito[i].titulo.trim() === Titulo.trim()){
            
            carrito.splice(i, 1);
        }
    }
    elemento.remove();
    carritoTotales();
    
}

// FUNCIÓN PARA CAMBIAR LA CANTIDAD Y RECALCULAR EL TOTAL DE LOS ITEMS

function sumaCantidad(e) {

    const sumaInput = e.target;
    const elemento = sumaInput.closest(".shoppingCartItem");
    const Titulo = elemento.querySelector(".shoppingCartItemTitle").textContent; 
    
    carrito.forEach(e => {

        if(e.titulo.trim() === Titulo.trim()){
            
            if (sumaInput < 1){
                sumaInput.value = 1
            }
            else {
                sumaInput.value
            }
            e.cantidad = sumaInput.value
            carritoTotales();
        }
    });

}

//FUNCIÓN PARA BORRAR TODO EL CONTENIDO DEL CARRITO Y ACTUALIZAR EL LOCAL STORAGE

function comprarClickeado() {

    contenedorProductosCarrito.remove();
    carrito = []
    añadirLocalStorage();
    const itemCarritoTotal = document.querySelector(".shoppingCartTotal");
    itemCarritoTotal.innerHTML = `${0} €`
    
}

//FUNCIÓN REFRESCAR PÁGINA

function refrescarPagina(){

    window.location.reload();
}

