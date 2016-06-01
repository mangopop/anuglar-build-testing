function CardDirective() {

  return {
    restrict: 'EA',
    templateUrl: 'directives/card.html',
    scope: {
      contacts: '='
    }
  };
}

export default {
  name: 'cardDirective',
  fn: CardDirective
};
