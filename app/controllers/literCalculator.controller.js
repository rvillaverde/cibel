cibelApp.controller('literCalculatorController', ['$scope', function($scope) {
  $scope.surface = '';
  $scope.product = '';
  $scope.parameterType = '';
  $scope.squareMeter = '';
  $scope.width = '';
  $scope.large = '';

  $scope.calculate = function() {
    var str = $scope.surface + " / " + $scope.product + " / " + $scope.parameterType + " / " + $scope.squareMeter + " / " + $scope.width + " / " + $scope.large;
    alert(str);
  }
}]);
