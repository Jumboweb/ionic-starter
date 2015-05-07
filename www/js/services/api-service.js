angular.module('app')
.service('apiService', function ($http, Config) {
  var api = this;

  // api.get = function (action) {
  //   var route = Config.backend+'/api/' + action;
  //
  //   var responsePromise = $http({
  //     method: 'GET',
  //     url: route,
  //     headers: {
  //       'Authorization': localStorageService.get('authentication_token', "")
  //     }
  //   });
  //
  //   return responsePromise;
  // };
  //
  api.post = function (action, data) {

    var route = Config.backend+'/' + action;

    var responsePromise = $http({
      method: 'POST',
      url: route,
      data: data
    });

    return responsePromise;
  };
  return api;
});
