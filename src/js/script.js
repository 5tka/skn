$(document).ready(function() { // начало document.ready

	$('.main__slider').owlCarousel({
		items: 1,
		nav: true
	});
	$('.portfolio-gallery__slider').owlCarousel({
		items: 3,
		nav: true
	});
	$('.clients__slider').owlCarousel({
		items: 5,
		nav: true
	});
	$('.reviews__slider').owlCarousel({
		items: 3,
		nav: true
	});
	
	var margin_left; 
	margin_left = $('.gallery-item:nth-child(1)').outerWidth(true);
	$('.gallery-item:nth-child(4)').
		css('margin-left', margin_left);
	

    
}); // конец document.ready