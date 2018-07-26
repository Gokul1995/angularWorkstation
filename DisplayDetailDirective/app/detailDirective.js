angular.module('app')
    .directive('detailDirective', function ($timeout, $interval) {
        return {
            restrict: 'E',
            replace: true,
            scope: {
                author: '=',
                action: '&',
            },
            templateUrl: 'detail.html',
            link: function (scope, element, attrs) {
                scope.action = function (data) {
                    scope.detail = data;
                    scope.countdown = 10;
                    // $timeout(function(){

                    //     scope.detail = '';
                    // }, 5000);
                    var interval = $interval(function () {
                        scope.countdown--;
                        cancelInterval();

                    }, 1000);

                    function cancelInterval() {
                        if (scope.countdown == 0) {
                            $interval.cancel(interval);
                            scope.detail = '';
                        }
                    }
                };
            }
        }
    })