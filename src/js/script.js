$(document).ready(function() { // начало document.ready

	// $('.w-p_slider-list').bxSlider({
	// 	adaptiveHeight: true,
	// 	pagerCustom: '#slider-controls'
	// });
		var myPrArrowPrev = '<a href="javascript:;" class="my-arrow-prev slick-arrow" style=""><span><svg class="slider-svg-prev" width="10px" height="10px"><svg id="arrow" viewBox="0 0 9.4 12" width="100%" height="100%"><path class="st0" d="M0 12V9.2L5.1 6 0 2.8V0l4.2 2.6L9.4 6v.1L4.3 9.4 0 12z"></path></svg></svg></span></a>',
			myPrArrowNext = '<a href="javascript:;" class="my-arrow-next slick-arrow" style=""><span><svg class="slider-svg-prev" width="10px" height="10px"><svg id="arrow" viewBox="0 0 9.4 12" width="100%" height="100%"><path class="st0" d="M0 12V9.2L5.1 6 0 2.8V0l4.2 2.6L9.4 6v.1L4.3 9.4 0 12z"></path></svg></svg></span></a>',
			slickk = $(".project-slider__list"),
			slickkSm = $(".project-slider__list-sm");
		slickk.slick({
			centerMode: true,
			variableWidth: true,
			lazyLoad: "progressive",
			slidesToShow: 1,
			asNavFor: ".project-slider__list-sm",
			prevArrow: myPrArrowPrev,
			nextArrow: myPrArrowNext,
			responsive: [{
				breakpoint: 1100,
				settings: {}
			}]
		}), slickkSm.slick({
			centerMode: true,
			focusOnSelect: true,
			asNavFor: ".project-slider__list",
			arrows: !1,
			variableWidth: true,
			responsive: [{
				breakpoint: 768,
				settings: {}
			}]
		}), $(window).resize(function() {
			slickkSm.slick("resize"), slickk.slick("resize")
		}), $(window).on("orientationchange", function() {
			slickkSm.slick("resize"), slickk.slick("resize")
		}), $(".project-slider__number-all").html(slickk.slick("getSlick").slideCount), 
		$(".project-slider__number-where").html(slickk.slick("slickCurrentSlide") + 1), 
		slickk.on("afterChange", function(event, slick, currentSlide, nextSlide) {
			$(".project-slider__number-where").html(slickk.slick("slickCurrentSlide") + 1)
		}), $(document).on("keydown", function(e) {
			37 == e.keyCode && slickk.slick("slickPrev"), 39 == e.keyCode && slickk.slick("slickNext")
		})
	// var myPrArrowPrev = '<a href="javascript:; " class="my-arrow-prev"><span><svg class="slider-svg-prev" width="10px" height="10px"><use xlink:href="#arrow"></use></svg></span></a>',
	// 	myPrArrowNext = '<a href="javascript:;" class="my-arrow-next"><span><svg class="slider-svg-next" width="10px" height="10px"><use xlink:href="#arrow"></use></svg></span></a>';
	// $('.project-slider__list').slick({
	// 	centerMode: !0,
	// 	variableWidth: !0,
	// 	lazyLoad: "progressive",
	// 	slidesToShow: 1,
	// 	// slidesToScroll: 1,
	// 	arrows: true,
	// 	fade: true,
	// 	asNavFor: '.project-slider__list-sm',
	// 	prevArrow: myPrArrowPrev,
	// 	nextArrow: myPrArrowNext,
	//   });
	//   $('.project-slider__list-sm').slick({
	// 	slidesToShow: 5,
	// 	slidesToScroll: 1,
	// 	asNavFor: '.project-slider__list',
	// 	centerMode: !0,
	// 	focusOnSelect: !0,
	// 	variableWidth: !0,
	// 	arrows: !1
	//   });
			  
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
	
	var margin_left; 
	margin_left = $('.gallery-item:nth-child(1)').outerWidth(true);
	$('.gallery-item:nth-child(4)').
		css('margin-left', margin_left);
	
	var containerEl = document.querySelector('.works_gallery-items');
	var mixer = mixitup(containerEl);



}); // конец document.ready