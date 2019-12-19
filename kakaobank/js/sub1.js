$(document).ready(function(){
    var intv=setInterval(function(){
        nextAni();
    },2800);
    function nextAni(){
        $('.vsFrame li').eq(0).appendTo($('.vsFrame'));
        $('.vsFrame li').eq(0).addClass('on');
        $('.vsFrame li').not(':first-child').removeClass('on');
    }
});