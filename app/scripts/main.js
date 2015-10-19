/* jshint devel:true */
/*global
	Modernizr, imagesLoaded
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

// Stop preloader when images loading are completed
imagesLoaded('body', function() {
	var $body = $('body');
	$body.addClass('loaded');
	$body.removeClass('no-scroll');
	document.getElementById('vakansi-visual-logo').src='images/logo.svg';
});

var crews = {
	'depita':
	{
		'name': 'Natalia Depita',
		'description': 'Natalia\'s passion in filmmaking grew since junior high school. For her, film is the best media to free her thoughts and ideas from inside her mind. Right now, she serves as Creative Development Manager for VAKANSI VISUAL.'
	},
	'adit':
	{
		'name': 'Aditya Kuntjoro',
		'description': 'An mountaineering enthusiast, Adit\'s newest accomplishment was to climb Mount Rinjani, the second highest mountain in Indonesia. His passion for film, music, culture, and nature bring an unique blend as Director of Photography for VAKANSI VISUAL. He also moonlighting as a property agent, so in case you need a house, give him a shout!'
	},
	'dims':
	{
		'name': 'Dimas Wisnuwardono',
		'description': 'Photography, video, and web are Dimas\' passion. He co-founded <a href="//soundsfromthecorner.com" target="_blank">Sounds From The Corner</a>, 1/4 of SRM Band Management, and working full-time as a web designer. Dimas enjoys playing game, earning money for his lovely wife, and planning for his long-time dream to travel the world.'
	},
	'sesarina':
	{
		'name': 'Sesarina Puspita',
		'description': 'Sesha always wants to be an astronaut, but on a simple twist of fate she ended up taking gorgeous shot for VAKANSI VISUAL. Her perfect day is when she is caressed like a cat in lazy sunday afternoon.'
	},
	'rotinsulu':
	{
		'name': 'Natalia Rotinsulu',
		'description': 'When asked to write to her bio, she wrote \'Aku seorang kapiten tidak punya pedang panjang. Hanya punya jalan hidup yang panjang untuk diceritakan walau tidak menarik. Tapi, percaya tidak percaya Natalia tetap eksis di dunia perfilman.\''
	},
	'reo':
	{
		'name': 'Reo Rengga Ariano',
		'description': 'As a Michel Gondry fan, his interest range from classic animation to motion graphic. Reo enjoys clean eating, and believes that natural harmony and balance is necessary between human beings. With over 8 years of experience in his bag, he now joins the force as an editor and motion graphic artist in VAKANSI VISUAL.'
	},
	'herald':
	{
		'name': 'Herald Reynaldo',
		'description': 'A lost kid between music and video production, Herald makes the best of both world by working as a video editor, composer, sound designer, vocalist, and guitarist for the band L\'Alphalpha. He enjoys jamming to 90s pop music, although his one true passion is to make a documentary about peanut sauce.'
	},
	'yudhi':
	{
		'name': 'Yudhi Arfani',
		'description': 'Guitarist and songwriter for Everybody Loves Irene should thanks his uncle\"s laser disc of Pink Floyd Concert "Pulse". From there his love of music started, and the love grow bigger since the arrival of the Gallagher Brothers. In 2006, Yudhi met Aghi Narottama who introduced him to Propellerheads Reason music application. In the next year, Zeke Khaseli invite him to score music for film. From there his journey in film world begins.'
	},
	'arief':
	{
		'name': 'Arief Budi Santoso',
		'description': 'Arief, or better known as Tablo around his colleague, has been working in the industry for years. He has a wide range of projects in his portfolio, from feature film, TVC, PSA to company profile. When he is not riding around Jakarta on his Vespa, he plays the bass for "It\'s Different Class", a psychedelic band hailing from The Arts Institute of Jakarta.'
	},
	'dianka':
	{
		'name': 'Dianka Adrianita',
		'description': 'Had a sip of multimedia design and filmmaking, Dianka ends up coming back to her roots: graphic design and foods. In her opinion, nothing beats the excitement in the process of brainstorming, and designing as a graphic designer, specifically on branding projects. She also works as a food photographer, and enjoys gastronomic adventure in her spare time.'
	},
	'gerson':
	{
		'name': 'Gerson Gilrandy',
		'description': 'Aiming to express emotions and inspiring moments or objects that caught his attention and pour it straight to any kind of experimental art form. Gerson, who is a keen skater, often work under the name NEWONE. His background in graffiti, street art, and pop culture has a huge influence in his style of work.'
	}
};

$('.more').click(function () {
	var name = $(this).data('name');
	var person = crews[name];

	var content = '<img src="images/crews/' + name +
		'.jpg" alt="' + name + '"><h3 class="modal-title">' +
		person.name.toUpperCase() + '</h3><p>' + person.description +
		'</p><a class="close-reveal-modal" aria-label="Close">&#215;</a>';

	$('#crew-info').html(content);
});

// The following code are used if the contact form are used again
// Function to get parameter value
// var getUrlParameter = function getUrlParameter(sParam) {
// 	var sPageURL = decodeURIComponent(window.location.search.substring(1)),
// 		sURLVariables = sPageURL.split('&'),
// 		sParameterName,
// 		i;

// 	for (i = 0; i < sURLVariables.length; i++) {
// 		sParameterName = sURLVariables[i].split('=');

// 		if (sParameterName[0] === sParam) {
// 			return sParameterName[1] === undefined ? true : sParameterName[1];
// 		}
// 	}
// };

// var value = getUrlParameter('key');
