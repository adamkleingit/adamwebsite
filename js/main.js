(function($) {
	'use strict';

	
		$(document).ready(function(){
			
			
			/*PRELOADER JS*/
			$(window).on('load', function() {  
				$('.spinner').fadeOut();
				$('.preloader').delay(350).fadeOut('slow'); 
			}); 
			/*END PRELOADER JS*/
				
			
			$(window).scroll(function() {
				
				  if ($(this).scrollTop() > 100) {
					$('#header').addClass('menu-shrink');
				  } else {
					$('#header').removeClass('menu-shrink');
				  }
				});
				
				
				/*	Mobile Menu
				------------------------*/

				jQuery('#navigation').meanmenu({
					meanScreenWidth: "767",
					meanMenuContainer: ".menu_wrap",				
				});

				// one page nav
				$('#navigation').onePageNav({
					currentClass: 'current',
					changeHash: true,
					scrollSpeed: 500,
					scrollThreshold: 0.5,
					filter: '',
					easing: 'swing',
					begin: function() {
						//I get fired when the animation is starting
					},
					end: function() {
						//I get fired when the animation is ending
					},
					scrollChange: function(jQuerycurrentListItem) {
						//I get fired when you enter a section and I pass the list item of the section
					}
				});	

				$('#imagelink').onePageNav({
					currentClass: 'current',
					changeHash: true,
					scrollSpeed: 500,
					scrollThreshold: 0.5,
					filter: '',
					easing: 'swing',
					begin: function() {
						//I get fired when the animation is starting
					},
					end: function() {
						//I get fired when the animation is ending
					},
					scrollChange: function(jQuerycurrentListItem) {
						//I get fired when you enter a section and I pass the list item of the section
					}
				});	

			
			/*START PROGRESS-BAR JS*/
			$('.progress-bar > span').each(function(){
				var $this = $(this);
				var width = $(this).data('percent');
				$this.css({
					'transition' : 'width 2s'
				});
				
				setTimeout(function() {
					$this.appear(function() {
							$this.css('width', width + '%');
					});
				}, 500);
			});
			/*END PROGRESS-BAR JS*/
			
	
			
		})



	// WOW
	new WOW().init();
	
	// Typed
	$(".typed").each(function() {
		var $this = $(this);
		$this.typed({
			strings: $this.attr('data-elements').split(','),
			typeSpeed: 20,
			backDelay: 1000
		});
	});
		
})(jQuery);	
