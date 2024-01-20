$('document').ready(function(){
	
  $('.slider').slick({
	  arrows: false,
	  dots: true
    
  });
	

$('.popup-gallery').magnificPopup({
 delegate: 'a',
 type: 'image'
 });
	

	$(window).scroll(function(){
		var fix=$('.page_header')
		
		if($(this).scrollTop()>600){
			fix.addClass('fix')
		}
		else{
			fix.removeClass('fix')
		}
	})
	
	
	$(window).scroll(function(){
		var fix_min=$('.pushy')
		
		if($(this).scrollTop()>600){
			fix_min.addClass('fix_min')
		}
		else{
			fix_min.removeClass('fix_min')
		}
	})
	
	
	
});
