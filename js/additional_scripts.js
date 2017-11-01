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

    if( $(".add-rating").length > 0 )  {

        $(".add-rating").rateYo({
            starWidth: "16px",
            spacing: "4px",
            normalFill: "#ffffff",
            ratedFill: "#eb3745"
            // rating: rateVal
        });
        
    }

    if( $(".add-rating-big").length > 0 )  {

        $(".add-rating-big").rateYo({
            starWidth: "29px",
            spacing: "8px",
            normalFill: "#ffffff",
            ratedFill: "#eb3745"
            // rating: rateVal
        });

    }

});