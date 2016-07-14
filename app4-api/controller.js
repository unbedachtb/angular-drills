angular.module('app').controller('mainCtrl', function($scope, mainService) {
  $scope.showPokemon = function() {
    mainService.getPokemon().then(function(response) {
      $scope.pokemon = response;
      console.log(response);
    });
  };
});
