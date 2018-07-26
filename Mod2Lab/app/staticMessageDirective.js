angular.module('app').directive('staticMessageDirective', function () {
    return { 
        restrict: 'EA',
        template: '<div><h4> This is the message form the directive.</h4></div>'
    }
})