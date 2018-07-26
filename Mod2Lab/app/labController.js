angular.module('app')
    .controller ('LabController', [
        function () {
            var vm = this;

            vm.person = {
                name : 'Gokul',
                penName: 'Milestone'
            };
            vm.show = show;

            function show() {
                alert(JSON.stringify(vm.person));
            }
        }
    ]);