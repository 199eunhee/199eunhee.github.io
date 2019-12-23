$(document).ready(function(){
    
    $('.searchBtn').click(function(){
        $('.searchBox').fadeIn(800);
    });
    $('.s_close').click(function(){
        $('.searchBox').fadeOut(800);
    });
    $('.toggle').click(function(){
        $('#gnb').fadeIn(800);
    });
    $('.g_close').click(function(){
        $('#gnb').fadeOut(800);
    });
    
    //메인비주얼 슬라이드
    var intv = setInterval(function(){ nextAni(); }, 4500);
    function nextAni(){
        $(".banFrame").not(":animated").animate({"margin-left":"-100%"}, 900, function(){
            $(".banFrame li").eq(0).appendTo($(".banFrame"));
            $(".banFrame").css("margin-left", "0%");
            $(".numBtn li").eq(0).appendTo($(".numBtn"));
            $(".numBtn li").eq(0).addClass("on");
            $(".numBtn li").not(":first-child").removeClass("on");
        });
    }
    function prevAni(){
        $(".banFrame li").eq(4).prependTo($(".banFrame"));
        $(".banFrame").css("margin-left", "-100%");
        $(".banFrame").not(":animated").animate({"margin-left":"0%"}, 900);
        $(".numBtn li").eq(4).prependTo($(".numBtn"));
        $(".numBtn li").eq(0).addClass("on");
        $(".numBtn li").not(":first-child").removeClass("on");
    }
    $(".nextBtn").click(function(){
        clearInterval(intv);
        nextAni();
        intv = setInterval(function(){ nextAni(); }, 2950);
    });
    $(".prevBtn").click(function(){
        clearInterval(intv);
        prevAni();
        intv = setInterval(function(){ nextAni(); }, 2950);
    });
    $(".numBtn li").click(function(){
        clearInterval(intv);
        var idx = $(this).index()-1;
        for(var i=0;i<idx;i++){
            $(".banFrame li").eq(0).appendTo($(".banFrame"));
            $(".numBtn li").eq(0).appendTo($(".numBtn"));
        }
        nextAni();
        intv = setInterval(function(){ nextAni(); }, 2950);
    });
    
    //페이지2 사이드바 슬라이드
    var intv = setInterval(function(){ afterAni(); }, 3000);
    function afterAni(){
    $(".sideFrame").not(":animated").animate({"margin-left":"-100%"}, 900, function(){
            $(".sideFrame li").eq(0).appendTo($(".sideFrame"));
            $(".sideFrame").css("margin-left", "0%");
            
        });
    }
    function beforeAni(){
        $(".sideFrame li").eq(3).prependTo($(".sideFrame"));
        $(".sideFrame").css("margin-left", "-100%");
        $(".sideFrame").not(":animated").animate({"margin-left":"0%"}, 900);
    }
    
 //페이지3 슬라이드1
   var intv = setInterval(function(){ next2(); }, 3000);
    function next2(){
    $(".slide2_Frame").not(":animated").animate({"margin-left":"-100%"}, 900, function(){
            $(".slide2_Frame li").eq(0).appendTo($(".slide2_Frame"));
            $(".slide2_Frame").css("margin-left", "0%");
            
        });
    }
    function prev2(){
        $(".slide2_Frame li").eq(2).prependTo($(".slide2_Frame"));
        $(".slide2_Frame").css("margin-left", "-100%");
        $(".slide2_Frame").not(":animated").animate({"margin-left":"0%"}, 900);
    }
    //페이지3 슬라이드2
   var intv = setInterval(function(){ next3(); }, 3000);
    function next3(){
    $(".slide3_Frame").not(":animated").animate({"margin-left":"-100%"}, 900, function(){
            $(".slide3_Frame li").eq(0).appendTo($(".slide3_Frame"));
            $(".slide3_Frame").css("margin-left", "0%");
            
        });
    }
    function prev3(){
        $(".slide3_Frame li").eq(2).prependTo($(".slide3_Frame"));
        $(".slide3_Frame").css("margin-left", "-100%");
        $(".slide3_Frame").not(":animated").animate({"margin-left":"0%"}, 900);
    }
    
});