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

        var indexRating = 0;
        // var idRating;
        // var e;
        // var currentRating;
        // var maxRating;
        // var callback;
        // var myRating;

        $(".add-rating").each(function() {

            indexRating++;

           $(this).attr("id", "rating_"+indexRating);
            var idRating = $(this).attr("id");

            var el = document.querySelector("#" + idRating);
            var currentRating = 0;
            // max rating, i.e. number of stars you want
            var maxRating= 5;
            // callback to run after setting the rating
            // var callback = function(rating) { 

            //     var parenBlock = $(this).closest(".rating-wrapp");
            //     var ratingTooltip = parenBlock.find(".rating-tooltip");
            //     ratingTooltip.css({
            //         "display" : "inline-block"
            //     });

            // };
            // rating instance
            var myRating = rating(el, currentRating, maxRating);

        });
        
    }

    if( $(".add-rating-big").length > 0 )  {

        var indexRating = 0;
        $(".add-rating-big").each(function() {

            indexRating++;

           $(this).attr("id", "ratingBig_"+indexRating);
            var idRating = $(this).attr("id");

            var el = document.querySelector("#" + idRating);
            var currentRating = 0;
            // max rating, i.e. number of stars you want
            var maxRating= 5;
            // callback to run after setting the rating
            var callback = function(rating) { console.log(rating); };
            // rating instance
            var myRating = rating(el, currentRating, maxRating, callback);

        });

    }

});