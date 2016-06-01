function CardDirective() {

  return {
    restrict: 'EA',
    templateUrl: 'directives/card.html',
    scope: {
      title: '@'
    }
  };
}

export default {
  name: 'cardDirective',
  fn: CardDirective
};
