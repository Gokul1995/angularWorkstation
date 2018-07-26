angular.module('app')
    .directive('person' , function () {
        return {
            restrict: 'E',
            scope: {
                person: '=',
                action: '&'
            },
            
            template: 'Name: <input type="text" ng-model="person.name" class="form-control" />' +
            'Pen Name: <input type="text" ng-model="person.penName" class="form-control" />' +
            '<br><input type="button" ng-click="action()" value="Action" class="btn btn-primary"/>' + 
            '<br> <br><pre>{{person | json}}</pre>',
            // link: function(scope, element, attrs) {
            //     element.bind('mouseenter', function() {
            //         element.css('background-color', 'red');
            //     });
            //     element.bind('mouseleave', function() {
            //         element.css('background-color', 'silver');
            //     })
            // }

        }
    })