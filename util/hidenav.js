// Hide Header on on scroll down
var didScroll;
var lastScrollTop = 0;
var delta = 5;
var navbarHeight = $('#title').outerHeight();

$(window).scroll(function(event){
  didScroll = true;
});

setInterval(function() {
  if (didScroll) {
      hasScrolled();
      didScroll = false;
  }
}, 250);

function hasScrolled() {
  var st = $(this).scrollTop();
  
  // Make sure they scroll more than delta
  if(Math.abs(lastScrollTop - st) <= delta)
      return;
  
  // If they scrolled down and are past the navbar, add class .nav-up.
  // This is necessary so you never see what is "behind" the navbar.
  if (st > lastScrollTop && st > navbarHeight){
      // Scroll Down
      $('#title').removeClass('nav-down').addClass('nav-up');
  } else {
      // Scroll Up
      if(st + $(window).height() < $(document).height()) {
          $('#title').removeClass('nav-up').addClass('nav-down');
      }
  }
  lastScrollTop = st;
}

//Resize text-only card on window resize
$(window).resize(function() {
  $(".text-only").height($(".caption", ".text-only").height() + 35);
});