function ExampleCtrl() {

  
  // ViewModel
  const vm = this;
  
  // vm.contactData = ExampleService.get
  
  // console.log(vm.contactData);
  // console.log('test');

  vm.title = 'AngularJS, Gulp, and Browserify! Written with keyboards and love!';
  vm.number = 1234;

}

export default {
  name: 'ExampleCtrl',
  fn: ExampleCtrl
};
