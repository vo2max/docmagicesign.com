(function($) {

    'use strict';

    $.fn.navbar = function() {

        var blueLight = '#428bca'; // 'floating' navbar background
        var blueDark = '#2e6da4';
        var white = '#fff'; // 'floating' navbar background

        var scrollToggleHeight = 150; // pixel height to being animation
        //var logoLgMargin = 0, 
        var logoSmMargin = '-12px';

        var logoElement = $('.navbar-brand > img');
        var toggleAnimate = true;

        var logo = new Image();
        logo.src = logoElement.attr('src');

        window.addEventListener('scroll', function() {
            if (window.scrollY > scrollToggleHeight && toggleAnimate) {
                logoElement.animate({ width: logo.width * 0.5, marginTop: logoSmMargin }, 500);
                $('.navbar').animate({ backgroundColor:blueLight, color:white }, 1000).addClass('dark');
                toggleAnimate = !toggleAnimate;
            } else if (window.scrollY <= scrollToggleHeight && toggleAnimate === false) {
                //logoElement.animate({ width: logo.width }, 500);
                $('.navbar').animate({ backgroundColor:white, color:blueDark }, 1000).removeClass('dark');
                toggleAnimate = !toggleAnimate;
            }
        }, false);

    };

}(jQuery));
