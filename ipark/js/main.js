$(document).ready(function () {
    /*헤더*/
    $('#sub').hide();
    $('#main_nav').hover(function () {
        $(this).parent().find('#sub').slideDown();
        $(this).parent().hover(function () {

        }, function () {
            $(this).parent().find('#sub').slideUp();
        })
    });

    //스크롤시 메인메뉴 모션//

    var didScroll;
    var lastScrollTop = 0;
    var delta = 5;
    var navbarHeight = $('#hd').outerHeight();

    $(window).scroll(function (event) {
        didScroll = true;
    });

    setInterval(function () {
        if (didScroll) {
            hasScrolled();
            didScroll = false;
        }
    }, 250);

    function hasScrolled() {
        var st = $(this).scrollTop();
        if (Math.abs(lastScrollTop - st) <= delta) return;
        if (st > lastScrollTop && st > navbarHeight) {
            $('#hd').removeClass('nav-down').addClass('nav-up');
        } else {
            if (st + $(window).height() < $(document).height()) {
                $('#hd').removeClass('nav-up').addClass('nav-down');
            }
        }
        lastScrollTop = st;
    }


    /*페이지1*/
   /*
    $('.banFrame').each(function () {
        var $slides = $(this).find('img'),
            slideCount = $slides.length,
            currentIndex = 0;

        $slides.eq(currentIndex).fadeIn();

        setInterval(showNextSlide, 2500);

        function showNextSlide() {
            var nextIndex =
                (currentIndex + 1) % slideCount;
            $slides.eq(currentIndex).fadeOut(500);
            $slides.eq(nextIndex).fadeIn(500);
            currentIndex = nextIndex;
        }
    });*/
    var intv=setInterval(function(){
        nextAni();
    },2800);
    function nextAni(){
        $('.banFrame li').eq(0).appendTo($('.banFrame'));
        $('.banFrame li').eq(0).addClass('on');
        $('.banFrame li').not(':first-child').removeClass('on');
    }
    
    function prevAni(){
         $('.banFrame li').eq(4).prependTo($('.banFrame'));
        $('.banFrame li').eq(0).addClass('on');
        $('.banFrame li').not(':first-child').removeClass('on');
    }
    $(".next").click(function(){
        clearInterval(intv);
        nextAni(); 
        intv=setInterval(function(){ nextAni(); }, 2800);
    });
    $(".prev").click(function(){
        clearInterval(intv);
        prevAni(); 
        intv=setInterval(function(){ nextAni(); }, 2800);
    });

    /*로그인 창*/
    $('#loginOpen').click(function () {
        $('#loginFrm').fadeIn(600);
    });
    $('.loginWrap .close').click(function () {
        $('#loginFrm').fadeOut(600);
    });



});
