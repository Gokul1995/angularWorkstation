angular.module('app').factory('formatingFactory' , ['$window' , formatingFactory]);

function formatingFactory () {
    return {
        valueFormatter : valueFormatter
    }

    function valueFormatter (value) {
        var stringLength = value.length;
        if(stringLength%2 == 0) {
            return value.toUpperCase();
        }
        else {
            return value.toLowerCase();
        }
    }
}