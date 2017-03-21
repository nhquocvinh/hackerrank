'use strict';

(function() {

  function MainCtrl($scope, Service) {

    init();

    function init() {
      Service.get().then(function(result) {
        $scope.name = result;
        console.log($scope.name);
      });
    }
  }

  function InputCtrl(Service) {

    var input = this;

    init();

    var flag = true;
    input.adding = function($event) {

      $event.preventDefault();

      if (flag) {
        input.title = 'okay';
      } else {
        Service.get().then(function(result) {
          input.title = result;
        });
      }

      flag = !flag;
    }

    function init() {
      Service.get().then(function(result) {
        input.title = result;
      });
    }
  }

  angular
    .module('hackerrank')
    .controller('MainCtrl', MainCtrl)
    .controller('InputCtrl', InputCtrl);

})();
