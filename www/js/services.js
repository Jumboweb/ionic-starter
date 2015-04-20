angular.module('app')

.provider('UserSrv', function(){
  'use strict';
  var userKey = 'user';
  this.storageKey = userKey;

  this.$get = ['LocalStorageUtils', function(LocalStorageUtils){
    var service = {
      storageKey: userKey,
      get: getCurrentUser,
      set: setCurrentUser,
      delete: deleteCurrentUser
    };

    function getCurrentUser(){
      return LocalStorageUtils.get(userKey);
    }

    function setCurrentUser(user){
      return LocalStorageUtils.set(userKey, user);
    }

    function deleteCurrentUser(){
      return LocalStorageUtils.clear(userKey);
    }

    return service;
  }];
})

.provider('AuthSrv', function(UserSrvProvider, LocalStorageUtilsProvider){
  'use strict';
  function isLogged(){
    return LocalStorageUtilsProvider.getSync(UserSrvProvider.storageKey) !== undefined;
  };

  this.isLogged = isLogged;

  this.$get = ['$http', '$q', 'UserSrv', 'LocalStorageUtils', 'Config', function($http, $q, UserSrv, LocalStorageUtils, Config){
    var service = {
      login: login,
      logout: logout,
      isLogged: isLogged
    };

    function login(credentials){
      return $q.when({
        login: credentials.login,
        password: credentials.password
      }).then(function(user){
        return UserSrv.set(user).then(function(){
          return user;
        });
      });
    }

    function logout(){
      return $q.when().then(function(){
        return UserSrv.delete();
      });
    }

    return service;
  }];
});
