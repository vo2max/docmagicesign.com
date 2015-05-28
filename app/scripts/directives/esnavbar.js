'use strict';

/**
 * @ngdoc directive
 * @name esignApp.directive:esNavbar
 * @description
 * # esNavbar
 */
angular.module('esignApp')
    .directive('esNavbar', function() {
        return {
            // Restrict it to be an attribute in this case
            restrict: 'A',
            // responsible for registering DOM listeners as well as updating the DOM
            link: function(scope, element) {
                $(element).navbar();
            }
        };
    });
