$(document).ready(function(){
  
  var sBtn = $(".menu li a");    //  ul > li 이를 sBtn으로 칭한다. (클릭이벤트는 li에 적용 된다.)
  sBtn.find("a").click(function(){   // sBtn에 속해 있는  a 찾아 클릭 하면.
   sBtn.removeClass("on");     // sBtn 속에 (active) 클래스를 삭제 한다.
   $(this).parent().addClass("on"); // 클릭한 a에 (active)클래스를 넣는다.
  });
    
    var welcomSection = $('.welcome-section'),
  		enterButton = welcomSection.find('.enter-button');
      
      setTimeout(function(){
      	welcomSection.removeClass('content-hidden');
      },800);
      
      enterButton.on('click',function(e){
      	e.preventDefault();
        welcomSection.addClass('content-hidden').fadeOut();
      })
    
 
});