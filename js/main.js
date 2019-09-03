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
    });

    $(".iconSlider2").click(function () {
        $(".iconSlider2").removeClass("carouselSinFondo");
        $(".iconSlider1").addClass("carouselSinFondo");
        $(".iconSlider3").addClass("carouselSinFondo");
        $(".iconSlider4").addClass("carouselSinFondo");

        //FUNCIONAMIENTO PARA EL CAMBIO DE LAS IMAGENES PRIMER SLIDER
        $(".slider2a").removeClass("d-none");
        $(".slider2b").addClass("d-none");

        $(".slider1a").addClass("d-none");
        $(".slider1b").removeClass("d-none");

        $(".slider3b").addClass("d-none");
        $(".slider3a").removeClass("d-none");
    });

    $(".iconSlider3").click(function () {
        $(".iconSlider3").removeClass("carouselSinFondo");
        $(".iconSlider2").addClass("carouselSinFondo");
        $(".iconSlider1").addClass("carouselSinFondo");
        $(".iconSlider4").addClass("carouselSinFondo");

        //FUNCIONAMIENTO PARA EL CAMBIO DE LAS IMAGENES PRIMER SLIDER
        $(".slider2a").addClass("d-none");
        $(".slider2b").removeClass("d-none");

        $(".slider1b").addClass("d-none");
        $(".slider1a").removeClass("d-none");

        $(".slider3b").addClass("d-none");
        $(".slider3a").removeClass("d-none");
        
    });

    $(".iconSlider4").click(function () {
        $(".iconSlider4").removeClass("carouselSinFondo");
        $(".iconSlider2").addClass("carouselSinFondo");
        $(".iconSlider3").addClass("carouselSinFondo");
        $(".iconSlider1").addClass("carouselSinFondo");
    });

    $(".dropdown-menu").css('margin-top', 0);
    $(".dropdown").mouseover(function () {
        $(this).addClass('show').attr('aria-expanded', "true");
        $(this).find('.dropdown-menu').addClass('show');
    })


});