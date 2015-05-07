angular.module('app')
.controller('LoginCtrl', function ($scope, $state, loginService) {
  if(loginService.is_logged()){
    // $state.go("app.categories");
    console.log("LOGGED");
  }

  var data = {}, fn = {};
  $scope.data = data;
  $scope.fn = fn;

  data.error = null;
  data.loading = false;

  fn.login = function(credentials){
    data.error = null;
    data.loading = true;

    loginService.login(credentials).then(function(response){
      console.log(response);
      data.loading = false;
      // localStorageService.set('authentication_token', response.data.authentication_token);
      // $state.go("app.categories");

    },function(error){
      console.log(error);
      data.error = error.data.error;
      data.loading = false;
    });
  };
});
