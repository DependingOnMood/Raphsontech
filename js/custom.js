/* jQuery Preloader
 -----------------------------------------------*/
$(window).load(function () {
    $('.preloader').fadeOut(1000); // set duration in brackets    
});


$(document).ready(function () {

    /* Hide mobile menu after clicking on a link
      -----------------------------------------------*/
    $('.navbar-collapse a').click(function () {
        $(".navbar-collapse").collapse('hide');
    });


    /* jQuery to collapse the navbar on scroll
      -----------------------------------------------*/
    $(window).scroll(function () {
        if ($(".navbar").offset().top > 50) {
            $(".navbar-fixed-top").addClass("top-nav-collapse");
        } else {
            $(".navbar-fixed-top").removeClass("top-nav-collapse");
        }
    });


    /* BxSlider
      -----------------------------------------------*/
    (function (window, $) {
        'use strict';

        // Cache document for fast access.
        var document = window.document;

        function mainSlider() {
            $('.bxslider').bxSlider({
                auto: true,
                pagerCustom: '#bx-pager',
                mode: 'fade',
                nextText: '',
                prevText: ''
            });
        }

        mainSlider();

        var $links = $(".bx-wrapper .bx-controls-direction a, #bx-pager a");
        $links.click(function () {
            $(".slider-caption").removeClass('animated fadeInLeft');
            $(".slider-caption").addClass('animated fadeInLeft');
        });

        $(".bx-controls").addClass('container');
        $(".bx-next").addClass('fa fa-angle-right');
        $(".bx-prev").addClass('fa fa-angle-left');


    })(window, jQuery);


    /* Owl Carousel
     -----------------------------------------------*/
    $(document).ready(function () {
        $("#owl-work").owlCarousel({
            autoPlay: 2000,
            items: 3,
            itemsDesktop: [1199, 3],
            itemsDesktopSmall: [979, 3],
        });
    });

    $(document).ready(function () {
        $("#owl-partner").owlCarousel({
            autoPlay: 2000,
            items: 7,
            itemsDesktop: [1199, 7],
            itemsDesktopSmall: [979, 7],
        });
    });


    /* Parallax section
      -----------------------------------------------*/
    function initParallax() {
        $('#work').parallax("100%", 0.2);
        $('#about').parallax("100%", 0.2);
        $('#team').parallax("100%", 0.2);
        $('#product').parallax("100%", 0.1);
        $('#case').parallax("100%", 0.2);
        $('#contact').parallax("100%", 0.2);
    }

    initParallax();


    /* Nivo lightbox
      -----------------------------------------------*/
    $('#product .col-md-4 a').nivoLightbox({
        effect: 'fadeScale',
    });


    /* wow
    -------------------------------*/
    new WOW({mobile: false}).init();


    /* why choose us panel control
    -------------------------------*/
    $(function () {
        $('#collapseOne').collapse('show')
    });
    $(function () {
        $('#collapseTwo').collapse('show')
    });
    $(function () {
        $('#collapseThree').collapse('show')
    });

});


