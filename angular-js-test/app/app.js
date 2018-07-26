var myCarApp = angular.module('myCarApp', [
    'restangular',
    // 'RestServiceModule',
    'ngRoute',
    'ngAnimate'
]);

myCarApp.config(['$routeProvider', 'RestangularProvider', '$locationProvider', function ($routeProvider, RestangularProvider, $locationProvider) {
    $routeProvider
        .when('/home', {
            templateUrl: 'views/home.html',
            controller: 'CarController'
        })
        .when('/contact', {
            templateUrl: 'views/contact.html',

        })
        .when('/directory', {
            templateUrl: 'views/directory.html',
            controller: 'CarController'
        })
        .when('/directory/:id', {

            templateUrl: 'views/detail.html',
            controller: 'CarDetailController'
        })
        .when ('/directory/:id/edit', {
            templateUrl: 'views/update.html',
            controller: 'CarUpdateController'
        })
        .otherwise({
            redirectTo: '/home'
        });
    RestangularProvider.setBaseUrl('http://localhost:3000')

}])

myCarApp.run(function ($rootScope) {
    $rootScope.testData;
})


myCarApp.directive('randomCar', [function () {
    return {
        restrict: 'E',
        scope: {
            cars: '=',
            title: '='
        },
        transclude: true,
        templateUrl: 'views/random.html',
        controller: function ($scope) {
            $scope.random = Math.floor(Math.random() * 4)
        }
    }
}])

myCarApp.service('getDataFromJson', ['Restangular', '$location', function (Restangular, $location) {
    this.getDataService = function () {
        // return $http.get('http://localhost:3000/cars');
        return Restangular.all('cars').getList();
    };

    this.createCar = function (data) {
        var baseCars = Restangular.all('cars');
        var postInfo = baseCars.post(data);
        return postInfo;
    };
    this.deleteCar = function(id) {
        var baseCars = Restangular.one('cars' , id);
        baseCars.get().then(function(car) {
            return car.remove();
        })
    };
    this.getDetail = function(id) {
        var detail = Restangular.one('cars/'+id);
        return detail.get();
    }
    this.updateDetail = function(newCar, id) {
        var cars = Restangular.one('cars', id);
        cars.get().then(function(car){
            car.name = newCar.name;
            car.color = newCar.color;
            car.price = newCar.price;
           
            car.put(function() {
                this.getDetail(id);
            }); 
        //    return this.getDetail(id);
            
        },
        $location.path('/directory/'+id))
    }

}]
    , );

myCarApp.controller('CarController', ['$scope', '$rootScope', 'getDataFromJson', function ($scope, $rootScope, getDataFromJson) {

    $scope.message = 'This is the message form the controller.'
    getDataFromJson.getDataService().then(function (response) {
        $scope.cars = response;
    });

    $scope.removeCar = function (id) {
        getDataFromJson.deleteCar(id).then(function(response) {
            console.log('Successfully Removed.' , response);
        })

    }

    $scope.addCar = function (newCar) {
        getDataFromJson.createCar(newCar).then(function () {
        }, function (error) {
            console.log('Error Occured : ', error);
        })
        $scope.newCar.name = "";
        $scope.newCar.color = "";
        $scope.newCar.price = "";
    }
    $scope.getOneDetail = function (car) {
        $rootScope.testData = car;
        return $rootScope.testData;
    }

    $scope.removeAll = function () {
        $scope.cars = [];
    }
}]


);

myCarApp.controller('CarDetailController', ['$scope', '$routeParams', '$rootScope', 'getDataFromJson', function ($scope, $routeParams, $rootScope, getDataFromJson) {

    $scope.urlParm = $routeParams.id;
    // $scope.carDetail = $rootScope.testData;

    // if (!$scope.carDetail) {
        getDataFromJson.getDetail($scope.urlParm).then(function(response) {
            $scope.carDetail = response;
        })

    // }
}]);

myCarApp.controller('CarUpdateController' , ['$scope', '$routeParams', 'getDataFromJson', '$location', function($scope , $routeParams, getDataFromJson , $location) {
$scope.updateId = $routeParams.id;

getDataFromJson.getDetail($scope.updateId).then (function(response) {
    $scope.car = response;
})
    $scope.update = function (car) {
        getDataFromJson.updateDetail(car,$scope.updateId)
    }
}] )    
