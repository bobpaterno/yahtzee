(function() {
  'use strict';

  $(document).ready(init);

  var currUser = 0;
  var currRoll = 2;

  function init() {
    $('#add').click(add);
    $('.arrow').click(arrow);
    $('body').keydown(move);
    $('#add-score').click(score);
  }

  function score(event) {
    var newscore = $('#score').val();
    newscore++;
    debugger;

    event.preventDefault();
  }

  function move(event) {
    var keyCode = event.keyCode;
    switch(keyCode) {
    case 38:
      currUser--;
      break;
    case 40:
      currUser++;
      break;
    case 37:
      currRoll--;
      break;
    case 39:
      currRoll++;
    }
    paintScreen();

    if(keyCode<=40 && keyCode>=37) {
      event.preventDefault();
    }
  }

  function arrow() {
    switch(this.id) {
      case 'up':
        currUser--;
        break;
      case 'down':
        currUser++;
        break;
      case 'left':
        currRoll--;
        break;
      case 'right':
        currRoll++;
    }
    paintScreen();
  }

  function paintScreen() {
    var $trs = $('#game > tbody > tr');
    var tr = $trs[currUser];
    $('.horizontal').removeClass();
    $(tr).addClass('horizontal');

    var $tds = $('#game > tbody > tr > td:nth-child('+currRoll+')');
    $('.vertical').removeClass();
    $tds.addClass('vertical');
  }

  function add(event) {
      var username = $('#username').val();
      var avatar = $('#avatar').val();

      createRow(username, avatar);

      event.preventDefault();
  }

  function createRow(name, avatarurl) {
    var $tr = $('<tr>');
    var tds = [];
    var count;

    for(var i=0; i<16; i++) {
      tds.push('<td></td>');
    }
    $tr.append(tds);

    $('#game > tbody').append($tr);

    count = $('#game > tbody > tr').length;
    if(count === 1) {
      $tr.addClass('horizontal');
    }

    var $img = $('<img>');
    $img.attr('src', avatarurl);
    $img.addClass('avatar');

    $tr.children('td:nth-child(1)').append($img);
    $tr.children('td:nth-child(2)').text(name);
    $tr.children('td:nth-child(3)').addClass('vertical');


  }

}());
