angular.module("arrayApp").controller("arrayController", function($scope, arrayService) {
  $scope.datas = arrayService.myData();
});
