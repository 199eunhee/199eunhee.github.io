$(document).ready(function(){
    //페럴럭스 스크롤링
   var wh = $(".page").height();
   var wd = $(".page").width();
   $(".page").each(function (index) {
      $(this).attr("data-val", index * wh);
   });



   $(".page").on("mousewheel DOMMouseScroll", function (e) {
      var secPos = parseInt($(this).attr("data-val"));
      if (e.originalEvent.wheelDelta >= 0) {
         $("html,body").stop().animate({
            scrollTop: secPos - wh
         });
         return false;
      } else if (e.originalEvent.wheelDelta < 0) {
         $("html,body").stop().animate({
            scrollTop: secPos + wh
         });
         return false;
      }
        $(".container").mouseenter(function () {
      $(".page").off("mousewheel DOMMouseScroll");
      $(".scroll").fadeOut();
      return false;
   });

   $(".pop").mouseleave(function () {
      $(".page").on("mousewheel DOMMouseScroll", function (e) {
         var secPos = parseInt($(this).attr("data-val"));
         if (e.originalEvent.wheelDelta >= 0) {
            $("html,body").stop().animate({
               scrollTop: secPos - wh
            });
            return false;
         } else if (e.originalEvent.wheelDelta < 0) {
            $("html,body").stop().animate({
               scrollTop: secPos + wh
            });
            return false;
         }

      });

   });
   $(".container").mouseleave(function () {
      $(".page").on("mousewheel DOMMouseScroll", function (e) {
         var secPos = parseInt($(this).attr("data-val"));
         if (e.originalEvent.wheelDelta >= 0) {
            $("html,body").stop().animate({
               scrollTop: secPos - wh
            });
            return false;
         } else if (e.originalEvent.wheelDelta < 0) {
            $("html,body").stop().animate({
               scrollTop: secPos + wh
            });
            return false;
         }

      });

   });
     
   });
    
});