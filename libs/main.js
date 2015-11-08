$(function() {   
	$("body").fadeIn(1000, function() {
		$("#market-rev-intro").owlCarousel({
			slideSpeed : 300,
			paginationSpeed : 400,
			singleItem : true,
			autoPlay : 3000,
			stopOnHover : false,
			transitionStyle : 'fade',
			mouseDrag: false,
			touchDrag: false
		});
		$("#market-rev-intro").css('visibility', 'visible');
		$("#market-rev-intro").addClass('animated fadeIn');
		repeater = setInterval(scrollCheck, 50);
	}); 
	// reason 1 interaction
	$("#map1").popover({ container: ".mapContainer", placement: "right" });
	$("#map2").popover({ container: ".mapContainer", placement: "left" });
	$("#map3").popover({ container: ".mapContainer", placement: "right" });
	// reason 2 interaction
	$("#spinning-wheel-compare").on('touchstart click', function(event) {
		if ($(this).attr("src") != "imgs/reason2/spinning-wheel-compare-2.jpg") {
			$(this).fadeOut(400, function() {
				$(this).attr("src", "imgs/reason2/spinning-wheel-compare-2.jpg");
			}).fadeIn(400);
		} else {
			$(this).fadeOut(400, function() {
				$(this).attr("src", "imgs/reason2/spinning-wheel-compare-1.png");
			}).fadeIn(400);
		}
	});
	$("#cotton-gin-compare").on('touchstart click', function(event) {
		if ($(this).attr("src") != "imgs/reason2/cotton-gin-compare-2.png") {
			$(this).fadeOut(400, function() {
				$(this).attr("src", "imgs/reason2/cotton-gin-compare-2.png");
			}).fadeIn(400);
		} else {
			$(this).fadeOut(400, function() {
				$(this).attr("src", "imgs/reason2/cotton-gin-compare-1.png");
			}).fadeIn(400);
		}
	});
	// reason 3 interaction
	$("#workers-compare").on('touchstart click', function(event) {
		if ($(this).attr("src") != "imgs/outcomes/workers-compare-2.jpg") {
			$(this).fadeOut(400, function() {
				$(this).attr("src", "imgs/outcomes/workers-compare-2.jpg");
			}).fadeIn(400);
		} else {
			$(this).fadeOut(400, function() {
				$(this).attr("src", "imgs/outcomes/workers-compare-1.jpg");
			}).fadeIn(400);
		}
	});
	$("#outcomes-compare").on('touchstart click', function(event) {
		if ($(this).attr("src") != "imgs/outcomes/outcomes-4.png") {
			$(this).fadeOut(400, function() {
				$(this).attr("src", "imgs/outcomes/outcomes-4.png");
			}).fadeIn(400);
		} else {
			$(this).fadeOut(400, function() {
				$(this).attr("src", "imgs/outcomes/outcomes-3.jpg");
			}).fadeIn(400);
		}
	});
	$("#outcomes-1").popover({ container: ".outcomesContainer", placement: "right" });
	$("#outcomes-3").popover({ container: ".outcomesContainer", placement: "left" });
	$("#outcomes-2").popover({ container: ".outcomesContainer", placement: "right" });
	// smooth scroll
	$('a[href*=#]:not([href=#])').on('touchstart click', function() {
		if (location.pathname.replace(/^\//,'') == this.pathname.replace(/^\//,'') && location.hostname == this.hostname) {
			var target = $(this.hash);
			target = target.length ? target : $('[name=' + this.hash.slice(1) +']');
			if (target.length) {
				$('html,body').animate({
					scrollTop: target.offset().top - 84
				}, 1000);
				return false;
			}
		}
	});
});
var intro = $("#intro"), reason1 = $("#reason1"), reason2 = $("#reason2"), outcomes = $("#outcomes"), repeater;
function scrollCheck() {
	if (isScrolledIntoView(intro)) { intro.css('visibility', 'visible'); intro.addClass('animated bounceInLeft'); }
	if (isScrolledIntoView(reason1)) { reason1.css('visibility', 'visible'); reason1.addClass('animated bounceInRight'); }
	if (isScrolledIntoView(reason2)) { reason2.css('visibility', 'visible'); reason2.addClass('animated bounceInLeft'); }
	if (isScrolledIntoView(outcomes)) { outcomes.css('visibility', 'visible'); outcomes.addClass('animated bounceInRight'); scrollDone(); }
}
function scrollDone() { clearInterval(repeater); }
function isScrolledIntoView(elem) {
	var $window = $(window);
	var docViewTop = $window.scrollTop();
	var docViewBottom = docViewTop + $window.height();
	var elemTop = elem.offset().top;
	return (elemTop <= docViewBottom);
}
