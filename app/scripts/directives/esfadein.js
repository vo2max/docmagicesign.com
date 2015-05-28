'use strict';

/**
 * @ngdoc directive
 * @name esignApp.directive:esFadeIn
 * @description
 * # esFadeIn
 */
angular.module('esignApp')
    .directive('esFadeIn', function() {
        return {
            // Restrict it to be an attribute in this case
            restrict: 'A',
            // responsible for registering DOM listeners as well as updating the DOM
            link: function(scope, element) {
                $(element).waypoint(function() {
                	$(element).css('visibility', 'visible')
    					.animate({opacity: 1.0, top: '-=12px'}, 1500);
                }, { offset: '100%', triggerOnce: true });
            }
        };
    });
