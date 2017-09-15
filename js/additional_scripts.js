(function($){

	$(window).on("load",function(){

		$(".scroll").mCustomScrollbar();

	});

})(jQuery);

$(document).ready(function() {

 $(".main-slider").not(".slick-initialized").slick({
    dots: false,
    arrows: false,      
    autoplay: true,
    autoplaySpeed: 10000,
    speed: 1200,
    slidesToShow: 1,
    fade: true
  });

  $(".blog-slider").not(".slick-initialized").slick({
    dots: false,
    arrows: false,      
    autoplay: true,
    autoplaySpeed: 10000,
    speed: 1200,
    slidesToShow: 1,
    fade: true
  });

	$("select").select2({
		minimumResultsForSearch: Infinity
	});



});