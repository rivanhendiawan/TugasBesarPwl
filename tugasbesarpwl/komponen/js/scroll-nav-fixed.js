/**
 * Scroll Navbar Fixed Toggle
 * v 0.1 beta
 * Muhammad Rohmat
 */
((function($) {
	$.fn.scrollNavFixed = function(options){
		return this.each(function(){
			var _this = $(this);
			var s  = _this.scrollTop(),
				mn = $('.menu-top').outerHeight();
				if (s > mn) {
					$('.navbar').addClass('fixed-top');
					$('.menu-top').hide();
					var mTop = ($('header').outerHeight() + $('.menu-top').height());
					$('body').css({'margin-top':mTop});
				} else {
					$('.navbar').removeClass('fixed-top');
					$('.menu-top').show();
					$('body').removeAttr('style');
				}

			_this.scroll(function(){
				var scroll = $(this).scrollTop(),
					mmenu = $('.menu-top').outerHeight();
					if (scroll > mmenu) {
						$('.navbar').addClass('fixed-top');
						$('.menu-top').hide();
						var mTop = ($('header').outerHeight() + $('.menu-top').height());
						$('body').css({'margin-top':mTop});
					} else {		
						$('.navbar').removeClass('fixed-top');
						$('.menu-top').show();
						$('body').removeAttr('style');
					}
			});
		});
	};
})(jQuery));

/**
 * Scroll To Top
 * version 0.2 beta
 * Muhammad Rohmat
 */
(function($){
	$.fn.backTop = function(){
		return this.each(function(){
			var _this = $(this);
			_this.css({
				'position': 'fixed',
				'bottom': '20px',
				'right': '15px',
				'padding': '0 10px',
				'font-size': '28px',
				'cursor': 'pointer',
				'display': 'none',
				'vertical-align': 'middle',
				'text-align': 'center',
				'z-index': '990'
			});
			$(document).scroll(function(){
				var scrollX = $(this).scrollTop(),
					minX	= parseInt($(window).height()/3);
					if (scrollX > minX) {
						_this.fadeIn();
					} else {
						_this.fadeOut();
					}
			});
			_this.click(function(){
				var time = parseInt($(document).scrollTop()/3);
				$('body,html').animate({scrollTop:0},time);
			});
		});
	};
})(jQuery);

