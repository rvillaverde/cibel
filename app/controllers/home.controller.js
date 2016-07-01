cibelApp.controller('homeController', ['$scope', '$compile', function($scope, $compile) {

  $scope.slideDownToSection = function(sectionName) {
    $('#' + sectionName).slideDown();
  }

  $scope.showLiterCalculatorSection = function() {
    var compiledeHTML = $compile("<div liter-calculator-section></div>")($scope);
    $(".main-section-wrapper").empty();
    $(".main-section-wrapper").append(compiledeHTML);
  }

  $scope.showHistorySection = function() {
    var compiledeHTML = $compile("<div history-section></div>")($scope);
    $(".main-section-wrapper").empty();
    $(".main-section-wrapper").append(compiledeHTML);
  }

  $scope.showSocialSection = function() {
    var compiledeHTML = $compile("<div social-section></div>")($scope);
    $(".main-section-wrapper").empty();
    $(".main-section-wrapper").append(compiledeHTML);
  }

  $scope.openModal = function(header, template, previous, next) {
    var htmlString = "<modal header=" + header + " template=" + template + "></modal>";
    var compiledeHTML = $compile(htmlString)($scope);
    $(".modal-window-container").append(compiledeHTML);
  }

  $scope.closeModal = function() {
    console.log('CLOSING MODAL');
    $(".modal-wrapper").hide();
    $(".modal-window-container").empty();
  }

  $scope.openAdviceModal = function(adviceId) {
    $scope.openModal('consejos', 'advice-' + adviceId);
  }

  $scope.openInspirationModal = function(inspirationId) {
    $scope.openModal('inspiración', 'inspiration-' + inspirationId);
  }
}]);
