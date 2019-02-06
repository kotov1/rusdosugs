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


	var dataUrl,
		  selectChanged = false;
	$('.s-choose__select').change(function() {
		dataUrl = $(this).find(":selected").data('url');
		selectChanged = true;
	});
	$('.s-choose__btn').on('click', function () { 
		if (!selectChanged) {
			window.location = $(this).closest('.s-choose__select').find('.current').data('url'); 
		} else {
			window.location = dataUrl; 
		}
	});


	$('.s-js-callback').magnificPopup({
		items: {
			src: '.s-modal',
			type: 'inline'
		}
	});


	$(window).scroll(function () {
		if ($(this).scrollTop() > 147) {	
			$('.s-scroll-btn-wrap').fadeIn();
		} else {
			$('.s-scroll-btn-wrap').fadeOut();
		}
	});
	$('.s-scroll-btn').click(function () {
		$('body,html').animate({scrollTop: 0}, 500);
		return false;
	});	


	if(($('.s-js-mask').length > 0)){
		$('.s-js-mask').inputmask("+7 (999) 999-99-99");
	}


	$(".s-content-img").click(function(){
		if ($('.s-modal-img').hasClass('s-modal-img--full')){

			$('.s-modal-img').empty().removeClass('s-modal-img--full');

		}else{
			if($(window).width() > 500 ) {
			$( document.body ).append('<div class="modal-overlay"></div>');
			var mfpImg = $(this).attr('src');
			$('.s-modal-img').append('<img src ='+mfpImg+'>');
			$('.s-modal-img').append('<div id="modal-close"></div>');
			$('.s-modal-img img').css({"width":"350px","margin":"0","height":"220px","display":"block"});

			$('.s-modal-img').addClass('s-modal-img--full');

			$('#modal-close').click(function(){
				$('.s-modal-img').empty().removeClass('s-modal-img--full');
			});
			}
		}
	});


	$(document).mouseup(function (e){
		var div = $(".s-modal-img");
		if ( (!div.is(e.target) && div.has(e.target).length === 0) && div.hasClass('s-modal-img--full') ) {

			$('.s-modal-img').empty().removeClass('s-modal-img--full');

		}
	});


});