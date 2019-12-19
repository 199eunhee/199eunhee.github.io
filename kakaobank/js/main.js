$(document).ready(function(){

     $(window).scroll( function(){
    
        /* Check the location of each desired element */
        $('.pageCom,h3').each( function(i){
            
            var bottom_of_object = $(this).offset().top + $(this).outerHeight();
            var bottom_of_window = $(window).scrollTop() + $(window).height();
            
            /* If the object is completely visible in the window, fade it it */
            if( bottom_of_window > bottom_of_object ){
                
                $(this).animate({'opacity':'1'},500);
                    
            }
            
        }); 
    
    });
    //페이지3
     $(window).scroll( function(){
    
        /* Check the location of each desired element */
        $('.ico1').each( function(i){
            
            var bottom_of_object = $(this).offset().top + $(this).outerHeight();
            var bottom_of_window = $(window).scrollTop() + $(window).height();
            
            /* If the object is completely visible in the window, fade it it */
            if( bottom_of_window > bottom_of_object ){
                
                $(this).animate({'opacity':'1','left':'20%'},500);
                    
            }
            
        }); 
    
    });
     $(window).scroll( function(){
    
        /* Check the location of each desired element */
        $('.ico2').each( function(i){
            
            var bottom_of_object = $(this).offset().top + $(this).outerHeight();
            var bottom_of_window = $(window).scrollTop() + $(window).height();
            
            /* If the object is completely visible in the window, fade it it */
            if( bottom_of_window > bottom_of_object ){
                
                $(this).animate({'opacity':'1','left':'44%'},500);
                    
            }
            
        }); 
    
    });
    //페이지4
         $(window).scroll( function(){
    
        /* Check the location of each desired element */
        $('.ico4').each( function(i){
            
            var bottom_of_object = $(this).offset().top + $(this).outerHeight();
            var bottom_of_window = $(window).scrollTop() + $(window).height();
            
            /* If the object is completely visible in the window, fade it it */
            if( bottom_of_window > bottom_of_object ){
                
                $(this).animate({'opacity':'1'},600);
                    
            }
            
        }); 
    
    });
     $(window).scroll( function(){
    
        /* Check the location of each desired element */
        $('.txt_img1,.txt_img2').each( function(i){
            
            var bottom_of_object = $(this).offset().top + $(this).outerHeight();
            var bottom_of_window = $(window).scrollTop() + $(window).height();
            
            /* If the object is completely visible in the window, fade it it */
            if( bottom_of_window > bottom_of_object ){
                
                $(this).animate({'opacity':'1'},800);
                    
            }
            
        }); 
    
    });
    //페이지6
     $(window).scroll( function(){
    
        /* Check the location of each desired element */
        $('.ico5').each( function(i){
            
            var bottom_of_object = $(this).offset().top + $(this).outerHeight();
            var bottom_of_window = $(window).scrollTop() + $(window).height();
            
            /* If the object is completely visible in the window, fade it it */
            if( bottom_of_window > bottom_of_object ){
                
                $(this).animate({'opacity':'1','right':'0'},600);
                    
            }
            
        }); 
    
    });
    //페이지8,9
    
   $(window).scroll( function(){
    
        /* Check the location of each desired element */
        $('.ico6,.ico9').each( function(i){
            
            var bottom_of_object = $(this).offset().top + $(this).outerHeight();
            var bottom_of_window = $(window).scrollTop() + $(window).height();
            
            /* If the object is completely visible in the window, fade it it */
            if( bottom_of_window > bottom_of_object ){
                
                $(this).animate({'opacity':'1'},800);
                    
            }
            
        }); 
    
    });
    
    
    
    
    
    
});