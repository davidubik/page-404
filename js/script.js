$(document).ready(function () {
$('.txtLine').css({ 'margin-left': Math.ceil($('body').outerWidth() / 5) });
  $.line(0, $('.txtLine').first());


  $(window).resize(function () {
    $('.txtLine').css({ 'margin-left': Math.ceil($('body').outerWidth() / 5) });
  });
});


$.line = function (i, line) {
  $(line).delay(i * 1000).queue(function (n) {
    var shw = $(line).find('.show');
    var hid = $(line).find('.hide');
    var txt = $(hid).text();
    $(shw).css({ 'border-bottom': 'solid 2px lime', 'box-shadow': '0 9px 1px -7px rgba(255,255,255,.5)' }).prepend('<div></div>');
    for (var ii = 0; ii < txt.length; ii++) {

      $.letter(ii, line, shw, hid, txt, i);
    }

    n();

  });
}

$.letter = function (ii, line, shw, hid, txt, i) {
  $(line).delay(50).queue(function (n) {
    var char = txt[ii];
    $(shw).html($(shw).html() + char);
    n();

    if (ii == (txt.length - 1)) {

      $(line).delay(300).queue(function (n) {
        $(shw).css({ 'border-bottom': '', 'box-shadow':'' });
        $(shw).find('div').remove();
        var incr = i++;
        $.line(incr, $(line).next());
        n();
      });
    }
  });
}