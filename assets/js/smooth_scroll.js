$(document).ready(function() {
  if (typeof jQuery === 'undefined') {
    throw new Error('Unable to find jQuery')
  }

  $(".navbar.navbar-default.navbar-fixed-top a[href^='/#']").on('click', function(e) {

    var hash = this.hash;

    if ($(hash).offset() != null) {
      // ^^ returns true only when we're on the homepage

      // prevent default anchor click behavior
      e.preventDefault();

      //animate
      $('html, body').animate({
        scrollTop: $(hash).offset().top -120
      }, 800, function(){

        // when done, add hash to url (default click behaviour)
        window.location.hash = hash;
      });

    }

  });
});