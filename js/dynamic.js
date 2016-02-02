$(function() {
	$('.menu > li > ul').parent().hover(
		function() {
			$(this).children('ul').stop(true,true).fadeIn(100);
		},
		function() {
			$(this).children('ul').stop(true,true).delay(50).fadeOut(100);
		}
	);
	$('.quantity-e .minus').click(function(e) {
		e.preventDefault();
		var $input = $(this).parent().find('input');
		var count = parseInt($input.val()) - 1;
		count = count < 1 ? 1 : count;
		$input.val(count);
		$input.change();
	});
	$('.quantity-e .plus').click(function(e) {
		e.preventDefault();
		var $input = $(this).parent().find('input');
		$input.val(parseInt($input.val()) + 1);
		$input.change();
	});
	$('.benefits-b .tabs > ul li a').bind('click', function(e) {
		e.preventDefault();
		$(this).parents('.tabs').children('div[data-tab="'+$(this).attr('href')+'"]').show().siblings('div').hide();
		$(this).parent().addClass('active').siblings().removeClass();
	}).filter(':first').click();
	if ( $('.benefits-b .clients > ul li').length > 5 ) {
		$('.benefits-b .clients > ul').jcarousel({
			scroll: 1,
			animation: 500,
			easing: 'easeInOutQuad',
			wrap: 'circular'
		});
		$('.benefits-b .clients').bind('swipeleft', function() {
			$('.benefits-b .clients .jcarousel-next').trigger('click');
		});
		$('.benefits-b .clients').bind('swiperight', function() {
			$('.benefits-b .clients .jcarousel-prev').trigger('click');
		});
	}
	if ( $('.index').length > 0 ) {
		$('.bg .plain').height(553);
		$('.bg .pattern').height(386);
	}
	if ( $('header .submenu').length > 0 ) {
		$('header .submenu > li').append('<span></span>');
	}
	$('header nav > ul > li > ul').parent().hover(
		function() {
			$(this).children('ul').stop(true,true).fadeIn(100);
		},
		function() {
			$(this).children('ul').stop(true,true).delay(100).fadeOut(100);
		}
	);
	$('header nav > ul > li > ul > li').bind('mouseover', function() {
		var c = $(this).children('ul');
		c.stop().stop(true,true).fadeIn(100);
		$(this).siblings('li').children('ul').stop(true,true).delay(100).fadeOut(100);
		$(this).addClass('active').siblings().removeClass('active');
		$(this).find('ul span').each(function() {
			$(this).height(c.height()-26);
		});
	});
	$('header nav > ul > li > ul').parent('li').one('mouseover', function() {
		var t = $(this).children('ul').children('li:first-child');
		var d = $('header nav > ul > li > ul > li');
		t.addClass('active');
		t.children('ul').show();
		var max = 0;
		d.children('a').each(function() {
			var h = $(this).height(); 
			max = h > max ? h : max;
		});
		d.children('a').height(max);
		d.children('ul').css({
			'top': t.outerHeight()+'px'
		});
		$(this).children('ul').height(t.outerHeight());
		t.find('ul span').each(function() {
			$(this).height(t.children('ul').height()-26);
		});
	});
	if ( $('input[type="checkbox"]').length > 0 ) {
		$('input[type="checkbox"]').uniform();
	}
	if ( $('input[type="radio"]').length > 0 ) {
		$('input[type="radio"]').uniform();
	}
	if ( $('.product-s').length > 0 ) {
		$('.catalog-c').append('<span class="bg-p"></span>');
		$('.bg-p').css({
			'height': $('.catalog-c').outerHeight()-$('.product-s').outerHeight()-26+'px'
		});
	}
	if ( $('.list-c').length > 0 && $('.phone-i').length ) {
		$('.list-c').css({
			'padding': '0 0 94px'
		});
	}
	if ( $('.list-c .more button').length > 0 ) {
		$('.list-c .more').has('button').css({
			'padding-bottom': '42px'
		});
	}
	$('button[data-map]').bind('click', function(e) {
		e.preventDefault();
		var t = $('div[data-map="'+$(this).attr('data-map')+'"]');
		if ( t.is(':visible') ) {
			t.stop().fadeOut(100);
			$(this).removeClass();
		} else {
			t.css({
				'top': $(this).offset().top+$(this).outerHeight()+'px'
			}).stop().fadeIn(100);
			$(this).addClass('opened');
		}
	});
	$('input, textarea').each(function() {
		$(this).data('holder', $(this).attr('placeholder'));
		$(this).focusin(function() {
			$(this).attr('placeholder', '');
		});
		$(this).focusout(function() {
			$(this).attr('placeholder', $(this).data('holder'));
		});
	});
	function searchScroll() {
		var h = -15;
		for ( var i=1; i<=4; i++ ) {
			h = h+ $('.search-r ul li:nth-child('+i+')').outerHeight();
		}
		$('.search-r .container').css({
			'height': h+'px'
		});
		$('.search-r ul').css({
			'margin-right': '43px'
		});
		$('.search-r .container').jScrollPane({
			autoReinitialise: true,
			verticalDragMinHeight: 83,
			verticalDragMaxHeight: 83
		});
	}
	$('html').click(function(e) {
		e.stopPropagation();
		$('div[data-map').stop().fadeOut(100);
		$('button[data-map]').removeClass();
		$('.search-b').removeClass('drop');
		$('.search-r').stop().fadeOut(100);
	});
	$('[data-map], .search-b').click(function(e) {
		e.stopPropagation();
	});
	$('.search-b input').keyup(function() {
		if ( $('.search-b input').val().length > 0 ) {
			$(this).parent().addClass('drop');
			$('.search-r').css({
				'top': $(this).parent().offset().top+'px'
			}).stop().fadeIn(100);
			if ( $('.search-r ul li').length > 4 ) {
				searchScroll();
			}
		} else {
			$(this).parent().removeClass('drop');
			$('.search-r').stop().fadeOut(100);
		}
	});
	$('.search-b input').focusin(function() {
		if ( $('.search-b input').val().length > 0 && $('.search-r ul li').length > 0 ) {
			$(this).parent().addClass('drop');
			$('.search-r').css({
				'top': $(this).parent().offset().top+'px'
			}).stop().fadeIn(100);
		}
	});
	if ( $('.contacts-b .core ul').length > 0 ) {
		$('.contacts-b .core ul li div').each(function() {
			$(this).css({
				'margin-top': -$(this).outerHeight()/2-1+'px'
			});
		});
		$('.contacts-b .core ul').css({
			'opacity': '1'
		});
	}
	$('.modal').append('<span class="close"></span>');
	$('[data-open]').bind('click', function(e) {
		e.preventDefault();
		$('header .lk').stop().slideUp(250);
		var t = $('.modal[data-target="'+$(this).attr('data-open')+'"]');
		$('.fade').stop(true,true).fadeIn(500);
		var h = $(window).scrollTop()+($(window).height()-t.outerHeight())/2;
		if ( h < 0 ) {
			h = 0;
		}
		t.css({
			'top': h+'px'
		}).stop(true,true).fadeIn(500);
	});
	$('.fade, .modal .close').bind('click', function(e) {
		e.preventDefault();
		$('.fade, .modal').stop(true,true).fadeOut(500);
	});
});
$(window).load(function() {
	if ( $('.menu').length > 0 ) {
		$(function() {
			var max = 0;
			$('.menu > li > a').each(function() {
				var h = $(this).height(); 
				max = h > max ? h : max;
			});
			$('.menu > li > a').height(max);
			$('.menu > li > ul').css({
				'top': $('.menu > li').outerHeight()+'px'
			});
			$('.menu > li > ul > li').append('<span></span>');
			$('.menu > li > ul > li > span').each(function() {
				$(this).height($(this).parent().parent().height()-26);
			});
		});
	}
	if ( $('.list-c > ul > li .payment').length > 0 ) {
		$(function() {
			var max = 0;
			$('.list-c > ul > li .payment li').each(function() {
				var h = $(this).height(); 
				max = h > max ? h : max;
			});
			$('.list-c > ul > li .payment li').height(max);
			$('.list-c > ul > li .payment').css({
				'opacity': '1'
			});
		});
	}
});