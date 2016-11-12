$(window).scroll(function() {

var width = $(window).width();

if (width > 480) {
	 if ($(window).scrollTop() >= 60) {
		$("#elevator-pitch").fadeOut("50");
	 } else {
		$("#elevator-pitch").fadeIn("50");
	 }
}
   
});