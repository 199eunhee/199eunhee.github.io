$(document).ready(function(){      

/*미니뉴스스크립트*/
         var intv=setInterval(function(){
       afterAni(); 
    },2800);
    function afterAni(){
        $('#images').animate({'margin-left':'-100%'},800, function(){
           $('#images li').eq(0).appendTo($('#images'));
            $('#images').css('margin-left','0%');  });
    }
                             
    function beforeAni(){
        $('#images li').eq(2).prependTo($('#images'));
        $('#images').css('margin-left','-100%');
  $('#images').not(':animated').animate({'margin-left':'0%'},800);
    }
        
         $(".leftBtn").click(function(){
        clearInterval(intv);
        afterAni(); 
        intv=setInterval(function(){ afterAni(); }, 2900);
    });
    $(".rightBtn").click(function(){
        clearInterval(intv);
        beforeAni(); 
        intv=setInterval(function(){ beforeAni(); }, 2900);
    });
    
            /* setInterval  함수를 반복해라 clearInterval:함수를 멈춰라 
               이거 위에 줄은 다 외우는 게 시험 볼 때 도움됨 ㅎ*/
                var intv=setInterval(function(){ nextAni(); }, 2900);

    //함수는 정의부로는 실행되지 않으며, 호출시에만 실행
    function nextAni(){ //nextAni()함수 : 다음 이미지 모션 정의
        $(".img_box li").eq(0).appendTo($(".img_box"));
        $(".img_box li").eq(0).addClass("on");
        $(".img_box li").not(":first-child").removeClass("on");
    }
    function prevAni(){
        $(".img_box li").eq(2).prependTo($(".img_box"));
        $(".img_box li").eq(0).addClass("on");
        $(".img_box li").not(":first-child").removeClass("on");
    }
    $(".nextBtn").click(function(){
        clearInterval(intv);
        nextAni(); 
        intv=setInterval(function(){ nextAni(); }, 2900);
    });
    $(".prevBtn").click(function(){
        clearInterval(intv);
        prevAni(); 
        intv=setInterval(function(){ nextAni(); }, 2900);
    }); 

        /*모바일 검색박스 오른쪽 사이드*/
        $(document).ready(function() {
            $(".mobile_search_btn").click(function() {
                $("#mobile_box").addClass("on");
            });
            $("#mobile_box .close2").click(function() {
                $("#mobile_box").removeClass("on")
            });
}); 
   });