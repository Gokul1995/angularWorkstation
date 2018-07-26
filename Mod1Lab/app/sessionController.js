angular.module('app').controller('sessionController', ['sessionService', 'sessionFactory', sessionController]);

    function sessionController(sessionService, sessionFactory) {
        var mySessionFactory = sessionFactory;
        var vm = this;
        vm.getServiceSession = function() {

            vm.model = {
                name: sessionService.get('name'),
                nickname: sessionService.get('nickname'),
                status: 'Retrived by service on ' + new Date()
            }
            console.log('This is the vm model , ' ,vm.model)
        }

        vm.setServiceSession = function() {
            sessionService.save('name' , vm.model.name);
            sessionService.save('nickname' , vm.model.nickname);
            vm.getServiceSession();
        }

        vm.clearServiceSession = function () {
            sessionService.clear();
            vm.getServiceSession();
        }

        vm.getFactorySession = getFactorySession;
        vm.setFactorySession = setFactorySession;
        vm.clearFactorySession = clearFactorySession;

        function getFactorySession() {
            vm.model = {
                name : mySessionFactory.get('name'),
                nickname : mySessionFactory.get('nickname'),
                status: 'Retrived by factory on ' + new Date()
            }
        }
        
        function setFactorySession() {
            mySessionFactory.save ('name' , vm.model.name);
            mySessionFactory.save('nickname' , vm.model.nickname);
            getFactorySession();
        }

        function clearFactorySession() {
            mySessionFactory.clear();
            getFactorySession();

        }
  }

    // function (sessionService) {
    //     var vm = this;

