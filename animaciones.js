$(() => {
     
    //ANIMACIONES Y MANIPULACIÓN DEL DOM CON JQUERY

    $(".alert").hide();
    $(".titulo").hide();                     
    $(".titulo").fadeIn(3000, function(){

        $(".titulo").css({
            "color": "red",
            "font-size": "45px",
        })
    });

// OCULTAMOS LA SECCIÓN PRODUCTOS Y CREAMOS UN BOTÓN PARA HACERLA APARECER, MODIFICAMOS CSS
    
    $("#productos").hide();
    $(".mostrar").append('<button class="mostrarProductos">Mostrar Productos</button>');
    $(".mostrar").css({
        "text-align": "center",  
    })
    $(".mostrarProductos").css({
        "color": "white",
        "background-color": "black",
        "padding": "10px",
        "margin-top": "10px",
    })

// AÑADIMOS EVENTO PARA HACER AAPRECER LA SECCIÓN PRODUCTOS CON UN CALLBACK PARA DESAPARECER EL BOTON
    
    $(".mostrarProductos").on("click", function(){

            $("#productos").fadeIn("slow", function(){
    
                $(".mostrarProductos").slideUp();
                $(".clickAqui").hide();
                $(".imagenFlecha").hide();
            });
           
    });

// EVENTO SOBRE EL BOTON AÑADIR CARRITO PARA QUE APAREZCA EL ALERT DE AÑADISTE PRODUCTO

    $(".boton__carrito").on("click", function(){

        $('html, body').animate({
            scrollTop: $(".shopping-cart").offset().top
        }, 1000);
        
    })

// EVENTO SOBRE EL BOTON AÑADIR CARRITO PARA QUE APAREZCA EL ALERT DE AÑADISTE PRODUCTO

    $(".boton__carrito").on("click", function(){
        $(".alert-primary").fadeIn("slow", function (){
            $(".alert-primary").fadeOut(1100);
        });
    })   
});

