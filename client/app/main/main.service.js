(function() {

    'use strict';


    angular.module('angularcampApp')
        .service('mainservice', ['$http', '$q', MainService]);

    function MainService($http, $q) {

        var ms = this;

        ms.getEvents = function() {
            var deferred = $q.defer();
            $http.get('/api/events').success(function(events) {
                deferred.resolve(events);    
            });
            return deferred.promise;
        };

        ms.ready = function(promises) {
            var deferred = $q.defer();
            $q.all(promises).then(function() {
                deferred.resolve();
            });
            return deferred.promise;
        };
    }

})();