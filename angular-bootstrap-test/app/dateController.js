angular.module('app')
    .controller('DateController' , function($scope) {
        $scope.datePicked= new Date();
        
        $scope.options = {
            showWeeks: false,
            minDate: new Date()
            // showWeekNums: false
        }
    })