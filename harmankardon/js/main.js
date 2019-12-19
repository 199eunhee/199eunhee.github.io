$(document).ready(function(){
	//페이지 1 첫 번째 슬라이더
        $(".btn_box1 li").click(function(i){
            $(this).addClass("on"); //내 자신의 on, 배경색 : 흰색이 되라 
            $(this).siblings().removeClass("on");//li의 sibling(자손인) button의 on(흰 배경을 제거해라 )
            var idx = $(this).index();
            var wd = $('.vs_lst li').width();
            $(".vs_lst li").eq(idx).addClass("on");
            $(".vs_lst li").eq(idx).siblings().removeClass("on");
            $(".vs_lst").not(":animated").animate({marginLeft: idx*-1*wd},300);
          
        });
    
    
    /*페이지2 슬라이드*/
        var intv = setInterval(function() { nextAni(); }, 3000);
    function nextAni() {
        $(".banFrame").not(":animated").animate({"margin-left":"-100%"}, 800, function(){
            $(".banFrame li").eq(0).appendTo($(".banFrame"));
            $(".banFrame").css("margin-left", "0%");
        });
    }
    function prevAni(){
        $(".banFrame li").eq(4).prependTo($(".banFrame"));
        $(".banFrame").css("margin-left", "-100%");
        $(".banFrame").not(":animated").animate({"margin-left":"0%"}, 800);
    }
    $(".nextBtn").click(function(){
        clearInterval(intv);
        nextAni();
        intv = setInterval(function() { nextAni(); }, 3000);
    });
    $(".prevBtn").click(function(){
        clearInterval(intv);
        prevAni();
        intv = setInterval(function() { nextAni(); }, 3000);
    });
    
    /*페이지3 페이드*/
        $(window).scroll( function(){
    
        /* Check the location of each desired element */
        $('.hideme').each( function(i){
            
            var bottom_of_object = $(this).offset().top + $(this).outerHeight();
            var bottom_of_window = $(window).scrollTop() + $(window).height();
            
            /* If the object is completely visible in the window, fade it it */
            if( bottom_of_window > bottom_of_object ){
                
                $(this).animate({'opacity':'1'},500);
                    
            }
            
        }); 
    
    });
    /*페이지6*/
         $(window).scroll( function(){
    
        /* Check the location of each desired element */
        $('.fade.item1,.fade.item3,.fade.item5').each( function(i){
            
            var bottom_of_object = $(this).offset().top + $(this).outerHeight();
            var bottom_of_window = $(window).scrollTop() + $(window).height();
            
            /* If the object is completely visible in the window, fade it it */
            if( bottom_of_window > bottom_of_object ){
                
                $(this).animate({'opacity':'1','left':'0%'},800);
                    
            }
            
        }); 
    
    });
     $(window).scroll( function(){
    
        /* Check the location of each desired element */
        $('.fade.item2,.fade.item4').each( function(i){
            
            var bottom_of_object = $(this).offset().top + $(this).outerHeight();
            var bottom_of_window = $(window).scrollTop() + $(window).height();
            
            /* If the object is completely visible in the window, fade it it */
            if( bottom_of_window > bottom_of_object ){
                
                $(this).animate({'opacity':'1','right':'0%'},800);
                    
            }
            
        }); 
    
    });

    
});