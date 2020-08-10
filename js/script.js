$(document).ready(function() {
	$('.header__burger').click(function(event) {
		$('.header__burger,.header__menu').toggleClass('active');
		$('body').toggleClass('.lock');
	});
	$('.header__link a').click(function(event) {
		$('.header__burger,.header__menu').toggleClass('active');
	});


	/*плавный переход к одной секции*/

	$('.header__btn').on('click', function(e){
	  $('html,body').stop().animate({ scrollTop: $('#contact').offset().top }, 600);
	  e.preventDefault();
	});


	/*плавный переход к секции*/

	$('.header__list a[href^="#"]').on('click', function(event) {
		event.preventDefault();
		var sc = $(this).attr("href"),
			dn = $(sc).offset().top;
		$('html, body').animate({
			scrollTop: dn
		}, 600);
	});




	$('.slider-one').owlCarousel({
    loop:true,
    nav:false,
    items: 1,
	});


	/*галерея*/

	$('.gallery').lightGallery({
		selector:'a'
	});


	/*открытие блока при нажатии*/

	$('#hover-btn-1').click(function(e) {
		e.preventDefault();
		$('#descr-1').toggleClass('show');
	});
	$('#hover-btn-2').click(function(e) {
		e.preventDefault();
		$('#descr-2').toggleClass('show');
	});
	$('#hover-btn-3').click(function(e) {
		e.preventDefault();
		$('#descr-3').toggleClass('show');
	});
	$('#hover-btn-4').click(function(e) {
		e.preventDefault();
		$('#descr-4').toggleClass('show');
	});
	$('#hover-btn-5').click(function(e) {
		e.preventDefault();
		$('#descr-5').toggleClass('show');
	});
	$('#hover-btn-6').click(function(e) {
		e.preventDefault();
		$('#descr-6').toggleClass('show');
	});
	$('a.descr__close').click(function(e) {
		e.preventDefault();
		$('.service-block__descr').removeClass('show');
	});


	$('.slider-two').owlCarousel({
    loop:true,
    nav:true,
    items: 1,
	});


	$(window).scroll(function() {
		if ($(this).scrollTop() > 100) {
			$('#scroll-up').fadeIn();
		}else {
			$('#scroll-up').fadeOut();
		}
	});
	$('#scroll-up').click(function() {
		$('body,html').animate({
			scrollTop: 0
		}, 500);
		return false;
	});
});