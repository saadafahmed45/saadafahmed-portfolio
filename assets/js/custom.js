$(document).ready(function() {
    new WOW().init();

    AOS.init({
        duration: 2000,
    });

    $('.header-main').ripples({
        dropRadius: 20,
        perturbance: 0.03,
    });




});