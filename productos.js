// CREAMOS EL CONTSTRUCTOR DE LOS PRODUCTOS

class Camiseta{

    constructor(nombre, color, precio, imagen){

        this.nombre = nombre;
        this.color = color;
        this.precio = precio;
        this.imagen = imagen;
    }
    toString(){
        return `Nombre: ${this.nombre} \n\nColor: ${this.color} \nPrecio ${this.precio} \n Imagen: ${this.imagen}`;
    }
}

// CREAMOS LOS PRODUCTOS OBJETO

let camiseta1 = new Camiseta ("Skate", "Blanco", 12, "img/3copia.jpg");
let camiseta2 = new Camiseta ("Juegos", "Blanco", 15, "img/4copia.jpg" );
let camiseta3 = new Camiseta ("Oso", "Blanco", 18, "img/9copia.jpg");
let camiseta4 = new Camiseta ("Rueda", "Blanco", 10, "img/11copia.jpg");
let camiseta5 = new Camiseta ("Labios", "Blanco", 11, "img/10copia.jpg");
let camiseta6 = new Camiseta ("Cocodrilo", "Blanco", 12, "img/8copia.jpg");


// CREAMOS EL ARRAY DE OBJETOS

let camisetas = [camiseta1, camiseta2, camiseta3, camiseta4, camiseta5, camiseta6];

// CREAMOS LA FUNCIÖN CREAR CARDS PARA PINTAR LOS OBJETOS CON EL DOM

const crearCards = (prod) => {
    const container = document.querySelector("#productos");
  
    prod.forEach((item) => {
      const divContainer = document.createElement("div");
      container.appendChild(divContainer);
        
      divContainer.innerHTML = 
      `<div class="producto" value="1">
    <h3 class="producto-titulo">${item.nombre}</h3>
    <img class="producto-imagen" src=${item.imagen}>

    <div class="producto-detalles">

        <h4 class="precio">${item.precio} €</h4>
        <input class="boton__carrito" type="button" value="Añadir al carrito"/>
    </div>
    <div class="descripcionBoton"></div>`;
    });
  };

//LLAMAMOS LA FUNCION

crearCards(camisetas);