// INDEX.js

// CALESITA

var main = function() {
	$('.arrow-next').click(function() {
		var currentSlide = $('.active-slide');
		var nextSlide = currentSlide.next();

		var currentDot = $('.active-dot');
		var nextDot = currentDot.next();

		if (nextSlide.length == 0) {//activo el "loop"
			nextSlide = $('.slide').first();
			nextDot = $('.dot').first();
		}

		currentSlide.fadeOut(600).removeClass('active-slide');
		nextSlide.fadeIn(600).addClass('active-slide');

		currentDot.removeClass('active-dot');
		nextDot.addClass('active-dot');

		$('html, body').animate({//lo' atamo' con alambre para que el scroll quede ahí
			scrollTop : $("#blogsstron").offset().top
		}, 600);
	});

	$('.arrow-prev').click(function() {
		var currentSlide = $('.active-slide');
		var prevSlide = currentSlide.prev();

		var currentDot = $('.active-dot');
		var prevDot = currentDot.prev();

		if (prevSlide.length === 0) {//activo el loop
			prevSlide = $('.slide').last();
			prevDot = $('.dot').last();
		}

		currentSlide.fadeOut(600).removeClass('active-slide');
		prevSlide.fadeIn(600).addClass('active-slide');

		currentDot.removeClass('active-dot');
		prevDot.addClass('active-dot');

		$('html, body').animate({
			scrollTop : $("#blogsstron").offset().top
		}, 600);

	});

};

// GALLERY

var galery = function() {

	$('#hiromi').click(function() {
		('#hiromi').removeClass('.imgblog');
	});

	$('.flecha-next').click(function() {
		var currentSlide = $('.active-eslide');
		var nextSlide = currentSlide.next();

		var currentDot = $('.active-punto');
		var nextDot = currentDot.next();

		if (nextSlide.length == 0) {
			nextSlide = $('.eslide').first();
			nextDot = $('.punto').first();
		}

		currentSlide.fadeOut(600).removeClass('active-eslide');
		nextSlide.fadeIn(600).addClass('active-eslide');

		currentDot.removeClass('active-punto');
		nextDot.addClass('active-punto');

		$('html, body').animate({
			scrollTop : $("#oleostron").offset().top
		}, 600);

	});

	$('.flecha-prev').click(function() {
		var currentSlide = $('.active-eslide');
		var prevSlide = currentSlide.prev();

		var currentDot = $('.active-punto');
		var prevDot = currentDot.prev();

		if (prevSlide.length === 0) {
			prevSlide = $('.eslide').last();
			prevDot = $('.punto').last();
		}

		$('html, body').animate({
			scrollTop : $("#oleostron").offset().top
		});

		currentSlide.fadeOut(600).removeClass('active-eslide');
		prevSlide.fadeIn(600).addClass('active-eslide');

		currentDot.removeClass('active-punto');
		prevDot.addClass('active-punto');

		$('html, body').animate({
			scrollTop : $("#oleostron").offset().top
		});

	});

};

$(".diesirae").trigger('load');

$('#entrada').click(function() {
	$(".diesirae").trigger('play');
	$('html, body').animate({
		scrollTop : $('#portada').offset().top
	}, 100);
	$('.maxitron').css('background-color', 'red');
	$('html').css('background-color', 'darkred');
	$('.hoja').css('background-color', 'black');
	$('img').css({
		'-moz-filter' : 'invert (100%)',
		'filter' : 'invert (100%)'
	});
	$('.diesirae').append('.diesirae');

});

$(document).ready(main);
$(document).ready(galery);

