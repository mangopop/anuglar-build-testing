import angular from 'angular';

//is this browserify, why pass in bulk-require?
const bulk = require('bulk-require');
const directivesModule = angular.module('app.directives', []);
//find all files using special search function
const directives = bulk(__dirname, ['./**/!(*index|*.spec).js']);

function declare(directiveMap) {
  //loops over array that is returned whose elements 
  //are strings corresponding to the enumerable properties found directly upon object.
  Object.keys(directiveMap).forEach((key) => {
    //each export is a function export, when looping through assign the function export
    //to an item using the directiveMaps key
    let item = directiveMap[key];

    if (!item) {
      return;
    }

    //fn is name of object key and should be function
    if (item.fn &&  typeof item.fn === 'function') {
      //this should be familiar to attaching directive to module.
      //these are all passed into the main module.
      directivesModule.directive(item.name, item.fn);
    } else {
      declare(item);
    }
  });
}

//pass in exports from files? is this something that requires bulk function enables?
declare(directives);

export default directivesModule;
