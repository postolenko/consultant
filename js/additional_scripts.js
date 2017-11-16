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

    $(".object-slider").not(".slick-initialized").slick({
        dots: false,
        arrows: true,  
        // autoplay: true,
        autoplaySpeed: 10000,
        speed: 1200,
        slidesToShow: 1,
        // fade: true
    });

    var chart = new Chartist.Line('.ct-chart', {

        labels: ["100", "200", "300"],
        series: [
            [500, 1200, 2500],
            [500, 1700, 2300],
            [500, 1700, 2500]
        ]
        }, {
        fullWidth: true,
        // chartPadding: {
        //     right: 0
        // },
        axisX:{
            labelInterpolationFnc: function(value) {
              return value + " мес";
            }
        },
        axisY: {
            position: 'end',
            offset: 80,
            labelInterpolationFnc: function(value) {
              return value + " ";
            },
            scaleMinSpace: 15
        }

    });

    chart.on("draw", function(data) {

        var parentBlock;
        var count = 0;

        $(".ct-chart").each(function() {

            $(this).find(".ct-vertical").each(function() {

                parentBlock = $(this).closest("foreignObject");

                if(parentBlock.find(".fa-rub").length == 0) {

                    parentBlock.append("<i class='fa fa-rub'></i>");

                }

            });

        });

    });

});