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
		// items: 3,
		nav: true,
		responsive : {
			0 : {
				items : 1
			},
			480 : {
				items : 2
			},
			768 : {
				items : 3
			}
		}
	});
	$('.clients__slider').owlCarousel({
		// items: 5,
		nav: true,
		responsive : {
			0 : {
				items : 1
			},
			380 : {
				items : 2
			},			
			480 : {
				items : 3
			},
			768 : {
				items : 4
			},
			1025: {
				items: 5
			}
		}
	});
	$('.reviews__slider').owlCarousel({
		// items: 3,
		nav: true,
		responsive : {
			0 : {
				items : 1
			},
			600 : {
				items : 2
			},
			850 : {
				items : 3
			}
		}
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

	$('.js_validation__form').submit(function(event) {
		event.preventDefault();
		var validation = false;

		$('.js_validation__form').find('.js_validation_object').each(function (indx, element) {
			if ($(element).val() == '' ) {
				validation = false
				$(element).closest('.js_validation_item').addClass('unvalid')
			} else {
				validation = true
				$(element).closest('.js_validation_item').removeClass('unvalid')
			}

		})

		return validation ? true : false;
	});

	var margin_left; 
	margin_left = $('.gallery-item:nth-child(1)').outerWidth(true);
	$('.gallery-item:nth-child(4)').
		css('margin-left', margin_left);
	
	var containerEl = document.querySelector('.works_gallery-items');
	var mixer = mixitup(containerEl);



}); // конец document.ready