angular.module('app').controller('LabController', [
    function () {
        var vm = this;

        vm.author = [{
                fName: 'Gokul',
                lName: 'Budha',
                email: 'test@esewa.com.np'
            },
            {
                fName: 'TestFname',
                lName: 'TestLname',
                email: 'test@test.com'
            },
            {
                fName: 'fname',
                lName: 'lname',
                email: 'fname@lname.com'
            }
        ];
    }
]);