$(document).ready(function(){
    $('.services__carousel').slick({
        slidesToShow: 3,
        slidesToScroll: 1,
        prevArrow: '<button type="button" class="slick-prev"><img src="icons/services/services-left.png"></button>',
        nextArrow: '<button type="button" class="slick-next"><img src="icons/services/services-right.png"></button>',
    });


    // Modal

    $('[data-modal=schedule]').on('click', function() {
            $('.overlay, #schedule').fadeIn('slow');
        });
        $('.modal__close').on('click', function() {
            $('.overlay, #schedule').fadeOut('slow');
        });

    // Smooth scroll and pageup 

        $(window).scroll(function() {
            if ($(this).scrollTop() > 1600) {
                $('.pageup').fadeIn();
            } else {
                $('.pageup').fadeOut();
            }
        });

        $("a[href=#up]").click(function(){
            const _href = $(this).attr("href");
            $("html, body").animate({scrollTop: $(_href).offset().top+"px"});
            return false;
        });

        new WOW().init();
});