export default $(function() {

    if (!$('.size3').text()) {
   $('.size3').hide();
} else {
    $(this).show();
}

    if (!$('.size2').text()) {
   $('.size2').hide();
} else {
    $(this).show();
}

    $('.best-item').on('mouseenter', function(ev) {
        $(ev.target).parents('.best-item').find('.dark-card').css({
            transform: 'scaleX(1.05) scaleY(1.04)'
        }).animate({
            'opacity': "0.8"
        }, 300);
        $(ev.target).parents('.best-item').find('.best-head, .best-about, .size-word, .price').css('color', 'white');


    });

    $('.best-item').on('mouseleave', function(ev) {
        $(ev.target).parents('.best-item').find('.dark-card').css({
            transform: 'scale(1)'
        }).animate({
            opacity: "0"
        }, 300);
        $(ev.target).parents('.best-item').find('.best-head, .best-about, .size-word, .price').css('color', '#000000');

    });

     $(document).on('touchstart', function(ev) {
        if ($(ev.target).parents('.best-item')) {
             $(ev.target).parents('.best-item').find('.dark-card').css({
            transform: 'scaleX(1.05) scaleY(1.04)'
        }).animate({
            'opacity': "0.8"
        }, 300);
        $(ev.target).parents('.best-item').find('.best-head, .best-about, .size-word, .price').css('color', 'white');
        }
        
    });


        $(document).on('touchend', function(ev) {
            if ($(ev.target).parents('.best-item')) {
            $(ev.target).parents('.best-item').find('.dark-card').css({
            transform: 'scale(1)'
        }).animate({
            opacity: "0"
        }, 300);
        $(ev.target).parents('.best-item').find('.best-head, .best-about, .size-word, .price').css('color', '#000000');
        }
        });



    $('.red-plashka').click(function() {
        if ($(window).width() < 992) {
            $('.hide-menu').animate({
                top: '0px'
            }, 300);
        }

    });

    $('.hide-menu').on('mouseleave', function() {
        $('.hide-menu').animate({
            top: '-80px'
        }, 300);

    });

    $('.car-arr-left').click(function() {
        $('.carousel-control-prev-icon').click();

    });

    $('.car-arr-right').click(function() {
        $('.carousel-control-next-icon').click();

    });

    $('.left-arr').click(function() {
        $('.bx-prev').click();

    });

    $('.right-arr').click(function() {
        $('.bx-next').click();

    });

     $('.go, .mini').on('click', function() {
        var url = $(this).attr('href');
        location.href=url;
    });



    var slider,
        oBxSettings = {
            pager: false,
            nextText: '',
            prevText: '',
            maxSlides: 4,
            moveSlides: 2,
            slideWidth: 420,
        };

    function init() {
        if (window.outerWidth <= 1200 && window.outerWidth > 992) {
            oBxSettings.maxSlides = 3;
            oBxSettings.moveSlides = 1;
            oBxSettings.slideWidth = 370;

        } else if (window.outerWidth <= 992 && window.outerWidth > 767) {
            oBxSettings.maxSlides = 2;
            oBxSettings.moveSlides = 1;
            oBxSettings.slideWidth = 363;

        } else if (window.outerWidth <= 767) {
            oBxSettings.maxSlides = 1;
            oBxSettings.moveSlides = 1;
            oBxSettings.slideWidth = 363;
        }
    }

    $(document).ready(function() {
        init();
        slider = $('.bxslider').bxSlider(oBxSettings);
    });

    $(window).resize(function() {
        if (window.outerWidth >= 1200) {
            slider.reloadSlider({
                pager: false,
                nextText: '',
                prevText: '',
                maxSlides: 4,
                moveSlides: 2,
                slideWidth: 420
            });
        } else if (window.outerWidth <= 1200 && window.outerWidth > 992) {
            init();
            slider.reloadSlider(oBxSettings);
        } else if (window.outerWidth <= 992 && window.outerWidth > 767) {
            init();
            slider.reloadSlider(oBxSettings);
        } else if (window.outerWidth <= 767) {
            init();
            slider.reloadSlider(oBxSettings);
        }
    });


$('.bxslider').swipe({
 swipe:function(event, direction, distance, duration, fingerCount, fingerData) {
 if (direction == 'up') {
    var qq = $('.bxslider').offset().top + distance / 2;
 $('body,html').animate({scrollTop: qq}, 500);
 }
  else if (direction == 'down') {
    var qq = $('.bxslider').offset().top - distance / 2;
    $('body,html').animate({scrollTop: qq}, 500);
  }
 }
});


});