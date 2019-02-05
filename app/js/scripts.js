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

});