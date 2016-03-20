/**
 * Created by hugo on 15/8/3.
 */

// Make sure to include the `ui.router` module as a dependency
angular.module('uiRouterDemo', [
  'ui.router',

  'uiRouterDemo.accounts'
])

  .run(['$rootScope', '$state', '$stateParams',
    function ($rootScope,   $state,   $stateParams) {
      $rootScope.$state = $state;
      $rootScope.$stateParams = $stateParams;
    }])

  .config(['$stateProvider', '$urlRouterProvider',
    function ($stateProvider,   $urlRouterProvider) {

      $urlRouterProvider

        // The `when` method says if the url is ever the 1st param, then redirect to the 2nd param
        // Here we are just setting up some convenience urls.
        .when('/c?id', '/contacts/:id')
        .when('/user/:id', '/contacts/:id')

        // If the url is ever invalid, e.g. '/asdf', then redirect to '/' aka the home state
        .otherwise('/');

      $stateProvider

        .state("home", {

          // Use a url of "/" to set a states as the "index".
          url: "/",

          template: '<p class="lead">这是一个UI-Router的示例</p>' +
          '<p>单击上方的导航菜单。 ' +
          '注意下方 <code>$state</code> 和 <code>$stateParams</code> 分别的值。</p>' +
          '<p>单击这个链接—<a href="#/c?id=1">Alice</a> 或 ' +
          '<a href="#/user/42">Bob</a>，就会马上看到url跳转。</p>' +
          '—— 改自<a href="https://github.com/angular-ui/ui-router/tree/master/sample">ui-router sample</a>'
        })


        .state('about', {
          url: '/about',

          // Showing off how you could return a promise from templateProvider
          templateProvider: ['$timeout',
            function (        $timeout) {
              return $timeout(function () {
                return '<p class="lead">UI-Router Resources</p><ul>' +
                  '<li><a href="https://github.com/angular-ui/ui-router/tree/master/sample">Source for this Sample</a></li>' +
                  '<li><a href="https://github.com/angular-ui/ui-router">Github Main Page</a></li>' +
                  '<li><a href="https://github.com/angular-ui/ui-router#quick-start">Quick Start</a></li>' +
                  '<li><a href="https://github.com/angular-ui/ui-router/wiki">In-Depth Guide</a></li>' +
                  '<li><a href="https://github.com/angular-ui/ui-router/wiki/Quick-Reference">API Reference</a></li>' +
                  '</ul>';
              }, 100);
            }]
        })
    }
  ]
);
