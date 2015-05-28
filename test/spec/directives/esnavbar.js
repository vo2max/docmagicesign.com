'use strict';

describe('Directive: esNavbar', function () {

  // load the directive's module
  beforeEach(module('esignApp'));

  var element,
    scope;

  beforeEach(inject(function ($rootScope) {
    scope = $rootScope.$new();
  }));

  it('should make hidden element visible', inject(function ($compile) {
    element = angular.element('<es-navbar></es-navbar>');
    element = $compile(element)(scope);
    expect(element.text()).toBe('this is the esNavbar directive');
  }));
});
