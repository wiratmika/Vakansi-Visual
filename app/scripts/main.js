/* jshint devel:true */
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

// Source: http://tympanus.net/codrops/2013/06/18/caption-hover-effects/
(function(window) {
	if (Modernizr.touch) {
		document.getElementsByTagName('iframe')[0].setAttribute('style', 'pointer-events:none;');

		function classReg(className) {
			return new RegExp('(^|\\s+)' + className + '(\\s+|$)');
		}

		var hasClass, addClass, removeClass;

		if ('classList' in document.documentElement) {
			hasClass = function(elem, c) {
				return elem.classList.contains(c);
			};
			addClass = function(elem, c) {
				elem.classList.add( c);
			};
			removeClass = function(elem, c) {
				elem.classList.remove( c);
			};
		} else {
			hasClass = function(elem, c) {
				return classReg(c).test(elem.className);
			};
			addClass = function(elem, c) {
				if (!hasClass(elem, c)) {
						elem.className = elem.className + ' ' + c;
				}
			};
			removeClass = function(elem, c) {
				elem.className = elem.className.replace(classReg(c), ' ');
			};
		}

		function toggleClass(elem, c) {
			var fn = hasClass(elem, c) ? removeClass : addClass;
			fn(elem, c);
		}

		var classie = {
			hasClass: hasClass,
			addClass: addClass,
			removeClass: removeClass,
			toggleClass: toggleClass,
			has: hasClass,
			add: addClass,
			remove: removeClass,
			toggle: toggleClass
		};

		if (typeof define === 'function' && define.amd) {
			define(classie);
		} else {
			window.classie = classie;
		}

		[].slice.call(document.querySelectorAll('ul > li > figure')).forEach(function(el, i) {
			el.querySelector('figcaption > a').addEventListener('touchstart', function(e) {
				e.stopPropagation();
			}, false);
			el.addEventListener('touchstart', function(e) {
				classie.toggle(this, 'hover');
			}, false);
		});
	}
})(window);

