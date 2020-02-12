 $(document).ready(function(){
    
   /*   //사이드 메뉴 
   $("html,body").animate({
      scrollTop: "0"
   });
   //제일 상단페이지부터 시작하게 실행 , 초기값은 0

   $(".gnb li a").eq(0).addClass("select");


   $(".gnb li a.menu1").on("click", function () {
      $("html,body").animate({
         scrollTop: "0"
      }, 600);
      
      return false;
   });
   $(".gnb li a.menu2").on("click", function () {
      $("html,body").animate({
         scrollTop: $("#page2").offset().top
      }, 600);
      
      return false;
   });
   $(".gnb li a.menu3").on("click", function () {
      $("html,body").animate({
         scrollTop: $("#page3").offset().top
      }, 600);
      
      return false;
   });
   $(".gnb li a.menu4").on("click", function () {
      $("html,body").animate({
         scrollTop: $("#page4").offset().top
      }, 600);
      
      return false;
   });

      $(".scroll").fadeIn();
         $(window).scroll(function() {
            var scrollValue = $(document).scrollTop();
            var p_idx = $(".page").index();
            var p_wh = $(".page").height();

            if (scrollValue <= 0) {
               $(".gnb li a").removeClass("select");
               $(".gnb li a.menu1").addClass("select");
               $(".scroll").fadeIn();
            } else if (scrollValue <= 1 * p_wh) { //1080
            
               $(".gnb li a").removeClass("select");
               $(".gnb li a.menu2").addClass("select");
               $(".scroll").fadeOut(500);
            } else if (scrollValue <= p_idx * p_wh) { //2160
            
               $(".gnb li a").removeClass("select");
               $(".gnb li a.menu3").addClass("select");
            } else {
        
               $(".gnb li a").removeClass("select");
               $(".gnb li a.menu4").addClass("select");
            }
         }); 
*/


   //소개 타이핑
     var typingBool = false; 
var typingIdx=0; 
var liIndex = 0;
var liLength = $(".typing-txt>ul>li").length;

// 타이핑될 텍스트를 가져온다 
var typingTxt = $(".typing-txt>ul>li").eq(liIndex).text(); 
typingTxt=typingTxt.split(""); // 한글자씩 자른다. 
if(typingBool==false){ // 타이핑이 진행되지 않았다면 
    typingBool=true; 
    var tyInt = setInterval(typing,100); // 반복동작 
} 
     
function typing(){ 
  $(".typing ul li").removeClass("on");
   $(".typing ul li").eq(liIndex).addClass("on");
  if(typingIdx<typingTxt.length){ // 타이핑될 텍스트 길이만큼 반복 
     $(".typing ul li").eq(liIndex).append(typingTxt[typingIdx]); // 한글자씩 이어준다. 
     typingIdx++; 
   } else{ if(liIndex<liLength-1){
     //다음문장으로  가기위해 인덱스를 1증가
       liIndex++; 
     //다음문장을 타이핑하기위한 셋팅
        typingIdx=0;
        typingBool = false; 
        typingTxt = $(".typing-txt>ul>li").eq(liIndex).text(); 
       
     //다음문장 타이핑전 1초 쉰다
         clearInterval(tyInt);
          //타이핑종료
     
         setTimeout(function(){
           //1초후에 다시 타이핑 반복 시작
           tyInt = setInterval(typing,100);
         },1000);
        } else if(liIndex==liLength-1){
          
         //마지막 문장까지 써지면 반복종료
           clearInterval(tyInt);
        }
    } 
}  
   
  
   
     //스킬 그래프
        $(window).scrollTop( function(){
       $('.gr_ps').delay(500).animate({width: '95%'},1000);
       $('.gr_html').delay(500).animate({width: '90%'},1000);
       $('.gr_ja').delay(500).animate({width: '75%'},1000);
            $('.gr_js').delay(500).animate({width: '75%'},1000);
            $('.gr_jq').delay(500).animate({width: '75%'},1000);
     });
     
 
 
         $("#mixItUp").mixItUp({
            selector: {
               filter: ".filter"
            }
         });

         function pop(idx) {
            state = 1;
            $("#black").fadeIn();
            $('.pop').eq(idx).fadeIn();
            //      $('html, body').css({'overflow' : 'hidden'}); //스크롤 없애기
         }

         function pop_close() {
            state = 0;
            $("#black").fadeOut();
            $('.pop').fadeOut();
            //      $('html, body').css({'overflow' : 'visible'});
         }
         
         $("#black,.pop").hide();
         $(".container .mix").on("click", function() {
            pop($(this).index());
            return false;

            //html내부 내용을 변경하거나 가져올 수 있다.
         });
         $("#black .close").on("click", function() {
            pop_close($(this).index());
            return false;
         });
 
     
      
       });/*끝*/


     
        
 
        