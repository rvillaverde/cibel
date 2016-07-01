cibelApp.directive('modalContent', function() {
  return {
    restrict: 'EA',
    replace: true,
    link: function(scope, element, attrs) {
      scope.getContentUrl = function() {
        return './app/views/modal-templates/' + attrs.template + '.html';
      }
    },
    template: '<div ng-include="getContentUrl()"></div>'
  }
});