var star1 = {"meta":{"id":"5821b654103e388048d1c5db","created":1421222232582,"modified":1421402474983,"author":"Vakansi Visual","description":"","name":"Star System 1","copyright":"Copyright (c) by Vakansi Visual","duration":0.9,"numberOfScenes":1,"projectAccess":{"visibility":"PUBLIC","writeAccess":[],"readAccess":["PUBLIC"]},"authorUsername":"Mika"},"anim":{"dimension":[550.0,450.0],"framerate":24.0,"loop":false,"background":"#ffffff","paths":["JInwJdcL1ZWN7l4AAnHS9HfAABeAAGOWvVlfISXE2z2Cvp/42MXnLVSOrpY9LNX41qySr8TMm210sfaZrznbW419P+5Oi4m5\nhPEIBMA=","Jqh1CodVEAAC6Eo2kpS2vGi9wAAKNF7gAARtJTaSmIAAKL3UQAAUXuilte0lMV0JAAAoroSAABFLa6W14gAAXQkhAJg=","JInwJdcL1ZWN7l4AAnHC9HfAABeAAGOWvVlfISXE2z2Gvp/42JXnLVSOrpY9LNX41qySr8TMm210sfaZrznbW419P+5O64m5\nhOkIBMA=","Ip+wSbrMAAbAZUOryyUAACZKAAAyoeodgAEoEwACUBivNQ7GwAAJjYAADFeVeWAANgIQCYA=","IqywbDjOAAFBF194ghur7wACdX3gADr7y+8cAAV984AAr73IIl945QRAAJygiAAOQREERwAAoIoQCYA=","IvjoWPxOAAFBF194giOr7wACdX3gADr7y+8cAAV984AAr73IIl945QRAAJygiAAOQREERwAAoIoQCYA=","Iu6lLIxOAAFBF194giOr7wACdX3gADr7y+8cAAV984AAr73IIl945QRAAJygiAAOQREERwAAoIoQCYA=","IpX4JztOAAFBF194giOr7wACdX3gADr7y+8cAAV984AAr7nIIl925QRAAJygiAAOQREERwAAoJIQCYA=","Im7jTeROAAFBF194giOr7wACdX3AADr7u+8cAAV984AAr73IIl945QSAAJygiAAOQQ0ERwAAoIoQCYA=","JJN2Em60AAAUXCF7+IQLCukAAAoV0gAAEL37vfyAAAV0hQAACukIIQLe/cFFwAACgouAAAQQgRCBYAAAouCEAmA=","KIYIh9u4ztsIYrQM","Iqj4cBOvqfgAAmUBgAMsmTbYAAv7MAAX9Ym0m2xf0ABerBAABMX9AAYm3ZKwACgOYABQGyyWyVlAYACEAmA=","IsaROlYtnvAAII8JPLH19SqAAE+pVAAB4SdpwQRbNKAAQR/j4Z/L2oADUl4AATcUsAC3lpSSqtbwAJa3gALSratYAKRLwABZ\nJ57WF+fT/DDLsgiEAmA=","IpN2StxNeoAAGsa5yrQAELBeAAKWlNAAQsGzlZyrYWAACbCzAANnLMa2gAHqC8AALS+aAAeoNY1MaGvUAACEAmA=","JJN1km7UAAAUXCF7+IQHCukAAAoV0gAAEL38vfyAAAV0hQAACukIIQJe/kFFwAACgouAAAQQgRCBIAAAouCEAmA=","KIYIh+tYzTCwYrQM","KIZHB/cQhMA=","BYhM","AiEw","KIYn5/UchMA=","KHf0Kyd4hMA=","KIZHDDzQhMA=","JMNQGWQITA==","KIZHB/cQzqo0XZOM","JMNQOpgITA==","FwY/+hM=","JsLTGBviEw==","KNu6AdTAhMA=","KIZHB/cQzVXMXZOM","KNu6A6mAhMA=","KKwehhaYhMA="],"fonts":[{"face":"Lato-Light","url":"http://uploads.animatron.com/ec4a36540de2c474b0a4643b.ttf","style":"normal","weight":200.0,"woff":"http://uploads.animatron.com/f24a3654c061e143f4334901.woff"},{"face":"Lato-Bold","url":"http://uploads.animatron.com/cf4a36549a68d27290f2736e.ttf","style":"normal","weight":700.0,"woff":"http://uploads.animatron.com/d34a36547863794c929e2f98.woff"}],"elements":[[2,"$$$LIBRARY$$$",10.0,[],{}],[2,"Scene1",0.9,[[2,"Star Color","","",[-0.249,-0.249],"",4,[[0,[0.0,0.9],8,[1.0,0.0]],[0,[0.9],"",[0.0]],[4,[],"",16]],{}],[5,"Star","","",[-0.249,-0.249],"",4,[[4,[],"",19]],{}],[8,"BASIC VIDEO","","",[71.165,11.5],"",4,[[4,[],"",20]],{}],[9,"for bootstrap startups","","",[95.0,12.0],"",4,[[4,[],"",21]],{}],[10,"video/event\ndocumentation","","",[65.0,24.0],"",4,[[0,[0.0,0.8],8,[0.0,1.0]],[0,[0.8],"",[1.0]],[4,[0.0,0.8],8,22],[4,[0.8],"",22]],{}],[11,"1","","",[0.251,0.251],"",4,[[4,[0.0,0.8],8,23],[4,[0.8],"",24]],{}],[20,"Line 1","","",[199.5,197.5],"",4,[[0,[0.0,0.8],8,[0.0,1.0]],[0,[0.8],"",[1.0]],[4,[],"",26]],{}],[21,"voice over",[0.1],"",[44.0,12.0],"",4,[[0,[0.0,0.8],8,[0.0,1.0]],[0,[0.8],"",[1.0]],[4,[],"",27]],{}],[22,"2",[0.1],"",[0.252,0.252],"",4,[[4,[0.0,0.8],8,28],[4,[0.8],"",29]],{}],[28,"Line 2",[0.1],"",[352.5,199.5],"",4,[[0,[0.0,0.8],8,[0.0,1.0]],[0,[0.8],"",[1.0]],[4,[],"",30]],{}]],{}],[1,"",[[3,"Bezier1","","",[86.25,86.25],"",4,[[4,[],"",17]],{}],[4,"Bezier2","","",[86.251,86.25],"",4,[[4,[],"",18]],{}]]],[3,"#ffffff","","",0],[3,"#36a3db","","",1],[1,"",[[6,"Bezier1","","",[86.25,86.25],"",4,[[4,[],"",17]],{}],[7,"Bezier2","","",[86.251,86.25],"",4,[[4,[],"",18]],{}]]],[3,"#ffffff","","",2],[3,"#333333","","",1],[4,"#000000","","","bold 30px Lato-Bold","center","BASIC VIDEOS",2],[4,"#000000","","","20px Lato-Light","center","for bootstrap startups",2],[4,"#969696","","","20px Lato-Light","center","video or event\ndocumentation",2],[1,"",[[12,"Bezier1","","",[37.75,37.749],"",4,[[4,[],"",17]],{}],[13,"Composite1","","",[36.751,37.748],"",4,[[4,[],"",25]],{}],[19,"Bezier2","","",[37.751,37.749],"",4,[[4,[],"",18]],{}]]],[3,"#ffffff","","",3],[1,"",[[14,"Bezier1","","","","",4,[],{}],[15,"Bezier2","","","","",4,[],{}],[16,"Bezier3","","","","",4,[],{}],[17,"Bezier4","","","","",4,[],{}],[18,"Bezier5","","","","",4,[],{}]]],[3,"#ffffff","","",4],[3,"#ffffff","","",5],[3,"#ffffff","","",6],[3,"#ffffff","","",7],[3,"#ffffff","","",8],[3,"#37a2db","","",9],[3,"",[2.0,"#9e9e9e","","",-1.0],"",10],[4,"#969696","","","20px Lato-Light","center","voice over",2],[1,"",[[23,"Composite1","","",[37.75,37.749],"",4,[[4,[],"",17]],{}],[27,"Bezier1","","",[37.751,37.75],"",4,[[4,[],"",18]],{}]]],[1,"",[[24,"Bezier1","","","","",4,[],{}],[25,"Bezier2","","","","",4,[],{}],[26,"Bezier3","","","","",4,[],{}]]],[3,"#ffffff","","",11],[3,"#ffffff","","",12],[3,"#ffffff","","",13],[3,"#37a2db","","",14],[3,"",[2.0,"#9e9e9e","","",-1.0],"",15]],"scenes":[1]}};

