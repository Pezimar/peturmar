$(document).ready(function() {
	  $('.postcontent_petun > p').animate({'opacity':'0.1'}, 100);
	  /* Every time the window is scrolled ... */
	  $(window).scroll( function(){
	  
			/* Check the location of each desired element */
			$('.postcontent_petun > p').each( function(i){
				  
				  var bottom_of_object = $(this).position().top;
				  var bottom_of_window = $(window).scrollTop() + $(window).height();

				  /* If the object is completely visible in the window, fade it it */
				  if( bottom_of_window - 80 > bottom_of_object ){
						
						$(this).animate({'opacity':'1'}, 300);

				  }
				  
			});
	  
	  });
	  var trigger = $('.hamburger'),
		  overlay = $('.overlay'),
	   isClosed = false;

	  trigger.click(function () {
		  hamburger_cross();		  
	  });

	  function hamburger_cross() {
		  if (isClosed == true) {		 
			overlay.hide();
			trigger.removeClass('is-open');
			trigger.addClass('is-closed');
			isClosed = false;
		  } else {   
			overlay.show();
			trigger.removeClass('is-closed');
			trigger.addClass('is-open');
			isClosed = true;
		  }
	}
	
	$('[data-toggle="offcanvas"]').click(function () {
			$('#wrapper').toggleClass('toggled');
	});   
});