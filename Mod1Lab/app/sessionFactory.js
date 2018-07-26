angular.module('app').factory('sessionFactory', ['$window', 'formatingFactory', sessionFactory]);

function sessionFactory($window) {
    var myValeuFormatter = new formatingFactory();
    return {
        save: save,
        get: get,
        clear: clear
    }

    function save (key, value) {
        // console.log('From from session factory : ' , $window.sessionStorage.getItem('name'));
      var newValue = myValeuFormatter.valueFormatter(value);
        $window.sessionStorage.setItem(key,newValue);
       
        
    }

    function get(key) {
        return $window.sessionStorage.getItem(key);
    }

    function clear() {
        $window.sessionStorage.clear();
    }
}