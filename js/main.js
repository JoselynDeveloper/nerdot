$(document).ready(function () {

    $(".iconSlider1").click(function () {
        $(".iconSlider1").removeClass("carouselSinFondo");
        $(".iconSlider2").addClass("carouselSinFondo");
        $(".iconSlider3").addClass("carouselSinFondo");
        $(".iconSlider4").addClass("carouselSinFondo");

        //FUNCIONAMIENTO PARA EL CAMBIO DE LAS IMAGENES PRIMER SLIDER
        $(".slider2a").addClass("d-none");
        $(".slider2b").removeClass("d-none");

        $(".slider1a").addClass("d-none");
        $(".slider1b").removeClass("d-none");

        $(".slider3a").addClass("d-none");
        $(".slider3b").removeClass("d-none");

        // QUITAR EL MOUSE ROJO
        $(".mouserojo").addClass("d-none");
    });

    $(".iconSlider2").click(function () {
        $(".iconSlider2").removeClass("carouselSinFondo");
        $(".iconSlider1").addClass("carouselSinFondo");
        $(".iconSlider3").addClass("carouselSinFondo");
        $(".iconSlider4").addClass("carouselSinFondo");

        //FUNCIONAMIENTO PARA EL CAMBIO DE LAS IMAGENES SEGUNDO SLIDER
        $(".slider2a").removeClass("d-none");
        $(".slider2b").addClass("d-none");

        $(".slider1a").addClass("d-none");
        $(".slider1b").removeClass("d-none");

        $(".slider3b").addClass("d-none");
        $(".slider3a").removeClass("d-none");

        // PONER EL MOUSE ROJO
        $(".mouserojo").removeClass("d-none");
    });

    $(".iconSlider3").click(function () {
        $(".iconSlider3").removeClass("carouselSinFondo");
        $(".iconSlider2").addClass("carouselSinFondo");
        $(".iconSlider1").addClass("carouselSinFondo");
        $(".iconSlider4").addClass("carouselSinFondo");

        //FUNCIONAMIENTO PARA EL CAMBIO DE LAS IMAGENES TERCER SLIDER
        $(".slider2a").addClass("d-none");
        $(".slider2b").removeClass("d-none");

        $(".slider1b").addClass("d-none");
        $(".slider1a").removeClass("d-none");

        $(".slider3b").addClass("d-none");
        $(".slider3a").removeClass("d-none");

        // QUITAR EL MOUSE ROJO
        $(".mouserojo").addClass("d-none");
    });


    $(".dropdown-menu").css('margin-top', 0);
    $(".dropdown").mouseover(function () {
        $(this).addClass('show').attr('aria-expanded', "true");
        $(this).find('.dropdown-menu').show();
    })

    $(".dropdown-menu").mouseleave(function() {;
        $(this).hide(1000);
    });


});