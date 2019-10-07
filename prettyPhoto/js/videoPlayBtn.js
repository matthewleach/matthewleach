$(document).ready(function () {
  $('.picture a').hover(function () {
    $(this).find('strong').stop().fadeTo('normal', 1);
  }, function () {
    $(this).find('strong').stop().fadeTo('normal', 0);
  });
});