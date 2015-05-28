(function($) {

    'use strict';
 
    $.fn.parallax = function(options) {

        var windowHeight = $(window).height();
 
        // default config
        var config = $.extend({
			align: 'center',
            speed: 2.5 // > 1.0
        }, options);
 
        // iterate through the DOM
        return this.each(function() {
			
			var $this = $(this);
 
        	// define scroll handler
        	$(document).scroll(function() {
 
    		    var scrollTop = $(window).scrollTop();
                var offset = $this.offset().top;
            	var height = $this.outerHeight();
				
				var xyPos;

				// postition relative to the viewport
			    if (offset + height <= scrollTop || offset >= scrollTop + windowHeight) {
				    return;
			    }

				var yPos = (scrollTop / config.speed); 
                xyPos = config.align + ' ' + yPos + 'px';
				
				$this.css('background-position', xyPos);
                
        	});
        });
    };
}(jQuery));

// $('.banner').parallax({
// 	speed:	1.25
// });

// $('.client').parallax({
// 	align: 'right',
// 	speed:	2.5
// });