// JS untuk Menu Navbar Scroll Change Color
$(window).scroll(function () {
  var y = $(window).scrollTop();
  if (y >= 100) {
    $('header').css('background-color', '#0099ff');
  } else if (y >= 0) {
    $('header').css('background-color', 'rgba(34, 49, 52, 0.9)');
  } else {
    $('header').css('background-color', '#26d0c9');
  }
});

// JS untuk Menu Open - Focus
$(function () {
  var pull = $('#pull'); // Variabel tombol navigasi (akan muncul hanya pada perangkat mobile)
  menu = $('nav ul'); // Variabel menu

  $(pull).on('click', function (e) {
    e.preventDefault();
    menu.slideToggle();
  });
  $(window).resize(function () {
    var w = $(window).width();
    if (w > 600 && menu.is(':hidden')) {
      menu.removeAttr('style');
    }
  });
});
