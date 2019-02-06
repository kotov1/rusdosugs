$(function() {

	$('.s-menu-btn').click(function(){
		$(this).toggleClass('toggle');
		$('.s-services-btn').removeClass('toggle');
		$('.s-left').removeClass('opened');
		$('.s-menu__list').toggleClass('opened');
	});
	$('.s-services-btn').click(function(){
		$(this).toggleClass('toggle');
		$('.s-menu-btn').removeClass('toggle');
		$('.s-menu__list').removeClass('opened');
		$('.s-left').toggleClass('opened');
	});

	$('.s-preview__slider').slick({
		slidesToShow: 1,
		slidesToScroll: 1,
		arrows: false,
		fade: true,
		asNavFor: '.s-preview__nav',
		lazyLoad: 'ondemand'
	  });
	$('.s-preview__nav').slick({
		slidesToShow: 4,
		slidesToScroll: 1,
		asNavFor: '.s-preview__slider',
		focusOnSelect: true
	});

});