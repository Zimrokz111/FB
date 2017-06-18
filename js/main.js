// Author's Js..

//Bootstrap Nav

$('.navbar-default .navbar-nav > li.dropdown').hover(
    function() {
      $('ul.dropdown-menu', this).stop(true, true).fadeIn('slow');
      $(this).addClass('open');
    }, function() {   
      $('ul.dropdown-menu', this).stop(true, true).fadeOut('slow');
      $(this).removeClass('open');
    }
);

//Animate Js

new WOW().init();

//Text

$('#demo').cycleText({

  // text separator
  separator: '|',

  // animation type
  // refer to https://daneden.github.io/animate.css/
  animation: 'fadeIn',

  // animation speed in ms
  interval: 2000
  
});