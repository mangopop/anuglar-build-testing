function OnConfig($stateProvider, $locationProvider, $urlRouterProvider) {
  'ngInject';

  $locationProvider.html5Mode(true);

  $stateProvider
  .state('Home', {
    url: '/',
    controller: 'ContactsCtrl as vm',
    templateUrl: 'home.html',
    title: 'Contacts'
  });
  //   .state('Example', {
  //   url: '/example',
  //   controller: 'ExampleCtrl as vm',
  //   templateUrl: 'home.html',
  //   title: 'Contacts'
  // });
  

  $urlRouterProvider.otherwise('/');

}

export default OnConfig;
