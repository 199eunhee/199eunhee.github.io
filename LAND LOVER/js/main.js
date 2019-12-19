 $(document).ready(function(){
            var duration=600;
            var $aside=$('.main aside');
            var $asideBtn=$aside.find('button').on('click',function(){
                $aside.toggleClass('open');
                if($aside.hasClass('open')){//화면에 오픈된 상태를 보이게하려면 
                   $aside.stop().animate({left:"0px"},duration);
                    //$aside가 레프트 0에 위치해서 화면 안쪽에 보이게 
                    $asideBtn.find('img').attr('src','img/prevBtn.png')
                   }else{//화면에 보이지 않게하려면 
                   $aside.stop().animate({left:"-100%"},duration);
                       $asideBtn.find('img').attr('src','img/nextBtn.png')  
                   }
            });
     
     $('.search_btn').click(function(){
        $('.seach_page').fadeIn(600); 
     });
      $('.search_close').click(function(){
        $('.seach_page').fadeOut(600); 
     });
   
     
   
     //페이지3 슬라이드
      var cnt=$('.banFrame a').length;
        var wd=parseInt($('page3').width());
        var itv=setInterval(function(){
            rAni();
        },4000);
         function rAni(){
             $('.banFrame').animate({"margin-left":"-"+wd+"px"},900,function(){
                 $('.banFrame li').eq(0).appendTo($('.banFrame'));
                 $('.banFrame').css('margin-left','0px');
             });  
         }
        
        function lAni(){
            $('.banFrame li').eq(cnt-1).prependTo($('.banFrame'));
            $('.banFrame').css('margin-left','-'+wd+'px');
            
            $('.banFrame').not(':animated').animate({
                "margin-left":"0px"
            },900);
        }
        $('.btn_box1 li.left').on('click',function(){
            clearInterval(itv);//자동함수 해제
            rAni();// rAni();를 실행해라
            itv=setInterval(function(){rAni();},4000);
        });
        $('.btn_box1 li.right').on('click',function(){
            clearInterval(itv);
             lAni();
            itv=setInterval(function(){
                lAni();
            },900);
        });
     
     //페이지 4 자동차 색상변경
      var wd=parseInt($('#page4').width());
        $('#btn_box2 button').on('click',function(){
           var but=parseInt($(this).attr('data-val'))*wd;//1번사진 0,2번 사진 1-->200,3번 사진이 2--->400...로 저장
            $('.img_box').stop().animate({
                "margin-left":"-"+but+"px"
            },800);
        });
     
     //탭메뉴
      $('.content li').hide();/*처음에는 모든 본문이 숨겨지게 */
         $('#web1').show();/*첫 번째 본문만 보여지게*/
         $('.title li a').on('click',function(){
       
             $('.title a').removeClass('select');
             $('.content li').slideUp(600);
             $(this).addClass('select');
             $($(this).attr('href')).slideDown(600);
             
             return false;
         });
     
     
  
        });
    