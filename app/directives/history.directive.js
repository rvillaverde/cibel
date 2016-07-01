cibelApp.directive('historySection', function() {
  return {
    replace: true,
    templateUrl: './app/views/history.html',
    link: function(scope, element, attributes) {
      if ($(".main").is(":hidden")) {
        $(".home").hide();
        $(".products").hide();
        $(".advice").hide();
        $(".inspiration").hide();
        $(".company").hide();
        $(".main").slideDown();
      }
    }
  }
});