var star2 = {"meta":{"id":"8536b654a37743f7a19b6254","created":1421222230571,"modified":1421222230571,"author":"Vakansi Visual","description":"","name":"Star System 2","copyright":"Copyright (c) by Vakansi Visual","duration":1.1,"numberOfScenes":1,"projectAccess":{"visibility":"PUBLIC","writeAccess":[],"readAccess":["PUBLIC"]},"authorUsername":"Mika"},"anim":{"dimension":[550.0,450.0],"framerate":24.0,"loop":false,"background":"#ffffff","paths":["JLX/JdcL1ZWN7l4AAnHS9HgAABeAAGOWvVlnISXE2z2Cvp/42MXnLVSOrpY9LNX41qySr8TMm210sfaZrznbW419P/5Oi4m2\nhPEIBMA=","JF3fJdcL1ZSN7l4AAnHS9HfgABeAAGOWvVlfISXE2z2CvqAI2MXnLVSOrpY9LNX41aySr8TQm210shaZrznbW419P/5Oi4m3\nhPEIBMA=","Jqh1CodVEAAC6Eo2kpS2vGi9wAAKNF7gAARtJTaSmIAAKL3UQAAUXuilte0lMV0JAAAoroSAABFLa6W14gAAXQkhAJg=","IqbTHg4vUSxA/YaZskP62eNsbYCDZWE4Ew==","Ip6dUieuvL+UaCOtwyKV3CGmuTuEFNacdrK/jujRLpnIt+zI9Gh4AR/TPsByEAmA","JJN1km7UAAAUXCF7+IQHCukAAAoV0gAAEL38vfyAAAV0hQAACukIIQJe/kFFwAACgouAAAQQgRCBIAAAouCEAmA=","KIYIiALIzqRYclQM","Ip+wSbrMAAbAZUOryyUAACZKAAAyoeodgAEoEwACUBivNQ7GwAAJjYAADFeVeWAANgIQCYA=","IqyxbDlOAAFBN194ghur7QACdX3gADr7y+8cAAV9s4AAr7XIIl945QRAAJygmAAOQREERwAAoJoQCYA=","IvjnWPxOAAFBF194giOr7wACdX3gADr7y+8cAAV984AAr73IIl945QRAAJygiAAOQREERwAAoIoQCYA=","Iu6kLIzOAAFBJ19+giOr7AACdX4AADr7y+8cAAV984AAr73IIl945QQAAJygoAAOQQUERwAAoIoQCYA=","IpX4JzzOAAFBF194giOr7wACdX3gADr7y+8cAAV984AAr7nIIl925QRAAJygiAAOQREERwAAoJIQCYA=","Im7jTeTOAAFBF194giOr7wACdX3AADr7u+8cAAV984AAr73IIl945QSAAJygiAAOQQ0ERwAAoIoQCYA=","JJN1Em7UAAAUW+F7+IQJCukQAAoV0iAAEL38vfyAAAV0jQAACukYIQJe/kFFvAACgot4AAQQgRCBIAAAot6EAmA=","KIaFh/r4z1YUWmcM","IpN2AADQro4AAIXv4hAsAAAUW+gAACi4QQgRCBIKLkAAFBRcAAAghAd7+QAACukKAAAV0jC9/L37hXSAAAIQiKL1mIMyWgfd\nk437jJqs9JkBOFzeuliFi1cNs0x1ezapM5gtTfB7ZarhEJL0ZWAC8UwACmhgA1NDAAKaJoACPU0ABHqb/+j1SwARoTGa0uOI\n1Zcohkrk+MFcnBTTbJgdttkwOo2ySHElyVE8uRIW1ySExKjoT1SMR67siKmgAFdzQBypBv+9UfO/6ECh3+AgUO/9ECmb/4TM\nMq6UGZFab1MmvMAZLGEEyY/YybUS3qt6nWjGmkbh80v7feaj37MtTyhHpLECqV2cFKuPsoWKZUTdbqACt5wAHE8O/7onlwAJ\nE8zAAadDtU7FdvNpjcXgTG0+mWNvdxTGaO9GM4+VsZq70mOz9kMdf6XY7P2FLcN2hbkvRLcZ3yWgD2iXCwV/0QfL/intYFU+\nrAAnueABUFE8AEoKR//3QUk3/6plZTC3c2tWMVQhHroczv8=","KIUOh/r4zK/IWuQM","INSuz465V+AAGAAAK68uqgwABgAAFRRATA==","IpArM+MwS6krrWForldewAACoogJgA==","KIf8h/MozU/wcpKM","KIZHB/cQhMA=","BYhM","AiEw","KHJAq0qghMA=","KIZHDS8AhMA=","Jkk+EbNCEw==","KIXph/kIznlgcRuM","JkiDGHHiEw==","GtASwiEw","JrUnHKAiEw==","JqrmA6mCEw==","KIZHB/cQzzywVQgM","JqrmCmBCEw==","FwYAAhM=","JuKQFoWiEw==","KLcbAOpghMA=","KIZHB/cQzMNQVQgM","KLcbApgQhMA=","KJsHhak4hMA=","KOfvBGzQhMA=","KIZHB/cQzYagcRuM","KOfvBhqAhMA=","GvngACEw","KLH6hxxQhMA="],"fonts":[{"face":"Lato-Light","url":"http://uploads.animatron.com/ec4a36540de2c474b0a4643b.ttf","style":"normal","weight":200.0,"woff":"http://uploads.animatron.com/f24a3654c061e143f4334901.woff"},{"face":"Lato-Bold","url":"http://uploads.animatron.com/cf4a36549a68d27290f2736e.ttf","style":"normal","weight":700.0,"woff":"http://uploads.animatron.com/d34a36547863794c929e2f98.woff"}],"elements":[[2,"$$$LIBRARY$$$",10.0,[],{}],[2,"Scene1",1.1,[[2,"Star Color","","",[-0.249,-0.249],"",4,[[0,[0.0,1.1],8,[1.0,0.0]],[0,[1.1],"",[0.0]],[4,[],"",20]],{}],[7,"Star","","",[-0.249,-0.249],"",4,[[4,[],"",20]],{}],[12,"PERSONALIZED/ENHANCED VID","","",[99.489,23.0],"",4,[[4,[],"",23]],{}],[13,"for bootstrap startups","","",[153.0,12.0],"",4,[[4,[],"",24]],{}],[14,"design","","",[28.0,12.0],"",4,[[0,[0.0,0.8],8,[0.0,1.0]],[0,[0.8],"",[1.0]],[4,[],"",25]],{}],[15,"1","","",[0.252,0.252],"",4,[[4,[0.0,0.8],8,26],[4,[0.8],"",27]],{}],[20,"Line 1","","",[185.5,234.5],"",4,[[0,[0.0,0.8],8,[0.0,1.0]],[0,[0.8],"",[1.0]],[4,[],"",29]],{}],[21,"video",[0.1],"",[23.5,12.0],"",4,[[0,[0.0,0.8],8,[0.0,1.0]],[0,[0.8],"",[1.0]],[4,[],"",30]],{}],[22,"2",[0.1],"",[0.253,0.253],"",4,[[4,[0.0,0.8],8,31],[4,[0.8],"",32]],{}],[31,"Line 2",[0.1],"",[232.0,184.5],"",4,[[0,[0.0,0.8],8,[0.0,1.0]],[0,[0.8],"",[1.0]],[4,[],"",34]],{}],[32,"personalized music",[0.2],"",[82.0,12.0],"",4,[[0,[0.0,0.8],8,[0.0,1.0]],[0,[0.8],"",[1.0]],[4,[],"",35]],{}],[33,"3",[0.2],"",[-0.499,-0.498],"",4,[[4,[0.0,0.8],8,36],[4,[0.8],"",37]],{}],[35,"Line 3",[0.2],"",[317.5,185.5],"",4,[[0,[0.0,0.8],8,[0.0,1.0]],[0,[0.8],"",[1.0]],[4,[],"",38]],{}],[36,"motion",[0.3],"",[30.5,12.0],"",4,[[0,[0.0,0.8],8,[0.0,1.0]],[0,[0.8],"",[1.0]],[4,[],"",39]],{}],[37,"4",[0.3],"",[0.252,0.252],"",4,[[4,[0.0,0.8],8,40],[4,[0.8],"",41]],{}],[42,"Line 4",[0.3],"",[364.5,233.0],"",4,[[0,[0.0,0.8],8,[0.0,1.0]],[0,[0.8],"",[1.0]],[4,[],"",43]],{}]],{}],[1,"",[[3,"Composite1","","",[86.25,86.25],"",4,[[4,[],"",21]],{}],[6,"Bezier1","","",[86.251,86.25],"",4,[[4,[],"",22]],{}]]],[1,"",[[4,"Bezier1","","","","",4,[],{}],[5,"Bezier2","","","","",4,[],{}]]],[3,"#ffffff","","",0],[3,"#ffffff","","",1],[3,"#8ec541","","",2],[1,"",[[8,"Composite1","","",[86.25,86.25],"",4,[[4,[],"",21]],{}],[11,"Bezier1","","",[86.251,86.25],"",4,[[4,[],"",22]],{}]]],[1,"",[[9,"Bezier1","","","","",4,[],{}],[10,"Bezier2","","","","",4,[],{}]]],[3,"#ffffff","","",0],[3,"#ffffff","","",1],[3,"#333333","","",2],[4,"#000000","","","bold 30px Lato-Bold","center","PERSONALIZED/\nENHANCED VIDEOS",2],[4,"#000000","","","20px Lato-Light","center","for reasonably well-funded startups",2],[4,"#969696","","","20px Lato-Light","center","design",2],[1,"",[[16,"Composite1","","",[41.08,39.163],"",4,[[4,[],"",28]],{}],[19,"Bezier1","","",[37.751,37.75],"",4,[[4,[],"",22]],{}]]],[1,"",[[17,"Bezier1","","","","",4,[],{}],[18,"Bezier2","","","","",4,[],{}]]],[3,"#ffffff","","",3],[3,"#ffffff","","",4],[3,"#8dc541","","",5],[3,"",[2.0,"#9e9e9e","","",-1.0],"",6],[4,"#969696","","","20px Lato-Light","center","video",2],[1,"",[[23,"Bezier1","","",[37.75,37.749],"",4,[[4,[],"",22]],{}],[24,"Composite1","","",[36.75,37.75],"",4,[[4,[],"",33]],{}],[30,"Bezier2","","",[37.751,37.75],"",4,[[4,[],"",22]],{}]]],[3,"#ffffff","","",7],[1,"",[[25,"Bezier1","","","","",4,[],{}],[26,"Bezier2","","","","",4,[],{}],[27,"Bezier3","","","","",4,[],{}],[28,"Bezier4","","","","",4,[],{}],[29,"Bezier5","","","","",4,[],{}]]],[3,"#ffffff","","",8],[3,"#ffffff","","",9],[3,"#ffffff","","",10],[3,"#ffffff","","",11],[3,"#ffffff","","",12],[3,"#8dc541","","",13],[3,"",[2.0,"#9e9e9e","","",-1.0],"",14],[4,"#969696","","","20px Lato-Light","","personalized music",2],[1,"",[[34,"Bezier1","","",[37.749,37.749],"",4,[[2,[],"",[0.993]],[4,[],"",22]],{}]]],[3,"#8dc541","","",15],[3,"",[2.0,"#9e9e9e","","",-1.0],"",16],[4,"#969696","","","20px Lato-Light","center","motion",2],[1,"",[[38,"Composite1","","",[41.75,37.75],"",4,[[4,[],"",42]],{}],[41,"Bezier1","","",[37.751,37.75],"",4,[[4,[],"",22]],{}]]],[1,"",[[39,"Bezier1","","","","",4,[],{}],[40,"Bezier2","","","","",4,[],{}]]],[3,"#ffffff","","",17],[3,"#ffffff","","",18],[3,"#8dc541","","",5],[3,"",[2.0,"#9e9e9e","","",-1.0],"",19]],"scenes":[1]}};

