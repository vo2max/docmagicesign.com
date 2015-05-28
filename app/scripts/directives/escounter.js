'use strict';

/**
 * @ngdoc directive
 * @name esignApp.directive:esCounter
 * @description
 * # esCounter
 */
angular.module('esignApp')
    .directive('esCounter', function() {
        return {
            // Restrict it to be an attribute in this case
            restrict: 'A',
            // responsible for registering DOM listeners as well as updating the DOM
            link: function(scope, element, attrs) {
                $(element).counterUp(scope.$eval(attrs.esCounter));
            }
        };
    });
