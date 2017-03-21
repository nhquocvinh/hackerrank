'use strict';

(function() {

  function Service($q, $http) {

    var __service = function() {}

    __service.prototype.get = function() {
      var q = $q.defer();

      q.resolve('Call Service Complete!')

      return q.promise;
    }

    return new __service;
  }

  angular
    .module('hackerrank.service', [])
    .factory('Service', Service);

  Service.$inject = ['$q', '$http'];

})();
