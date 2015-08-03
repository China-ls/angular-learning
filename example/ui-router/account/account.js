/**
 * Created by hugo on 15/8/3.
 */

angular.module('uiRouterDemo.accounts', ['ui.router'])

  .config(['$stateProvider', function($stateProvider){
    $stateProvider

      .state('account', {
        abstract: true,
        url: '/account',
        templateUrl: 'account/account.html'
      })

      .state('account.list', {
        url: '',
        templateUrl: 'account/account.list.html',
        controller: ['$scope', function($scope){
          $scope.persons = [
            {name: 'tom', no: 123456, personId: 1},
            {name: 'jerry', no: 862423, personId: 2},
            {name: 'jack', no: 522343, personId: 3}
          ]
        }]
      })

      .state('account.items', {
        url: '/:personId',
        views: {
          '': {
            templateUrl: 'account/account.items.html',
            controller: ['$scope', '$stateParams', function($scope, $stateParams){
              console.log($stateParams);
              $scope.accounts = [
                {no: '123456', pwd: 123567, accountId: 1},
                {no: '862423', pwd: 123567, accountId: 2},
                {no: '123456', pwd: 423422, accountId: 3},
                {no: '522343', pwd: 213123, accountId: 4},
                {no: '434573', pwd: 123123, accountId: 5}
              ]
            }]
          }
        }
      })

      .state('account.items.detail', {
        url: '/:accountId',
        templateUrl: 'account/account.items.detail.html',
        controller: ['$scope', '$stateParams', function($scope, $stateParams){
          console.log($stateParams);
          $scope.account  = [
            {no: '123456', pwd: 123567, accountId: $stateParams.accountId, createTime: '20150401', amount: 123},
            {no: '123456', pwd: 123567, accountId: $stateParams.accountId, createTime: '20150401', amount: 123},
            {no: '123456', pwd: 123567, accountId: $stateParams.accountId, createTime: '20150401', amount: 123}
          ]
        }]
      })
  }]);
