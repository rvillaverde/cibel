cibelApp.directive('socialSection', function() {
  return {
    replace: true,
    templateUrl: './app/views/social.html',
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
