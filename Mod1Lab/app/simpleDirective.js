angular.module('app').directive('simpleDirective', function() {
    return {
        scope: {
            value1 = '@'
        },
        template : '<div><h3>Simple Directive test {{directiveName}}</h3></div>',
        link : function(scope, elem , attrs) {
            // elem.hide();
            // angular.element('#page').addClass('someclass');
            // elem.css('bottom', '5%');
            var attribureValue = attrs.attributeValue;
            console.log('This the value of the attribute : ' , attribureValue);
        },
        controller: function ($scope) {
            $scope.directiveName = 'simpleDirective';
          
        },
        controllerAs : 'thisController'
    }
})