'use strict';

describe('Directive: esFadeIn', function () {

  // load the directive's module
  beforeEach(module('esignApp'));

  var element,
    scope;

  beforeEach(inject(function ($rootScope) {
    scope = $rootScope.$new();
  }));

  it('should make hidden element visible', inject(function ($compile) {
    element = angular.element('<es-fade-in></es-fade-in>');
    element = $compile(element)(scope);
    expect(element.text()).toBe('this is the esFadeIn directive');
  }));
});
