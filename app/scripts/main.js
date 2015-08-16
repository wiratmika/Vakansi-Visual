/* jshint devel:true */
/*global
	Modernizr
*/
'use strict';

var width  = Math.max(document.documentElement.clientWidth, window.innerWidth || 0);
var mobile = width < 640;

if (mobile) {
	$('#landing').parallax({imageSrc: 'images/cover1-mobile.jpg'});
}

var threshold = mobile ? -200 : 100;

$(document).foundation({
	'magellan-expedition': {
		destination_threshold: threshold
	}
});

$('#send-message-success').delay(3000).fadeOut();
$('.inline-anchor').smoothScroll();

var hidden = true;
var breakPosition = $('#what').offset().top;
$(window).scroll(function() {
	var currentPosition = $(window).scrollTop();

	if (currentPosition >= breakPosition && hidden) {
		$('#navbar').fadeIn(350);
		hidden = false;
	} else if (currentPosition < breakPosition && !hidden) {
		$('#navbar').fadeOut(350);
		hidden = true;
	}
});

$(window).load(function() {
	var $isotope = $('.isotope').isotope({
		itemSelector: '.work',
		layoutMode: 'fitRows',
		filter: '.original'
	});

	$('#tab1').on('click', function(event) {
		$isotope.isotope({
			filter: '.original'
		});
		event.preventDefault();
	});

	$('#tab2').on('click', function(event) {
		$isotope.isotope({
			filter: '.commercial'
		});
		event.preventDefault();
	});

	$('#tab3').on('click', function(event) {
		$isotope.isotope({
			filter: '.client'
		});
		event.preventDefault();
	});
});

$('header').headroom({
	tolerance: {
		down: 40
	}
});

// Prevent the map to be scrollable in touch devices
if (Modernizr.touch) {
	document.getElementsByTagName('iframe')[0].setAttribute('style', 'pointer-events:none;');
}
