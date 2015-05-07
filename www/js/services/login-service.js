angular.module('app')
.service('loginService', function (apiService ) {
  this.login = function(credentials){
    return apiService.post('users/signin', {email:credentials.login, password:credentials.password});
  };

  // this.logout = function(){
  //   localStorageService.remove('authentication_token');
  // };
  //
  this.is_logged = function(){
    // return localStorageService.get('authentication_token', null) != null;
    return false;
  };
});
