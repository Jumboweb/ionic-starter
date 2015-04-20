angular.module('app')

.controller('LoginCtrl', function($scope, $state, AuthSrv){
  'use strict';
  var data = {}, fn = {};
  $scope.data = data;
  $scope.fn = fn;

  data.error = null;
  data.loading = false;

  fn.login = function(credentials){
    data.error = null;
    data.loading = true;
    AuthSrv.login(credentials).then(function(){
      $state.go('app.tabs.home');
      data.credentials.password = '';
      data.error = null;
      data.loading = false;
    }, function(error){
      data.credentials.password = '';
      data.error = error.data && error.data.message ? error.data.message : error.statusText;
      data.loading = false;
    });
  };
})

.controller('AppCtrl', function($scope, $state, AuthSrv){
  'use strict';
  $scope.logout = function(){
    AuthSrv.logout().then(function(){
      $state.go('login');
    });
  };
})

.controller('TabsCtrl', function($scope){
  'use strict';
  var data = {};
  $scope.data = data;
})

.controller('HomeCtrl', function($scope){
  'use strict';
  var data = {}, fn = {}, ui = {};
  $scope.data = data;
  $scope.fn = fn;
  // toto.push("a");
});
