var sample = angular.module('sample',['ngRoute']);

sample.config(function($routeProvider){
  $routeProvider
    .when('/',{
      templateUrl : 'home.html',
      controller : 'homecontroller'
    })
    
    .when('/fb',{
      templateUrl : 'fb.html',
      controler : 'fbcontroller'
    });
});

sample.controller('homecontroller',function($scope){
  $scope.message = 'This is home page';
});

sample.controller('fbcontroller',function($scope){
  $scope.message = 'Here is lin\nk click below';
});