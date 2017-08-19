$(document).ready(function() { // начало document.ready

	$('.w-p_slider-list').bxSlider({
		pagerCustom: '#slider-controls'
	});
	$('.main__slider').owlCarousel({
		items: 1,
		nav: true,
		dots: false,
		autoplay: true,
		autoplayHoverPause: true,
		loop: true
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
	$('.js_phone-mask').mask("+7(999)999-99-99");

	$('.js_mob-menu__close').click(function(event) {
		event.preventDefault();
			$('.js_mob-menu').removeClass('opened')

		return false;
	})
	
	$('.js_mob-menu__open').click(function(event) {
		event.preventDefault();
			$('.js_mob-menu').addClass('opened')
		return false;
	})

	var margin_left; 
	margin_left = $('.gallery-item:nth-child(1)').outerWidth(true);
	$('.gallery-item:nth-child(4)').
		css('margin-left', margin_left);
	
	var containerEl = document.querySelector('.works_gallery-items');
	var mixer = mixitup(containerEl);



}); // конец document.ready