$(document).ready(function () {

    $(".iconSlider1").click(function () {
        $(".iconSlider1").removeClass("carouselSinFondo");
        $(".iconSlider2").addClass("carouselSinFondo");
        $(".iconSlider3").addClass("carouselSinFondo");
        $(".iconSlider4").addClass("carouselSinFondo");
    });

    $(".iconSlider2").click(function () {
        $(".iconSlider2").removeClass("carouselSinFondo");
        $(".iconSlider1").addClass("carouselSinFondo");
        $(".iconSlider3").addClass("carouselSinFondo");
        $(".iconSlider4").addClass("carouselSinFondo");
    });

    $(".iconSlider3").click(function () {
        $(".iconSlider3").removeClass("carouselSinFondo");
        $(".iconSlider2").addClass("carouselSinFondo");
        $(".iconSlider1").addClass("carouselSinFondo");
        $(".iconSlider4").addClass("carouselSinFondo");
    });

    $(".iconSlider4").click(function () {
        $(".iconSlider4").removeClass("carouselSinFondo");
        $(".iconSlider2").addClass("carouselSinFondo");
        $(".iconSlider3").addClass("carouselSinFondo");
        $(".iconSlider1").addClass("carouselSinFondo");
    });


});