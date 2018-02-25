$(function() {
	//spec programm open list
	$(".event-list .more").click(function() {
 	 $('.event-list .close').addClass('show');
	 $('.event-list .row-main').addClass('open');
	 $('.event-list').addClass('listing');
	 $('.prog_left').addClass('openList');
	 $('.prog_right').addClass('openList');
 	 $(this).addClass('hide');
  });
	$(".event-list .close").click(function() {
 	 $('.event-list .more').removeClass('hide');
	 $('.event-list .row-main').removeClass('open');
	 $('.event-list').removeClass('listing');
	 $('.prog_left').removeClass('openList');
	 $('.prog_right').removeClass('openList');
 	 $(this).removeClass('show');
  });
	//language change dropdown
	$(".language .lang").click(function() {
		$(this).parent().find('.drop').slideToggle('slow');
	});
	// Выбор специализации
 $(".specialization").click(function() {
	 $(this).find('.drop-left').slideToggle('slow');
	 $('.specialization').toggleClass('active');
 });
 // Выбор страны
 $(".countries .country-list").click(function() {
	 $(this).parent().find('.drop-right').slideToggle('slow');
	 $('.countries').toggleClass('active1');
 });
 // Выбор проекта
	$("#all-projects").click(function() {
	 $(this).find('.drop').slideToggle('slow');
	 $('#all-projects h3').toggleClass('active');
 });
	//callbackpopup
	$(".interactive .callback, #header .callback").click(function() {
		$('.popup-callback').slideDown('fast');
	});
	$(".popup-callback .cross").click(function() {
		$('.popup-callback').slideUp('fast');
	});
	$(".popup-callback .cbSubmit").click(function() {
		$('.popup-callback .popupcb').addClass('hide');
		$('.popup-callback .popupResult').addClass('show');
	});
	$(".popup-callback .exit").click(function() {
		$('.popup-callback .popupcb').removeClass('hide');
		$('.popup-callback .popupResult').removeClass('show');
		$('.popup-callback').slideUp('fast');
	});
	//homepage left n right background sliders
	$('.bxslider1').bxSlider({
		auto: true,
		mode: 'fade',
	  speed: 500
	});
	$('.bxslider2').bxSlider({
	  auto: true,
		mode: 'fade',
	  speed: 500
	});
	//portfolio-in  sliders
	$('.bxslider3').bxSlider({
		auto: true,
		speed: 500
	});
	$('.bxslider4').bxSlider({
		auto: true,
		minSlides: 1,
		maxSlides: 2,
		speed: 1000
	});
	$('.bxslider5').bxSlider({
		auto: true,
		speed: 600
	});
	$('.bxslider6').bxSlider({
		auto: true,
		speed: 1000
	});
	//portfolio-in  first-img
	setTimeout(function(){
		$('html, body').css({'overflow': 'auto'})
			.animate({
				scrollTop:$('#stop').offset().top}, 2000, function(){
									$('.top-img-wrapper').hide('slow');
									$('.header').addClass('opacity');
				});
	}, 500);
	//tabs
		$('#tabs li').click(function(){
        var thisClass = this.className.slice(0,2);
        $('div.t1').hide();
        $('div.t2').hide();
        $('div.' + thisClass).fadeIn(100);
        $('#tabs li').removeClass('active');
        $(this).addClass('active');
        return false;
    });
    $('li.t1').click();
	//contact map image
	var lFollowX = 0,
    lFollowY = 0,
    x = 0,
    y = 0,
    friction = 1 / 30;
	function moveBackground() {
	  x += (lFollowX - x) * friction;
	  y += (lFollowY - y) * friction;
	  translate = 'translate(' + x + 'px, ' + y + 'px) scale(1.1)';
	  $('.bg-map').css({
	    '-webit-transform': translate,
	    '-moz-transform': translate,
	    'transform': translate
	  });
	   window.requestAnimationFrame(moveBackground);
	}
	$(window).on('mousemove click', function(e) {
	  var lMouseX = Math.max(-100, Math.min(100, $(window).width() / 2 - e.clientX));
	  var lMouseY = Math.max(-100, Math.min(100, $(window).height() / 2 - e.clientY));
	  lFollowX = (20 * lMouseX) / 100; // 100 : 12 = lMouxeX : lFollow
	  lFollowY = (10 * lMouseY) / 100;
	});
	moveBackground();
	//owl
	$('.travel-slider').owlCarousel({
        center: true,
        items:3,
        loop:true,
        margin:30,
        autoplay:true,
				dots:false,
        autoplayTimeout:2000,
        autoplayHoverPause:true,
        smartSpeed: 1000,
    });

  // //scrolling end
  // $('.a_arrow').click(function() {
  //   $('body,html').animate({scrollTop:0},800);
  // });




});
