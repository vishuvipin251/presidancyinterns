var sample = angular.module('sample',['ngRoute']);

sample.config(function($routeProvider){
  $routeProvider
    .when('/',{
      templateUrl : 'home.html',
      controller : 'homecontroller'
    })

    .when('/fb',{
      templateUrl : 'fb.html',
      controller : 'fbcontroller'
    });
});

sample.controller('homecontroller',function($scope){
  $scope.message1 = 'This is home page';
  $scope.message2 = 'Here is the link click below';
});

sample.controller('fbcontroller',function($scope){
  $scope.message1 = 'Do you want to go to Facebook? If YES! then';
});
