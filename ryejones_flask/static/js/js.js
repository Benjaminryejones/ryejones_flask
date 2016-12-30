$(document).ready(function() {
	$('.homepage-wrapper').css('height', ($(window).height()-60) + 'px');
	$('.homepage-wrapper').css('width', $(window).width()+'px');

	$(window).resize(function() {
		$('.homepage-wrapper').css('height', ($(window).height()-60) + 'px');
		$('.homepage-wrapper').css('width', $(window).width()+'px');
	});
});