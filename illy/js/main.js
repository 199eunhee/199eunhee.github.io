$(document).ready(function() {
	 var intv = setInterval(function(){ next(); }, 3000);
    function next(){
        $(".banFrame").not(":animated").animate({"margin-left":"-100%"}, 800, function(){
            $(".banFrame li").eq(0).appendTo($(".banFrame"));
            $(".banFrame").css("margin-left", "0%");
            $(".numBtn li").eq(0).appendTo($(".numBtn"));
            $(".numBtn li").eq(0).addClass("on");
            $(".numBtn li").not(":first-child").removeClass("on");
        });
    }
    function prev(){
        $(".banFrame li").eq(3).prependTo($(".banFrame"));
        $(".banFrame").css("margin-left", "-100%");
        $(".banFrame").not(":animated").animate({"margin-left":"0%"}, 800);
        $(".numBtn li").eq(3).prependTo($(".numBtn"));
        $(".numBtn li").eq(0).addClass("on");
        $(".numBtn li").not(":first-child").removeClass("on");
    }
    $(".nextBtn").click(function(){
        clearInterval(intv);
        next();
        intv = setInterval(function(){ nextAni(); }, 3000);
    });
    $(".prevBtn").click(function(){
        clearInterval(intv);
        prev();
        intv = setInterval(function(){ nextAni(); }, 3000);
    });
    $(".numBtn li").click(function(){
        clearInterval(intv);
        var idx = $(this).index()-1;
        for(var i=0;i<idx;i++){
            $(".banFrame li").eq(0).appendTo($(".banFrame"));
            $(".numBtn li").eq(0).appendTo($(".numBtn"));
        }
        next();
        intv = setInterval(function(){ nextAni(); }, 3000);
    });
    
    /*페이지2*/
     $(window).scroll( function(){
    
        /* Check the location of each desired element */
        $('.artCom').each( function(i){
            
            var bottom_of_object = $(this).offset().top + $(this).outerHeight();
            var bottom_of_window = $(window).scrollTop() + $(window).height();
            
            /* If the object is completely visible in the window, fade it it */
            if( bottom_of_window > bottom_of_object ){
                
                $(this).animate({'opacity':'1','top':'25%'},1500);
                    
            }
            
        }); 
    
    });
     /*페이지3*/
     $(window).scroll( function(){
    
        /* Check the location of each desired element */
        $('.box1,.box3').each( function(i){
            
            var bottom_of_object = $(this).offset().top + $(this).outerHeight();
            var bottom_of_window = $(window).scrollTop() + $(window).height();
            
            /* If the object is completely visible in the window, fade it it */
            if( bottom_of_window > bottom_of_object ){
                
                $(this).animate({'opacity':'1'},1500);
                    
            }
            
        }); 
    
    });
    $(window).scroll( function(){
    
        /* Check the location of each desired element */
        $('.box2,.box4').each( function(i){
            
            var bottom_of_object = $(this).offset().top + $(this).outerHeight();
            var bottom_of_window = $(window).scrollTop() + $(window).height();
            
            /* If the object is completely visible in the window, fade it it */
            if( bottom_of_window > bottom_of_object ){
                
                $(this).animate({'opacity':'1'},1500);
                    
            }
            
        }); 
    
    });
    
    /*페이지5*/
        var intv = setInterval(function() { nextAni(); }, 3000);
    
    function nextAni(){ //nextAni()함수 : 다음 이미지 모션 정의
        $(".banFrame2 li").eq(0).appendTo($(".banFrame2"));
        $(".banFrame2 li").eq(0).addClass("on");
        $(".banFrame2 li").not(":first-child").removeClass("on");
    }
    function prevAni(){
        $(".banFrame2 li").eq(2).prependTo($(".banFrame2"));
        $(".banFrame2 li").eq(0).addClass("on");
        $(".banFrame2 li").not(":first-child").removeClass("on");
    }
    
    var intv = setInterval(function() { nextAni2(); }, 3000);
    
    function nextAni2(){ //nextAni()함수 : 다음 이미지 모션 정의
        $(".banFrame3 li").eq(0).appendTo($(".banFrame3"));
        $(".banFrame3 li").eq(0).addClass("on");
        $(".banFrame3 li").not(":first-child").removeClass("on");
    }
    function prevAni2(){
        $(".banFrame3 li").eq(3).prependTo($(".banFrame3"));
        $(".banFrame3 li").eq(0).addClass("on");
        $(".banFrame3 li").not(":first-child").removeClass("on");
    }
    
    /*sns*/

          $('.insta_img').css('width',400*$('.insta_img img').size()+'px');//150*7+px == 총 넓이 1050px
         
         $('.insta_img img:last').prependTo('.insta_img');
         //A prependTo B : B의 앞에 A를 추가해라
         
         $('.insta_img').css('margin-left','-400px');
         
         $('#next').on('click',function(){
            $('.insta_img').animate({marginLeft:'-=400px'},'slow','swing',function(){
                //-=150px 자기 자신에서 -150해서 그 자리에 넣고... 
                $('.insta_img img:first').appendTo('.insta_img');
                $('.insta_img').css('margin-left','-400px');
            });
              return false;
        });
        $('#prev').on('click',function(){
            $('.insta_img').animate({marginLeft:'+=400px'},'slow','swing',function(){
                $('.insta_img img:last').prependTo('.insta_img');
                $('.insta_img').css('margin-left','-400px');
            });
            
        });
        
         setInterval(function(){
            $('#next').trigger('click') 
         },2000);
});

