$(window).scroll(function() {

var width = $(window).width();

if (width > 480) {
	 if ($(window).scrollTop() >= 60) {
		$("#elevatorPitch").fadeOut("50");
	 } else {
		$("#elevatorPitch").fadeIn("50");
	 }
}


if ($(window).scrollTop() >= 200) {
 $("#backToTop").fadeIn("50");
} else {
 $("#backToTop").fadeOut("50");
}

});
