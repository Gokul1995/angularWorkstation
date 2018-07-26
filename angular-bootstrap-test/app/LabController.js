angular.module('app')
    .controller('LabController', function() {
        var vm = this;

        vm.alerts = [];
        vm.addDanger = addDanger;
        vm.addWarning = addWarning;
        vm.dimissAlert = dimissAlert;


        function addDanger() {
            addAlert('danger', 'Dangerous activity found.')
        }
        function addWarning() {
            addAlert('warning', 'This is the warning message.')
        }
        function dimissAlert(index) {
            vm.alerts.splice(index, 1);
        }

        function addAlert(type, text) {
            vm.alerts.push({type: type , text: text});
        }

        
    })