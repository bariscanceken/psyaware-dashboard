$.noConflict();

jQuery(document).ready(function($) {

	"use strict";

	// Dropdown menüler için gerekli kodlar
	$('.dropdown-toggle').not('.user-area .dropdown-toggle').on('click', function(e) {
		e.preventDefault();
		e.stopPropagation();
		var $dropdown = $(this).next('.dropdown-menu');
		
		// Diğer açık menüleri kapat
		$('.dropdown-menu, .user-menu').not($dropdown).removeClass('show');
		
		// Tıklanan menüyü aç/kapat
		$dropdown.toggleClass('show');
	});

	// Sayfa herhangi bir yerine tıklandığında dropdown'ları kapat
	$(document).on('click', function(e) {
		if (!$(e.target).closest('.dropdown, .user-area').length) {
			$('.dropdown-menu, .user-menu').removeClass('show');
		}
	});

	// ESC tuşuna basıldığında dropdown'ları kapat
	$(document).on('keydown', function(e) {
		if (e.keyCode === 27) {
			$('.dropdown-menu, .user-menu').removeClass('show');
		}
	});

	// Kullanıcı menüsü için özel işlem
	$('.user-area .dropdown-toggle').on('click', function(e) {
		e.preventDefault();
		e.stopPropagation();
		var $userMenu = $(this).next('.user-menu');
		
		// Diğer açık menüleri kapat
		$('.dropdown-menu, .user-menu').not($userMenu).removeClass('show');
		
		// Kullanıcı menüsünü aç/kapat
		$userMenu.toggleClass('show');
	});

	[].slice.call( document.querySelectorAll( 'select.cs-select' ) ).forEach( function(el) {
		new SelectFx(el);
	});

	jQuery('.selectpicker').selectpicker;


	

	$('.search-trigger').on('click', function(event) {
		event.preventDefault();
		event.stopPropagation();
		$('.search-trigger').parent('.header-left').addClass('open');
	});

	$('.search-close').on('click', function(event) {
		event.preventDefault();
		event.stopPropagation();
		$('.search-trigger').parent('.header-left').removeClass('open');
	});

	$('.equal-height').matchHeight({
		property: 'max-height'
	});

	// var chartsheight = $('.flotRealtime2').height();
	// $('.traffic-chart').css('height', chartsheight-122);


	// Counter Number
	$('.count').each(function () {
		$(this).prop('Counter',0).animate({
			Counter: $(this).text()
		}, {
			duration: 3000,
			easing: 'swing',
			step: function (now) {
				$(this).text(Math.ceil(now).toLocaleString());
			}
		});
	});


	 
	 
	// Menu Trigger
	$('#menuToggle').on('click', function(event) {
		var windowWidth = $(window).width();   		 
		if (windowWidth<1010) { 
			$('body').removeClass('open'); 
			if (windowWidth<760){ 
				$('#left-panel').slideToggle(); 
			} else {
				$('#left-panel').toggleClass('open-menu');  
			} 
		} else {
			$('body').toggleClass('open');
			$('#left-panel').removeClass('open-menu');  
		} 
			 
	}); 

	 
	$(".menu-item-has-children.dropdown").each(function() {
		$(this).on('click', function() {
			var $temp_text = $(this).children('.dropdown-toggle').html();
			$(this).children('.sub-menu').prepend('<li class="subtitle">' + $temp_text + '</li>'); 
		});
	});


	// Load Resize 
	$(window).on("load resize", function(event) { 
		var windowWidth = $(window).width();  		 
		if (windowWidth<1010) {
			$('body').addClass('small-device'); 
		} else {
			$('body').removeClass('small-device');  
		} 
		
	});
  
 
});