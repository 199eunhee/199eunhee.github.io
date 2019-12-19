$(document).ready(function(){
$(window).scroll( function(){
    
        /* Check the location of each desired element */
        $('#page2 .txtBox').each( function(i){
            
            var bottom_of_object = $(this).offset().top + $(this).outerHeight();
            var bottom_of_window = $(window).scrollTop() + $(window).height();
            
            /* If the object is completely visible in the window, fade it it */
            if( bottom_of_window > bottom_of_object ){
                
                $(this).animate({'opacity':'1','top':'30%'},1500);
                    
            }
            
        }); 
    
    });
    $(window).scroll( function(){
    
        /* Check the location of each desired element */
        $('#page3 img').each( function(i){
            
            var bottom_of_object = $(this).offset().top + $(this).outerHeight();
            var bottom_of_window = $(window).scrollTop() + $(window).height();
            
            /* If the object is completely visible in the window, fade it it */
            if( bottom_of_window > bottom_of_object ){
                
                $(this).animate({'opacity':'1','top':'15%'},1000);
                    
            }
            
        }); 
    
    });
    
    
    
    
    $(window).scroll( function(){
    
        /* Check the location of each desired element */
        $('.col4').each( function(i){
            
            var bottom_of_object = $(this).offset().top + $(this).outerHeight();
            var bottom_of_window = $(window).scrollTop() + $(window).height();
            
            /* If the object is completely visible in the window, fade it it */
            if( bottom_of_window > bottom_of_object ){
                
                $(this).animate({'opacity':'1','top':'5%'},1000);
                    
            }
            
        }); 
    
    });
    
    
    
});