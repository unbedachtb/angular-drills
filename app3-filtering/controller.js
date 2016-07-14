angular.module("app").controller("mainCtrl", function($scope, mainService) {
  $scope.myData = mainService.myData();
  $scope.info = ""




});
