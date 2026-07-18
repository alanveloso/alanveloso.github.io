/*
* Greedy Navigation
*
* Disabled for the editorial layout: all nav links stay visible and wrap.
* http://codepen.io/lukejacksonn/pen/PwmwWV
*
*/

var $nav = $('#site-nav');
var $btn = $('#site-nav > button');
var $vlinks = $('#site-nav .visible-links');
var $hlinks = $('#site-nav .hidden-links');

function updateNav() {
  // Keep every link in the visible list and hide the overflow toggle.
  $hlinks.children().appendTo($vlinks);
  $btn.addClass('hidden').removeClass('close');
  $hlinks.addClass('hidden');
}

$(window).on('resize', updateNav);
if (screen.orientation && screen.orientation.addEventListener) {
  screen.orientation.addEventListener('change', updateNav);
}

updateNav();
