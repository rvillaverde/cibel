cibelApp.controller('modalController', ['$scope', function($scope) {
  $scope.closeModal = function() {
    console.log('CLOSING MODAL');
    $(".modal-wrapper").hide();
    $(".modal-window-container").empty();
  }
}]);
