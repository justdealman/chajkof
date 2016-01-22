$(document).ready(function() {
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
	$('input, textarea').each(function() {
		$(this).data('holder', $(this).attr('placeholder'));
		$(this).focusin(function() {
			$(this).attr('placeholder', '');
		});
		$(this).focusout(function() {
			$(this).attr('placeholder', $(this).data('holder'));
		});
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
});