var star3 = {"meta":{"id":"7e5cb654329d34bbcc1bb0ab","created":1421222230571,"modified":1421222230571,"author":"Vakansi Visual","description":"","name":"Star System 3","copyright":"Copyright (c) by Vakansi Visual","duration":1.8,"numberOfScenes":1,"projectAccess":{"visibility":"PUBLIC","writeAccess":[],"readAccess":["PUBLIC"]},"authorUsername":"Mika"},"anim":{"dimension":[700.0,550.0],"framerate":24.0,"loop":false,"background":"#ffffff","paths":["JOQEJdcL1ZSN7l4AAnHS9HfAABeAAGOWvVlXISXE2r2CvqAA2MXnLhSOrpY5LNX41iySr8TMm210sfaZrznbW419P+5Oi4m5\nhPEIBMA=","JInvpdcL1ZWN7l4AAnHS9HgAABeAAGOWvVlnISXE2z2Cvp/42MXnLVSOrpY1LNX41qySr8TMm210sfaZrznbW419P+5Oi4m5\nhPEIBMA=","JC/bpdcL1ZWN7l4AAnHS9HegABeAAGOWvVlfISXE272Cvp/42MXnLZSOrpZBLNX41mySr8TQm210sbaZrznbW419P95Oi4m5\nhPEIBMA=","Jqh1CodVEAAC6Eo2kpS2vGi9wAAKNF7gAARtJTaSmIAAKL3UQAAUXuilte0lMV0JAAAoroSAABFLa6W14gAAXQkhAJg=","INiUnhM5Rs09nKS/v05VsGVJSQiqplWBSA31NAVNnm/9G0TQADlmdUQZsLqp3OodT95pCEAm","InmAWSbOVwTJNyrKYsuVjjHKdf5llDoNYK6ddBb/U0ABHLaAAjhtAARNkIBM","IuJDSeXO/ZWEt21+muuucz+WbOFxmNnMY1mzEcRM5XUzZHKsGdO5YLzQ0IBM","IkSoSZPOAp58FxJLZAuRr8D+ayHOetYsnIGs7juk6opMmXVQhjI6oGMr0IBM","IrtGJ+ROR4yIhyE6veOC3lRObPFOJNnVHHGzMzsM4AAmxHAAE6a4AAnCkIBM","Imuqa8nOrpc052cxdBO7EqKyaxoxptY0Y02s4cR84AAZP3AADFe4AAZZEIBM","JJN1km60AAAUXCF7+IQJCukAAAoV0gAAEL38vfyAAAV0hQAACukIIQJe/kFFwAACgouAAAQQgRCBIAAAouCEAmA=","KKoqitlYztcgEFuM","IpN2AADQro8AAIXv6hAkAAAUW+gAACi4QQgNCA4KLiAAFBRcAAAghAd7+QAACukKAAAV0jC9/L37hXSAAAIQiKL1mIMyWgfd\nk437jJqs9JkBOFzeuliFi1cN00x1exapM5gtTfB7ZarhEpL0ZWAC8UwACmhgA1NbAAKaJoACPU0ABHnb/+j1SwARoTGa0uOI\n1Zcohkrk+MFcnBTTbJgdttkwOk2ySHElyVE8uRIW1ySExKjoT1SMR67siKmgAFd7QBypBv+9UhO/6ECl3+AgTO/9ECmb/4TL\nMq6UGZFab1MmvMAZLGEGyY/YqbUV3sN6nWjGmkbh80v5feaj57MtTyhHpLECqV2bVKuPsoWKZUTdbqACt5wAHE8O/7onpwAJ\nE7zAAadDtU7FdPNpjcXgDG0+mmNvdxTGaO9GM4+VsZq7xmOz9kMdf6XY7P2FLcN2hbkvRLcZ3yWgD2iXCwV/0QfL/intYFU+\nrAAnueABUFE8AEoKN//3QUU3/6poZTC3c2tWMVQhHroczv8=","KKweiviYzkiMdEgM","Ip+wSbrMAAbAZUOryyUAACZKAAAyoeodgAEoEwACUBivNQ7GwAAJjYAADFeVeWAANgIQCYA=","IqywbDlOAAFBN194ghur7QACdX3gADr7y+8cAAV9s4AAr7XIIl945QRAAJygmAAOQREERwAAoJoQCYA=","IvjnWPxOAAFBF194giOr7wACdX3gADr7y+8cAAV984AAr73IIl945QRAAJygiAAOQREERwAAoIoQCYA=","Iu6lLIzOAAFBJ194giOr7wACdX3gADr7y+8cAAV984AAr73IIl945QRAAJygiAAOQREERwAAoIoQCYA=","IpX4JzvOAAFBJ194giOr7wACdX3gADr7y+8cAAV984AAr7nIIl945QRAAJygiAAOQREERwAAoJIQCYA=","Im7iTeVOAAFBF196giOr7wACdX3AADr7u+8cAAV984AAr73IIl945QSAAJygiAAOQQ0ERwAAoIoQCYA=","JJN1km7UAAAUXCF7+IQHCukAAAoV0gAAEL38vfyAAAV0hQAACukIIQJe/kFFwAACgouAAAQQgRCBIAAAouCEAmA=","KKskitGIzocMWS6M","Ip+BN4xOVLwNJyfr2LuRGTrWav9UpuGK0vh3YmgXTduLvh11edDticgj5tKQDa2kwAkbSq+zTpi/6fdbWT5DhOObBmCryHsR\ni7KYuyB5MZlBFWEl7zP1lPZ36UrTNQxI4nKygGHMeQBDY9KBUx4P0ea419RNSLV9m/7pVU3/jMnbcxpMNlCgQJsWcCS28fi9\nbann5oQCYA==","IoK+YnVNp0AAG0OAnLaSXoOdVm+nrr0+rEcDIV484G3prHI1VxA5Xl/CJqvb8G1YV/farxBdzmOcGpckfMTju0xh1mdVt1su\nlFOZRP9xMkh+rZ8nf0wH2i6cDN2Ujc5t9d1kv75TanPt9tM0Dm2qKGYm0ZQ3Tb7atxoBJU/NAJKxmoE02jV3IraY0sMMx53z\n1iyJjcxTIuRhjbVDEv15UIBM","KKskiviYz1n8QjuM","InVZW+su55qwpdFOERS0XiocXoIwEmAT","IlcFXpevFpqbkXOsW7ou324/dffdftoBMA==","IsoHMZMsqYGSXjYddErFaObprNniG07FKPbxDmTzeIkyRso/E82ZOO6QgEw=","ItbhXyWx7QbfX5hDhaoVLxVEkkmKURATiATA","KKqniuj4zJpMQvcM","IqLrIfYvUSxA+YaZskPq2eRscYCDZWE4Ew==","Ip6dUicuvL+UaCOtwiKV3CGmtTuEFNacdqq/zujVLpnIuOzI9Gh4AR/TPsByEAmA","KKizivDIzYqIWHMM","IpN2a+ewroEV12Arr10Evd07ukAm","InRmdLcvoNNgSX9TiFrLz4dKMl7pg1YK90wFT9efD2ucv6m70qX0GpP3L4PEAAAJgA==","KKuhitlYzau8dIaM","Iu9ZSbrNAAKB2330ELa/IACbX5AANvv332gAK/M0ABX5aghvvtUDgAJqgcAA1BCghaAAUDoQCYA=","IqMsSbrNAAKB2330ELa/IACbX5AANvv332gAK/M0ABX5aghvvtUDgAJqgcAA1BCghaAAUDoQCYA=","IlvkSbrNAAKB234UELa/IACbX5AANvwX32gAK/M0ABX5aggvvtUDgAJqgcAA1A+ghaAAUDoQCYA=","KKweiuEozSjgEB0M","KKrmCuzghMA=","IrQmAAAhMA==","BYhM","I0vXAAAhMA==","AiEw","KKrG6uj4hMA=","KKAjTfcyhMA=","KKrmD8MohMA=","KKZCjvA4hMA=","KE4gC5jAhMA=","KKrmCuzgzqBwEsyM","KFMCDUZwhMA=","B+oT","KIUOi98QhMA=","JmGoHoSCEw==","KKrmCuzgzhe4cw+M","KDDUCU7QhMA=","KHUwCj0YhMA=","JoPWDqYCEw==","KKrmCuzgzlwUU1KM","JoPWFVzCEw==","FwY/+hM=","KHwGCGRwhMA=","Jv3oAw1CEw==","KKrmCuzg06gcLwhD","Jv3oCcQCEw==","GdxtkITA","KJZkBxxQhMA=","KNlJAMNQhMA=","KKrmCuzg0FfkLwhD","KNbYAnEAhMA=","F0KjyhM=","KL3xBxhohMA=","KL3xBxhorfQfTA==","KL5uBxxQhMA=","KonwgOhsITA=","KKrmCuzgzaPsU1KM","KonwgVXMITA=","GrDEtaEw","KNoEiHf4hMA=","KpJ8AehIITA=","KKrmCuzgzehIcw+M","KpJ8AlO0ITA=","KOEZCiHAhMA=","KoFlAuYwITA=","KKrmCuzgzV+QEsyM","KoFlA1GcITA=","BGhM","KNE6i+L4hMA="],"fonts":[{"face":"Lato-Regular","url":"http://uploads.animatron.com/f94a3654212db06b251fdc06.ttf","style":"normal","weight":400.0,"woff":"http://uploads.animatron.com/fd4a3654a5b2636902669296.woff"},{"face":"Lato-Light","url":"http://uploads.animatron.com/ec4a36540de2c474b0a4643b.ttf","style":"normal","weight":200.0,"woff":"http://uploads.animatron.com/f24a3654c061e143f4334901.woff"},{"face":"Lato-Bold","url":"http://uploads.animatron.com/cf4a36549a68d27290f2736e.ttf","style":"normal","weight":700.0,"woff":"http://uploads.animatron.com/d34a36547863794c929e2f98.woff"}],"elements":[[2,"$$$LIBRARY$$$",10.0,[],{}],[2,"Scene1",1.8,[[2,"Star Color","","",[-0.249,-0.249],"",4,[[0,[0.0,1.8],8,[1.0,0.0]],[0,[1.8],"",[0.0]],[4,[],"",40]],{}],[7,"Star","","",[-0.249,-0.249],"",4,[[4,[],"",45]],{}],[12,"MEDIA KIT","","",[53.462,11.5],"",4,[[4,[],"",46]],{}],[13,"for established company","","",[104.5,12.0],"",4,[[4,[],"",47]],{}],[14,"YOU CHOOSE!","","",[51.0,8.5],"",4,[[4,[],"",48]],{}],[15,"product photo","","",[45.0,9.0],"",4,[[0,[0.0,0.8],8,[0.0,1.0]],[0,[0.8],"",[1.0]],[4,[],"",49]],{}],[16,"1","","",[0.252,0.252],"",4,[[4,[0.0,0.8],8,50],[4,[0.8],"",51]],{}],[25,"Line 1","","",[272.5,389.0],"",4,[[0,[0.0,0.8],8,[0.0,1.0]],[0,[0.8],"",[1.0]],[4,[],"",53]],{}],[26,"jingle",[0.1],"",[26.0,12.0],"",4,[[0,[0.0,0.8],8,[0.0,1.0]],[0,[0.8],"",[1.0]],[4,[],"",54]],{}],[27,"2",[0.1],"",[-0.498,-0.499],"",4,[[4,[0.0,0.8],8,55],[4,[0.8],"",56]],{}],[29,"Line 2",[0.1],"",[240.0,335.5],"",4,[[0,[0.0,0.8],8,[0.0,1.0]],[0,[0.8],"",[1.0]],[4,[],"",57]],{}],[30,"video",[0.2],"",[26.0,12.0],"",4,[[0,[0.0,0.8],8,[0.0,1.0]],[0,[0.8],"",[1.0]],[4,[],"",58]],{}],[31,"3",[0.2],"",[0.252,0.252],"",4,[[4,[0.0,0.9],8,59],[4,[0.9],"",60]],{}],[40,"Line 3",[0.2],"",[254.0,275.0],"",4,[[0,[0.0,0.9],8,[0.0,1.0]],[0,[0.9],"",[1.0]],[4,[],"",62]],{}],[41,"integrated\nmarketing",[0.3],"",[100.0,12.0],"",4,[[0,[0.0,0.8],8,[0.0,1.0]],[0,[0.8],"",[1.0]],[4,[],"",63]],{}],[42,"4",[0.3],"",[0.252,0.252],"",4,[[4,[0.0,1.0],8,64],[4,[1.0],"",65]],{}],[47,"Line 4",[0.3],"",[308.0,233.0],"",4,[[0,[0.0,1.0],8,[0.0,1.0]],[0,[1.0],"",[1.0]],[4,[],"",67]],{}],[48,"viral promo",[0.4],"",[55.0,12.0],"",4,[[0,[0.0,0.8],8,[0.0,1.0]],[0,[0.8],"",[1.0]],[4,[],"",68]],{}],[49,"5",[0.4],"",[0.252,0.252],"",4,[[4,[0.0,1.0],8,69],[4,[1.0],"",70]],{}],[57,"Line 5",[0.4],"",[389.0,232.5],"",4,[[0,[0.0,1.0],8,[0.0,1.0]],[0,[1.0,1.1],"",[1.0]],[0,[1.1],"",[1.0]],[4,[0.0,1.0],"",72],[4,[1.0,1.1],"",73],[4,[1.1],"",74]],{}],[58,"design",[0.5],"",[31.0,12.0],"",4,[[0,[0.0,0.8],8,[0.0,1.0]],[0,[0.8],"",[1.0]],[4,[],"",75]],{}],[59,"6",[0.5],"",[0.252,0.252],"",4,[[4,[0.0,1.1],8,76],[4,[1.1],8,77]],{}],[64,"Line 6",[0.5],"",[446.5,277.5],"",4,[[0,[0.0,1.1],8,[0.0,1.0]],[0,[1.1],8,[1.0]],[4,[],"",79]],{}],[65,"transmedia",[0.6],"",[53.5,12.0],"",4,[[0,[0.0,0.8],8,[0.0,1.0]],[0,[0.8],"",[1.0]],[4,[],"",80]],{}],[66,"7",[0.6],"",[0.252,0.252],"",4,[[4,[0.0,1.1],8,81],[4,[1.1],8,82]],{}],[71,"Line 7",[0.6],"",[461.0,332.0],"",4,[[0,[0.0,1.1],"",[0.0,1.0]],[0,[1.1],"",[1.0]],[4,[],"",83]],{}],[72,"and more!",[0.7],"",[48.0,12.0],"",4,[[0,[0.0,0.8],8,[0.0,1.0]],[0,[0.8],"",[1.0]],[4,[0.0,0.8],8,84],[4,[0.8],"",84]],{}],[73,"8",[0.7],"",[0.252,0.252],"",4,[[4,[0.0,1.1],8,85],[4,[1.1],8,86]],{}],[79,"Line 8",[0.7],"",[428.5,389.5],"",4,[[0,[0.0,1.1],8,[0.0,1.0]],[0,[1.1],"",[1.0]],[4,[],"",88]],{}]],{}],[1,"",[[3,"Bezier1","","",[132.37,86.25],"",4,[[4,[],"",41]],{}],[4,"Bezier2","","",[86.25,86.25],"",4,[[4,[],"",42]],{}],[5,"Bezier3","","",[40.129,86.25],"",4,[[4,[],"",43]],{}],[6,"Bezier4","","",[86.251,86.25],"",4,[[4,[],"",44]],{}]]],[3,"#ffffff","","",0],[3,"#ffffff","","",1],[3,"#ffffff","","",2],[3,"#ef4645","","",3],[1,"",[[8,"Bezier1","","",[132.37,86.25],"",4,[[4,[],"",41]],{}],[9,"Bezier2","","",[86.25,86.25],"",4,[[4,[],"",42]],{}],[10,"Bezier3","","",[40.129,86.25],"",4,[[4,[],"",43]],{}],[11,"Bezier4","","",[86.251,86.25],"",4,[[4,[],"",44]],{}]]],[3,"#ffffff","","",0],[3,"#ffffff","","",1],[3,"#ffffff","","",2],[3,"#333333","","",3],[4,"#000000","","","bold 30px Lato-Bold","center","MEDIA KIT",2],[4,"#000000","","","20px Lato-Light","center","for established company",2],[4,"#000000","","","18px Lato-Regular","","YOU CHOOSE!",2],[4,"#969696","","","20px Lato-Light","center","product photo",2],[1,"",[[17,"Composite1","","",[37.75,37.746],"",4,[[4,[],"",52]],{}],[24,"Bezier1","","",[37.751,37.749],"",4,[[4,[],"",44]],{}]]],[1,"",[[18,"Bezier1","","","","",4,[],{}],[19,"Bezier2","","","","",4,[],{}],[20,"Bezier3","","","","",4,[],{}],[21,"Bezier4","","","","",4,[],{}],[22,"Bezier5","","","","",4,[],{}],[23,"Bezier6","","","","",4,[],{}]]],[3,"#ffffff","","",4],[3,"#ffffff","","",5],[3,"#ffffff","","",6],[3,"#ffffff","","",7],[3,"#ffffff","","",8],[3,"#ffffff","","",9],[3,"#ee4645","","",10],[3,"",[2.0,"#9e9e9e","","",-1.0],"",11],[4,"#969696","","","bold 20px Lato-Light","center","jingle",2],[1,"",[[28,"Bezier1","","",[37.75,37.747],"",4,[[2,[],"",[0.993]],[4,[],"",44]],{}]]],[3,"#ee4645","","",12],[3,"",[2.0,"#9e9e9e","","",-1.0],"",13],[4,"#969696","","","bold 20px Lato-Light","center","video",2],[1,"",[[32,"Bezier1","","",[37.75,37.749],"",4,[[4,[],"",44]],{}],[33,"Composite1","","",[36.75,37.749],"",4,[[4,[],"",61]],{}],[39,"Bezier2","","",[37.751,37.75],"",4,[[4,[],"",44]],{}]]],[3,"#ffffff","","",14],[1,"",[[34,"Bezier1","","","","",4,[],{}],[35,"Bezier2","","","","",4,[],{}],[36,"Bezier3","","","","",4,[],{}],[37,"Bezier4","","","","",4,[],{}],[38,"Bezier5","","","","",4,[],{}]]],[3,"#ffffff","","",15],[3,"#ffffff","","",16],[3,"#ffffff","","",17],[3,"#ffffff","","",18],[3,"#ffffff","","",19],[3,"#ee4645","","",20],[3,"",[2.0,"#9e9e9e","","",-1.0],"",21],[4,"#969696","","","bold 20px Lato-Light","center","integrated marketing",2],[1,"",[[43,"Composite1","","",[37.466,39.487],"",4,[[4,[],"",66]],{}],[46,"Bezier1","","",[37.751,37.75],"",4,[[4,[],"",44]],{}]]],[1,"",[[44,"Bezier1","","","","",4,[],{}],[45,"Bezier2","","","","",4,[],{}]]],[3,"#ffffff","","",22],[3,"#ffffff","","",23],[3,"#ee4645","","",20],[3,"",[2.0,"#9e9e9e","","",-1.0],"",24],[4,"#969696","","","bold 20px Lato-Light","center","viral promo",2],[1,"",[[50,"Composite1","","",[36.992,36.846],"",4,[[4,[],"",71]],{}],[56,"Bezier1","","",[37.751,37.75],"",4,[[4,[],"",44]],{}]]],[1,"",[[51,"Composite1","","","","",4,[],{}],[54,"Bezier1","","","","",4,[],{}],[55,"Bezier2","","","","",4,[],{}]]],[1,"",[[52,"Bezier1","","","","",4,[],{}],[53,"Bezier2","","","","",4,[],{}]]],[3,"#ffffff","","",25],[3,"#ffffff","","",26],[3,"#ffffff","","",27],[3,"#ffffff","","",28],[3,"#ee4645","","",20],[3,"",[2.0,"#9e9e9e","","",-1.0],"",29],[4,"#969696","","","bold 20px Lato-Light","center","design",2],[1,"",[[60,"Composite1","","",[40.579,40.162],"",4,[[4,[],"",78]],{}],[63,"Bezier1","","",[37.751,37.75],"",4,[[4,[],"",44]],{}]]],[1,"",[[61,"Bezier1","","","","",4,[],{}],[62,"Bezier2","","","","",4,[],{}]]],[3,"#ffffff","","",30],[3,"#ffffff","","",31],[3,"#ee4645","","",20],[3,"",[2.0,"#9e9e9e","","",-1.0],"",32],[4,"#969696","","","bold 20px Lato-Light","center","transmedia",2],[1,"",[[67,"Composite1","","",[37.75,37.751],"",4,[[4,[],"",44]],{}],[70,"Bezier1","","",[37.751,37.75],"",4,[[4,[],"",44]],{}]]],[1,"",[[68,"Bezier1","","","","",4,[],{}],[69,"Bezier2","","","","",4,[],{}]]],[3,"#ffffff","","",33],[3,"#ffffff","","",34],[3,"#ee4645","","",20],[3,"",[2.0,"#9e9e9e","","",-1.0],"",35],[4,"#969696","","","bold 20px Lato-Light","center","and more!",2],[1,"",[[74,"Composite1","","",[37.751,37.749],"",4,[[4,[],"",87]],{}],[78,"Bezier1","","",[37.751,37.75],"",4,[[4,[],"",44]],{}]]],[1,"",[[75,"Bezier1","","","","",4,[],{}],[76,"Bezier2","","","","",4,[],{}],[77,"Bezier3","","","","",4,[],{}]]],[3,"#ffffff","","",36],[3,"#ffffff","","",37],[3,"#ffffff","","",38],[3,"#ee4645","","",20],[3,"",[2.0,"#9e9e9e","","",-1.0],"",39]],"scenes":[1]}};

var importer                  = anm.importers.create('animatron');
var played1, played2, played3 = false;

var player1  = anm.createPlayer('star1', {
	autoPlay: false,
	controlsEnabled: false
}).load(star1, importer);

var player2 = anm.createPlayer('star2', {
	autoPlay: false,
	controlsEnabled: false
}).load(star2, importer);

var player3 = anm.createPlayer('star3', {
	autoPlay: false,
	controlsEnabled: false
}).load(star3, importer);

$('#star1').on('click', function() {
	if (!played1) {
		player1.play();
		played1 = true;
	}
});

$('#star2').on('click', function() {
	if (!played2) {
		player2.play();
		played2 = true;
	}
});

$('#star3').on('click', function() {
	if (!played3) {
		player3.play();
		played3 = true;
	}
});

player1._resize($('#star1').width(), window.innerHeight);
player2._resize($('#star2').width(), window.innerHeight);
player3._resize($('#star3').width(), window.innerHeight);
