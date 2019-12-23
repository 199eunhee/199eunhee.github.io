$(document).ready(function(){
		//toggle on/off
		$("#toggle_menu").hide();

		$("#toggle").click(function(){
			$("#toggle_menu").slideDown("slow");
		});

		$("#toggle_close").click(function(){
			$("#toggle_menu").slideUp("slow");
		});

		// 토글 아코디언 메뉴

		$("#accordion").accordion({
			active: false,
			collapsible: true,
		});
		
		$(".toggle_menu dt.nav").click(function(){
			$(".toggle_menu dt.nav").css("background", "none");
			$(".toggle_menu dt.nav").find("img").attr("src", "img/menu_arrow.png");
			$(this).css("background", "#00a7aa");
			$(this).find("img").attr("src", "img/menu_arrow_on.png");
		});

		// 1011화면 메인 메뉴 슬라이드 효과
		var oldImgId = "";
		$(".menu ul li").hover(function(){

			$("#"+oldImgId).find("img").attr("src", "img2/"+oldImgId+".png");
			var imgId = $(this).attr("id");
			$(this).find("img").attr("src", "img2/"+imgId+"_on.png");
			
			$(".menu").parent().find("#inner_menu").slideDown("normal").show();

			oldImgId=imgId;

			// 슬라이드 업 명령, 슬라이드 다운과 동시진행이 되지 않도록 내부적으로 선언
			$(".menu").parent().hover(
				function(){},
				function(){
					$(this).parent().find("#inner_menu").slideUp("fast");
			});

		}, function(){});

		/* 이미지 사이즈의 height값을 동적으로 추출 */
		var img=$("#container li.banner img").resize();
		var hi=img.height();
		$("#main_contents .main_ban").css("height", hi);

		$(window).on("resize", function(e) { 
			var imgHeight = $("#container li.banner img").height(); 
			$("#main_contents .main_ban").css("height", imgHeight);
		});

		/* 메인배너 Fade효과 */
		$("#container img").hide();
		$("#container img:first").show();
		$("#0").css("background","#5ebae4");

		var oldIndex = 1;					//hide 이미지를 관리 
		var newIndex;						//show 이미지를 관리
		var imgs = $("#container img");

		$(".btn_cl a").click(function(){
			newIndex = $(this).attr("id"); 
			
			$(imgs[oldIndex]).fadeOut("slow");
			$(imgs[newIndex]).fadeIn();
			
			$("#0").css("background","#ccc");
			$("#"+oldIndex).css("background","#ccc");
			$("#"+newIndex).css("background","#5ebae4");
			oldIndex = newIndex;
		});//end click

		var btns = $(".btn_cl a");				
		var btnsCount = $(btns).size();			
		var btnIndex = 1;						

		setInterval(function(){ 
			if(btnsCount == btnIndex){ btnIndex = 0; }
			$(btns[btnIndex]).trigger("click");
			btnIndex += 1;						
		}, 3000);	//end setInterval

	
	/*의사 슬라이드*/
	    var intv = setInterval(function() { nextAni(); }, 2800);
    
    function nextAni(){ //nextAni()함수 : 다음 이미지 모션 정의
        $(".banFrame li").eq(0).appendTo($(".banFrame"));
        $(".banFrame li").eq(0).addClass("on");
        $(".banFrame li").not(":first-child").removeClass("on");
    }
    function prevAni(){
        $(".banFrame li").eq(4).prependTo($(".banFrame"));
        $(".banFrame li").eq(0).addClass("on");
        $(".banFrame li").not(":first-child").removeClass("on");
    }
	
	
	
	
	});