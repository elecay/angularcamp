(function() {

    'use strict';

    angular.module('angularcampApp')
        .factory('mainservice', ['$http', '$q', mainservice]);

    function mainservice($http, $q) {

        var ms = this;

        var service = {
            getEvents   : getEvents,
            ready       : ready
        };

        return service;
        

        /* Implementation */

        function getEvents() {
            var deferred = $q.defer();
            $http.get('/api/events').success(function(events) {
                deferred.resolve(events);    
            });
            return deferred.promise;
        };

        function ready(promises) {
            var deferred = $q.defer();
            $q.all(promises).then(function() {
                deferred.resolve();
            });
            return deferred.promise;
        };
    }

})();