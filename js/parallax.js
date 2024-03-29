$(document).ready(() => {
    $(window).scroll(() => {
        const windowWidth = $(window).width();

        if(windowWidth > 800){
            const scroll = $(window).scrollTop();

            $('header .textos').css({
                'transform': 'translate(0px,' + scroll / 2 + '%)'
            });

            $('.main__acerca article').css({
                'transform': 'translate(0px, -' + scroll / 4 + '%)'
            });
        }
    });

    $(window).resize(() => {
        const windowWidth = $(window).width();
        if(windowWidth < 800){
            $('.main__acerca article').css({
                'transform': 'translate(0px, 0px)'
            });
        }
    })
});