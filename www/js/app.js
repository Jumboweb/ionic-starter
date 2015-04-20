angular.module('app', ['ionic', 'ngCordova', 'LocalForageModule'])

.config(function($stateProvider, $urlRouterProvider, $provide, $httpProvider, AuthSrvProvider) {
  'use strict';
  $stateProvider
  .state('login', {
    url: '/login',
    templateUrl: 'views/login.html',
    controller: 'LoginCtrl'
  })
  .state('app', {
    url: '/app',
    abstract: true,
    templateUrl: 'views/menu.html',
    controller: 'AppCtrl'
  })
  .state('app.tabs', {
    url: '/tabs',
    abstract: true,
    views: {
      'menuContent': {
        templateUrl: 'views/tabs.html',
        controller: 'TabsCtrl'
      }
    }
  })
  .state('app.tabs.home', {
    url: '/home',
    views: {
      'home-tab': {
        templateUrl: 'views/home.html',
        controller: 'HomeCtrl'
      }
    }
  });

  if(AuthSrvProvider.isLogged()){
    $urlRouterProvider.otherwise('/app/tabs/home');
  } else {
    $urlRouterProvider.otherwise('/login');
  }

  // improve angular logger
  $provide.decorator('$log', ['$delegate', 'customLogger', function($delegate, customLogger){
    return customLogger($delegate);
  }]);


})

.constant('Config', Config)

.run(function($rootScope, $state, $log, AuthSrv, UserSrv, Config){
  'use strict';
  $rootScope.$on('$stateChangeStart', function(event, toState, toParams, fromState, fromParams){
    var logged = AuthSrv.isLogged();
    if(toState.name === 'login' && logged){
      event.preventDefault();
      $log.log('IllegalAccess', 'Already logged in !');
      $state.go('app.tabs.home');
    } else if(toState.name !== 'login' && !logged){
      event.preventDefault();
      $log.log('IllegalAccess', 'Not allowed to access to <'+toState.name+'> state !');
      $state.go('login');
    }
  });
});
