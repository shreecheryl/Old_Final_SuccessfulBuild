$(function () {
   $(".zoomBtn").bind("click", function () {
     var size = parseInt($('#zoomThis').css("font-size"));
         if ($(this).hasClass("plus")) {
             size = size + 2;
       } else {
          size = size - 2;
             if (size <= 10) {
               size = 10;
              }
       }
$('#zoomThis').css("font-size", size);
    });
});