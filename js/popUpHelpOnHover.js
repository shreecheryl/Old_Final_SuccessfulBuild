<!-- SCRIPT FOR POP-UP WINDOW HELP showing on HOVER -->

$(function() {
  var toLeft = 30;
  var toDown = 30;

  $('a#trigger').hover(function(e) {
    $('div#pop-up').show();}, 
	function() {
    	$('div#pop-up').hide();
  	});

  $('a#trigger').mousemove(function(e) {
    $("div#pop-up").css('top', e.pageY + toDown).css('left', e.pageX + toLeft);
  });
});  
