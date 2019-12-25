var section = window.location.href.split("/").pop().split("#")[0].split(".")[0];

/* ----------------------- loader.js */

$(window).load(function(e) {
	$("aside.loader").fadeOut(500);
});


/* ----------------------- smooth.js */

$(function() {
	$('a[href*="#"].smooth').click(function() {
		if (location.pathname.replace(/^\//,'') == this.pathname.replace(/^\//,'') && location.hostname == this.hostname) {
			var target = $(this.hash);
			target = target.length ? target : $('[name=' + this.hash.slice(1) +']');
			if (target.length) {
				$('html, body').animate({
					scrollTop: target.offset().top
				}, 1000);
				return false;
			}
		}
	});
});

/* ----------------------- main.js */

$(window).mousemove(function(e) { cursorXY(e); });
$(window).resize(function(e) { cursorXY(e); });

$(window).load(function(e) {
	$("html, body").addClass(section);

	cursorXY(e);
	setSection();
	pixelModal();
	setMap();

	$(".fix-text").mCustomScrollbar({
		theme:"rounded-dots"
	});

	var services = $('#services');
	if( services.length > 0 ) {
		services.find("#tips").on("click", function(){
			services.find(".highlight").stop().slideToggle(500);
		})
	}

});


/* ----------------------- modal.js */
function pixelModal(w){

	var pptModal = $(".pixel-modal");

	$( ".close-pixel-modal" ).on( "click", function(){
		pptModal.fadeOut(500);
	});

	$(".active .open-pixel-modal").on( "click", function(){
		$(this)
		.parent()
		.parent()
		.find(".pixel-modal")
		.fadeIn(500);
	});
}

/* ----------------------- setSections.js */
function setSection(){

	// first color of the array is the nav color, second color is the contact-us section
	var color = {
		"home": ["blue", "olive"],
		"about-us": ["red", "yellow"],
		"mac-support": ["green", "orange"],
		"other-services": ["purple", "olive"],
		"portfolio": ["cyan", "purple"],
		"contact-us": ["orange", "none"],
		"thank-you": ["orange", "none"]
	};

	var section = window.location.href.split("/").pop().split("#")[0].split('.')[0] || 'home';
	if(section == "services" || section == "other-services"){
		$("#nav").find("li.dropdown").addClass("active-dropdown");
	}

	$("#nav").addClass( color[section][0] );
	$("section.call-us").addClass( color[section][1] );

	$("a[href^=" + section + "]")
	.append("<span class='sr-only'>(current)</span>")
	.parent()
	.addClass("active");
}


/* ----------------------- floatingElements.js */
function cursorXY(w){

	var dw = $(window).width() || document.width ||
		document.documentElement.clientWidth ||
		document.innerWidth ||
		window.innerWidth ||
		screen.width;

	var dh = $(window).height() ||
		document.height ||
		document.documentElement.clientHeight ||
		document.innerHeight ||
		window.innerHeight ||
		screen.height;

	if (!w) var w = window.event;
	if ( w.pageX ||
			w.pageY ||
			w.clientX ||
			w.clientY ||
			w.pageXOffset ||
			w.pageYOffset ){
		var cx = w.pageX || w.clientX || w.pageXOffset;
		var cy = w.pageY || w.clientY || w.pageYOffset;
	}

	if( section == "home" ){
		var fobj = [
			"#home .wireframe"
		];

		var pointY = -50;

		$( fobj[0] ).css({
			"bottom": pointY + ( ( cy + cx ) * 0.01 )
		});
	}

	else if( section == "about-us" ){

		var fobj = [
			"img.base",
			"img.manager"
		];

		var pointX = 0;
		if ( dw < 500 ){ pointX = 75; }

		$( fobj[0] ).css({
			"left": pointX + ( ( cy ) * 0.009 )
		});

		$( fobj[1] ).css({
			"left": 200 + ( ( cy ) * -0.05 )
		});
	}

}


/* ----------------------- map.js */

function setMap() {
	if($('#contact,#thanks').length > 0) {

	/* --- google map --- */
		var map = new GMaps({
			div: '#map',
			lat: 51.5253459,
			lng: -0.1095716,
			zoom: 18,
			scrollwheel: false
		});

		var merge;

		merge = "<aside class='overlay'>";
		merge += "<img src='img/map-logo.png' width='60'>";
		merge += "<br>";
		merge += "<span class='point'></span>";
		merge += "</aside>";

		map.drawOverlay({
			lat: 51.5253459,
			lng: -0.1095716,
			content: merge
		});
	}
}