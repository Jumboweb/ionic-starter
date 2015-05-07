angular.module('app')
.controller('AppCtrl', function ($scope, $state, loginService) {
  'use strict';
  var fn = {};
  $scope.fn = fn;

  fn.logout = function(){
    loginService.logout();
    $state.go("login");
  };
});
