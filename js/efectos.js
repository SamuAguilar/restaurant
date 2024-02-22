$(document).ready(() => {
    //Efecto Menu
    $('.menu a').each(function(index, elemento){
        $(this).css({
            'top': '-200px'
        })
        $(this).animate({
            top: '0'
        }, 2000 + (index * 500))
    })

    //Efecto header
    if($(window). width() > 800){
        $('header .textos').css({
            opacity: 0,
            marginTop: 0
        });
        $('header .textos').animate({
            opacity: 1,
            marginTop: '-52px'
        }, 1500);
    }

    //Scroll Elementos Menu
    const acercade = $('#main__acerca').offset().top;
    const menu = $('.main__titulo').offset().top;
    const galeria = $('#galeria').offset().top;
    const ubicacion = $('#ubicacion').offset().top;

    $('#btn__acerca').on('click', (e) => {
        e.preventDefault();
        $('html, body').animate({
            scrollTop: acercade - 100
        }, 500)
        
    });

    $('#btn__menu').on('click', (e) => {
        e.preventDefault();
        $('html, body').animate({
            scrollTop: menu
        }, 500)
    });

    $('#btn__galeria').on('click', (e) => {
        e.preventDefault();
        $('html, body').animate({
            scrollTop: galeria - 30
        }, 500)
    });

    $('#btn__ubicacion').on('click', (e) => {
        e.preventDefault();
        $('html, body').animate({
            scrollTop: ubicacion
        }, 500)
    });






})