//old version
const exampleComponent = {
    template: '<span>Name: {{$ctrl.hero.name}}</span>',
    controller: function () {
    },
    bindings: {
        hero: '='
    }
}

export default {
    name: 'exampleComponent',
    obj: exampleComponent
};
