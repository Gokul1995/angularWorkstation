var app = angular.module('restApp', ['RestServiceModule']);

app.controller('restCtrl', ['RestMethodsService' , '$scope', function (RestMethodsService , $scope) {
    
    RestMethodsService.getUsers().then(function(response){
        //Use the data in the response
        console.log('This is the response from rest angular : ' , response )
    }, function(error){
        //Error response
        console.log('Inside the error block');
        
    })
}])
