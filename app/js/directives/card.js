function CardDirective() {

  return {
    restrict: 'EA',
    templateUrl: 'directives/card.html',
    scope: {
      title: '@',
      message: '@clickMessage'
    },
    link: (scope, element) => {
      element.on('click', () => {
        window.alert('Element clicked: ' + scope.message);
      });
    }
  };
}

export default {
  name: 'cardDirective',
  fn: CardDirective
};
