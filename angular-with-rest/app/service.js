var app_service = angular.module('RestServiceModule', ['restangular']);

var base_url = 'http://localhost:3000';

app_service.service('RestMethodsService',['restangular', function(Restangular) {

    Restangular.setBaseUrl (base_url);
    this.getUsers = function () {
        var users = Restangular.all('/cars');
        return users.getList();
    }

    this.getUserDetails = function (id) {
        var detail = Restangular.one('/users/'+id);
        return detail.get();

    }
    this.createUser = function (data) {
        var baseUsers = Restangular.all('/users');
        var postInfo = baseUsers.post(data);
        return postInfo;
    }
    this.updateUser = function (data) {
        var baseUsers = Restangular.one('/users', 1);
        baseUsers.get().then(function(user) {
            user.name = data.name;
            user.email = data.email;

            return user.put();
        })
    }
    this.deleteUser = function (id) {
        var baseUsers = Restangular.one('/users', id);
        baseUsers.get().then(function (user) {
            return user.remove();
        })
    }
}])