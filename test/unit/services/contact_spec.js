'use strict';

describe('Unit: ContactsService', function () {

  let http, service;

  beforeEach(function () {
    // instantiate the app module
    angular.mock.module('app');

    // mock the service
    angular.mock.inject(($httpBackend, ContactsService) => {
      http = $httpBackend;
      service = ContactsService;
    });
  });

  var contacts = {
    username: 'simon norton',
    email: 'simon.norton@gmail.com',
    address: '10 ashbourne court',
    phone: 123456789
  };

  it('should exist', function () {
    expect(service).toBeDefined();
  });

  it('should retrieve data', function (done) {
    http.expect('GET', 'https://jsonplaceholder.typicode.com/users').respond(201, contacts);

    service.get().then((result) => {
      expect(result).toEqual(contacts);
    }).catch((error) => {
      expect(error).toBeUndefined();
    }).then(done);

    http.flush();
  });
});
