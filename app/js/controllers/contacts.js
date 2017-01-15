function ContactsCtrl(ContactsService) {
  'ngInject';
  // ViewModel
  const vm = this;
  vm.contacts = [];

  vm.hero = {};
  vm.hero.name = 'Simon';

  ContactsService.get().then(
    function (data) {
      console.log(data);
      vm.contacts = data;
    }, function (err, status) {
      console.log(err, status);
    });

  vm.title = 'Contacts!';

}

export default {
  name: 'ContactsCtrl',
  fn: ContactsCtrl
};
