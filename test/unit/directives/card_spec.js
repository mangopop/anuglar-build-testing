/* global module */

'use strict';

describe('Unit: CardDirective', function() {

  let element;
  let scope;

  beforeEach(function() {
    // spyOn(window, 'alert');
    angular.mock.module('app');

    angular.mock.inject(($compile, $rootScope) => {
      scope = $rootScope;
      //TODO how do assign VM? do i need to?
      
      // scope.title = 'A sample title';
      // scope.message = 'A sample message';
      
      scope.contacts = [{
        username: 'simon norton',
        email: 'simon.norton@gmail.com',
        address: '10 ashbourne court',
        phone: 123456789
      }];
      
      // scope.contacts = 'test';
      
      //what is anuglar.element used for?
      element = angular.element(
        '<div card-directive contacts="contacts">Sample Directive</div>'
      );

      // Compile a piece of HTML containing the directive
      $compile(element)(scope);
      // fire all the watches, (so the scope expression will be evaluated?)
      scope.$digest();
    });
  });
  //<span class="card-title">{{contact.firstName}} {{contact.lastName}}</span>
  it('should bind contacts to its template', function() {
    expect(element.find('span').text()).toBe(scope.contacts[0].username);
  });
  //

  // it('should bind itself to the element', function() {
  //   element.triggerHandler('click');
  //   expect(window.alert).toHaveBeenCalledWith(`Element clicked: ${scope.message}`);
  // });

  // it('should update its bindings', function() {
  //   scope.message = 'A new sample message';
  //   scope.$digest();
  //   element.triggerHandler('click');
  //   expect(window.alert).toHaveBeenCalledWith(`Element clicked: ${scope.message}`);
  // });

  // it('should bind a title property to its template', function() {
  //   expect(element.find('h1').text()).toBe(`Directive title: ${scope.title}`);
  // });

});
