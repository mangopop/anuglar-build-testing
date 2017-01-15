'use strict';

describe('Component: myComponent', function () {

    var $componentController;
    beforeEach(function () {
        // instantiate the app module
        angular.mock.module('app');

        // angular.mock.inject(($controller) => {
        //     ctrl = $controller('ExampleCtrl');
        // });
    });
    // angular.mock.module('app');
    // beforeEach(module('app'));

    // document method ---------------------------------- //
    beforeEach(inject(function (_$componentController_) {
        $componentController = _$componentController_;
    }));

    it('should expose a `hero` object', function () {
        // Here we are passing actual bindings to the component
        var bindings = { hero: { name: 'Wolverine' } };
        var ctrl = $componentController('exampleComponent', null, bindings);

        expect(ctrl.hero).toBeDefined();
        expect(ctrl.hero.name).toBe('Wolverine');
    });

    // alternative method ----------------------------- //
    //   beforeEach(module('componentsModule'));

    //   describe('with $compile', function () {

    //     var element;
    //     var scope;
    //     beforeEach(inject(function($rootScope, $compile){
    //       scope = $rootScope.$new();
    //       element = angular.element('<example-component my-binding="{{outside}}"></example-component>');
    //       element = $compile(element)(scope);
    //       scope.outside = '1.5';
    //       scope.$apply();
    //     }));

    //     it('should render the text', function() {
    //       var h1 = element.find('h1');
    //       expect(h1.text()).toBe('Unit Testing AngularJS 1.5');
    //     });

    //     it('should update the rendered text when the parent scope changes', function() {
    //       scope.outside = '2.0';
    //       scope.$apply();
    //       var h1 = element.find('h1');
    //       expect(h1.text()).toBe('Unit Testing AngularJS 2.0');
    //     });

    //     describe('Controller: myComponent', function () {

    //       var controller;
    //       beforeEach(function() {
    //         controller = element.controller('myComponent');
    //       });

    //       it('should expose my title', function() {
    //         expect(controller.myTitle).toBeDefined();
    //         expect(controller.myTitle).toBe('Unit Testing AngularJS');
    //       });

    //       it('should have my binding bound', function() {
    //         expect(controller.myBinding).toBeDefined();
    //         expect(controller.myBinding).toBe('1.5');
    //       });

    //     });

    //   });

    //   describe('with $componentController', function () {

    //     var controller;
    //     var scope;
    //     beforeEach(inject(function($rootScope, $componentController){
    //       scope = $rootScope.$new();
    //       controller = $componentController('myComponent', {$scope: scope}, {myBinding: '1.5'});
    //     }));

    //     it('should be attached to the scope', function() {
    //       expect(scope.$ctrl).toBe(controller);
    //     });

    //     it('should expose my title', function() {
    //       expect(controller.myTitle).toBeDefined();
    //       expect(controller.myTitle).toBe('Unit Testing AngularJS');
    //     });

    //     it('should have my binding bound', function() {
    //       expect(controller.myBinding).toBeDefined();
    //       expect(controller.myBinding).toBe('1.5');
    //     });

    //   });

});