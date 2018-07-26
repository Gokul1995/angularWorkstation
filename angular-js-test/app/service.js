// var app_service = angular.module('RestServiceModule', ['restangular']);

// var base_url = 'http://localhost:3000';

// app_service.service('RestMethodsService',['restangular', function(Restangular) {

//     Restangular.setBaseUrl (base_url);
//     this.getCars = function () {
//         var cars = Restangular.all('scars');
//         console.log('Car from server : ', cars.getList());
        
//         return cars.getList();
//     }

//     this.getCarDetails = function (id) {
//         var detail = Restangular.one('/cars/'+id);
//         return detail.get();

//     }
//     this.createCar = function (data) {
//         var baseCars = Restangular.all('/cars');
//         var postInfo = baseCars.post(data);
//         return postInfo;
//     }
//     this.updateCar = function (data) {
//         var baseCars = Restangular.one('/cars', 1);
//         baseCars.get().then(function(car) {
//             car.name = data.name;
//             car.email = data.email;

//             return car.put();
//         })
//     }
//     this.deleteCar = function (id) {
//         var baseCars = Restangular.one('/cars', id);
//         baseCars.get().then(function (car) {
//             return car.remove();
//         })
//     }
// }])