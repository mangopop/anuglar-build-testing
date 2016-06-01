function ContactsService($http) {
  'ngInject';

  const service = {};

//ng-repeat will wait if we do it this way
  service.get = function () {
    return $http.get('http://localhost:3009/cards').then(
      function (response) {
        return response.data;
      }, function (err, status) {
        console.log(err, status)
      });
  }

  // service.get = function() {
  //   return new Promise((resolve, reject) => {
  //     $http.get('http://localhost:3009/0').success((data) => {
  //       resolve(data);
  //     }).error((err, status) => {
  //       reject(err, status);
  //     });
  //   });
  // };

  return service;

}

export default {
  name: 'ContactsService',
  fn: ContactsService
};
