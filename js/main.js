(function($) {
	'use strict';

	
		$(document).ready(function(){
			
			
			/*PRELOADER JS*/
			$(window).on('load', function() {  
				$('.spinner').fadeOut();
				$('.preloader').delay(350).fadeOut('slow'); 
			}); 
			/*END PRELOADER JS*/
				
			// jQuery Lightbox
			jQuery('.lightbox').venobox({
				numeratio: true,
				infinigall: true
			});	
			
			
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
			
	
			// jQuery MixItUp
			$('.portfolio_item').mixItUp({
		
			});	
			
		
			// Testimonials slider 
			$('.test_slide_area').owlCarousel({
				loop:true,	
				autoplay:true,			
				autoplay:true,
				nav:true,
				navText: ["<i class='ti-arrow-left'>", "<i class='ti-arrow-right'>"],
				margin: 0,
				dots: false,
				responsive:{
					0:{
						items:1
					},
					600:{
						items:1
					},
					1000:{
						items:1
					}
				}
			})
					
			// client slider 
			$('.client_slide_area').owlCarousel({
				loop:true,	
				autoplay:true,			
				autoplay:true,
				margin: 80,
				responsive:{
					0:{
						items:2
					},
					600:{
						items:4
					},
					1000:{
						items:5
					}
				}
			})
			
			
			// Counter 
			$('.counter').counterUp({
				delay: 10,
				time: 1000
			});

			
		})


		 $('.video-popup').venobox({
			framewidth: '700px',        // default: ''
			frameheight: '450px',       // default: ''
			border: '10px',             // default: '0'
			bgcolor: '#000',         // default: '#fff'
			titleattr: 'data-title',    // default: 'title'
			numeratio: true,            // default: false
			infinigall: true            // default: false
		});

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
