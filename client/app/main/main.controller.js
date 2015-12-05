(function() {

    'use strict';

    angular.module('angularcampApp')
        .controller('MainCtrl', ['mainservice', MainCtrl]);

    function MainCtrl(mainservice) {

        var mc = this;
        mc.events = [];

        loadData();

        function loadData() {
            var promises = [getEvents()];
            return mainservice.ready(promises).then(function() {
                console.log('events data ready!');
            });
        }
        
        function getEvents() {
            mainservice.getEvents().then(function(events) {
                mc.events = events;
            });
        }
    }

})();
