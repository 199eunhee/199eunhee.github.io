 $(document).ready(function() {
            var ck1 = true,
                ck2 = true; //true라는 값을 ck1이라는 변수에 저장하세요.

            //토글버튼 클릭 시 펼침메뉴 열기/닫기  $("선택자").메소드(function(){}) 
            $(".lst_btn").click(function() {

                if (ck1) {
                    $(".collap").addClass("on");
                    $(".lst_btn").addClass("on"); //x자 모양
                } else {
                    $(".collap").removeClass("on");
                    $(".lst_btn").removeClass("on");

                }
                ck1 = !ck1; //true=false
            });

            //언어 선택메뉴, 한국어박스상자를 클릭하면 en,jp가 hright0 에서 64로
            $(".this_lang").click(function() {
                if (ck2) {
                    $(".lang_list").addClass("on");
                    $(".lang").addClass("on"); //h:106
                    $(".this_lang").addClass("on");
                } else {
                    $(".lang_list").removeClass("on");
                    $(".lang").removeClass("on");
                    $(".this_lang").removeClass("on");
                }
                ck2 = !ck2;
            });
       
        //스크롤시 메인메뉴 모션//
        $(window).scroll(function() {
            var sc_top = parseInt($("body, html").scrollTop());
            if (sc_top >= 500 && sc_top < 1200) { //스크롤양이 500px - 1199
                $(".hd").addClass("on");
                $(".hd").removeClass("off");
            } else if (sc_top >= 1200) { //스크롤양이 1200px 이상 일 때
                $(".hd").removeClass("on");
                $(".hd").addClass("off");
            } else { //스크롤위치 0-499px
                $(".hd").removeClass("on");
                $(".hd").removeClass("off");
            }
            
              });
            
            //페이지1 슬라이드
           var intv = setInterval(function() {
               nextAni(); }, 3000);
    function nextAni() {
        $(".conBox").not(":animated").animate({"margin-left":"-100%"}, 800, function(){
            $(".conBox li").eq(0).appendTo($(".conBox"));
            $(".conBox").css("margin-left", "0%");
        });
    }
    function prevAni(){
        $(".conBox li").eq(2).prependTo($(".conBox"));
        $(".conBox").css("margin-left", "-100%");
        $(".conBox").not(":animated").animate({"margin-left":"0%"}, 800);
    }
    $(".next").click(function(){
        clearInterval(intv);
        nextAni();
        intv = setInterval(function() { nextAni(); }, 3000);
    });
    $(".prev").click(function(){
        clearInterval(intv);
        prevAni();
        intv = setInterval(function() { nextAni(); }, 3000);
    });
     
     //페이지 2 첫 번째 슬라이더
        $(".btn_box3 li").click(function(i){
            $(this).addClass("on"); //내 자신의 on, 배경색 : 흰색이 되라 
            $(this).siblings().removeClass("on");//li의 sibling(자손인) button의 on(흰 배경을 제거해라 )
            var idx = $(this).index();
            var wd = $('.vs_lst2 li').width();
            $(".vs_lst2 li").eq(idx).addClass("on");
            $(".vs_lst2 li").eq(idx).siblings().removeClass("on");
            $(".vs_lst2").not(":animated").animate({marginLeft: idx*-1*wd},300);
          
        });
     
 /*sns*/

          $('.insta_img').css('width',200*$('.insta_img img').size()+'px');//150*7+px == 총 넓이 1050px
         
         $('.insta_img img:last').prependTo('.insta_img');
         //A prependTo B : B의 앞에 A를 추가해라
         
         $('.insta_img').css('margin-left','-200px');
         
         $('#next').on('click',function(){
            $('.insta_img').animate({marginLeft:'-=200px'},'slow','swing',function(){
                //-=150px 자기 자신에서 -150해서 그 자리에 넣고... 
                $('.insta_img img:first').appendTo('.insta_img');
                $('.insta_img').css('margin-left','-200px');
            });
              return false;
        });
        $('#prev').on('click',function(){
            $('.insta_img').animate({marginLeft:'+=200px'},'slow','swing',function(){
                $('.insta_img img:last').prependTo('.insta_img');
                $('.insta_img').css('margin-left','-200px');
            });
            
        });
        
         setInterval(function(){
            $('#next').trigger('click') 
         },1500);
     
     
      });
     
            
    
      
       