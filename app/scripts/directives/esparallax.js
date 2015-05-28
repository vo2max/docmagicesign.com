'use strict';

/**
 * @ngdoc directive
 * @name esignApp.directive:esParallax
 * @description
 * # esParallax
 */
angular.module('esignApp')
    .directive('esParallax', function() {
        return {
            // Restrict it to be an attribute in this case
            restrict: 'A',
            // responsible for registering DOM listeners as well as updating the DOM
            link: function(scope, element, attrs) {
                $(element).parallax(scope.$eval(attrs.esParallax));
            }
        };
    });
