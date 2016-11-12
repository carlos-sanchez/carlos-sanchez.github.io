$(document).ready(function(){

/*-----------------------------------------------------------------------------------*/
/* fade effect / just add class="fade" to the item you want fade.
/*-----------------------------------------------------------------------------------*/
	
	if ( $.browser.msie ) {
    	$( '.fade' );
 	} else {
    	$( '.fade' ).hover(
			function () {
    			$(this).stop(true, false).animate({"opacity" : .3 }, 400 );
  			}, 
			function () {
    			$(this).stop(true, false).animate({"opacity" : 1}, 400 );
  			}
		);
 	}
 	
 	if ( $.browser.msie ) {
    	$( 'body' ).addClass('ie');
 	}

	
/*-----------------------------------------------------------------------------------*/
/* twitter widget
/*-----------------------------------------------------------------------------------*/		
	
	$(".tweet").tweet({
		username: "SMASHINGMAG", /* change the twitter username here */	
		join_text: "auto",
		avatar_size: 40,
		count: 3,
		auto_join_text_default: "we said,",
		auto_join_text_ed: "we",
		auto_join_text_ing: "we were",
		auto_join_text_reply: "we replied to",
		auto_join_text_url: "we were checking out",
		loading_text: "loading tweets..."
	});
	
/*-----------------------------------------------------------------------------------*/
/* smooth scroll
/*-----------------------------------------------------------------------------------*/	
	
	$('.main-nav a,.slide-home').click(function(event) {
		event.preventDefault();
		var link = this;
		$.smoothScroll({
			scrollTarget: link.hash
		});
	}); 

/*-----------------------------------------------------------------------------------*/
/* ScrollSpy bootstrap-scrollspy.js
/*-----------------------------------------------------------------------------------*/	

	$('#main-nav').scrollSpy()
	
/*-----------------------------------------------------------------------------------*/
/* toggle boxes
/*-----------------------------------------------------------------------------------*/	

	$('.toggle-content').hide(); 
	$('.toggle-link').click(function () {
 		if ($(this).is('.toggle-close')) {
  			$(this).removeClass('toggle-close').addClass('toggle-open').parents('div.toggle').find('.toggle-content').slideToggle(300);
  			return false;
  		} else {
  			$(this).removeClass('toggle-open').addClass('toggle-close').parents('div.toggle').find('.toggle-content').slideToggle(300);
  			return false;
  		}
	});

/*-----------------------------------------------------------------------------------*/
/* totop button
/*-----------------------------------------------------------------------------------*/	
	
	// $('#toTop').UItoTop(); 

/*-----------------------------------------------------------------------------------*/
/* run fancybox
/*-----------------------------------------------------------------------------------*/
	
	// $("a.inline").fancybox({
	// 	padding: 20,
	// 	margin: 20,
	// 	cyclic: true,
	// 	scrolling: false,
	// 	overlayColor: '#41434d',
	// 	onStart: onStart,
	// 	titleShow: false
	// });
	
	// function onStart() {
	// 	$('.slides_control').each(function() {
	// 		var $ht = $(this).find('img').height();
	// 		$(this).css("height", $ht);
	// 	});
	// }
	
/*-----------------------------------------------------------------------------------*/
/* Slides
/*-----------------------------------------------------------------------------------*/
	
	if(jQuery().slides) {
		jQuery(".slides").slides({
			generatePagination: true,
			effect: 'fade',
			autoHeight: true,
			bigTarget: true,
			preload: true
		});
		
		jQuery(".slides-home").slides({
			generatePagination: true,
			effect: 'fade',
			autoHeight: true,
			generateNextPrev: true,
			bigTarget: false,
			preload: true
		});
		
		$('.slides_control').each(function() {
			var $ht = $(this).find('img').height();
			$(this).css("height", $ht);
		});
		
	}
  
/*-----------------------------------------------------------------------------------*/
/* Done!
/*-----------------------------------------------------------------------------------*/ 
}); 

	
