$(document).ready(function() { // начало document.ready

	$('.w-p_slider-list').bxSlider({
		pagerCustom: '#slider-controls'
	});
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
	
	var containerEl = document.querySelector('.works_gallery-items');
	var mixer = mixitup(containerEl);



}); // конец document.ready