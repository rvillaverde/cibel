cibelApp.directive('modal', function() {
  return {
    restrict: 'EA',
    replace: true,
    scope: {
      header: '@',
      template: '@'
    },
    templateUrl: './app/views/modal.html',
    link: function(scope, element, attributes) {
      if ($(".modal-wrapper").is(":hidden")) {
        $(".modal-wrapper").show();
      }
    }
  }
});
