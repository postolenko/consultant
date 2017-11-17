(function($){

	$(window).on("load",function(){

		$(".scroll").mCustomScrollbar();

        var rangeVal = $(".range-slider").find(".noUi-value-large");

        var rangeValTxt;

        rangeVal.each(function() {

            rangeValTxt = $(this).text();

            if( +rangeValTxt < 1000 ) {

                $(this).html( +rangeValTxt + " K" );

            } else {

                $(this).html( +rangeValTxt / 1000  + " M" );

            }

        });


	});

})(jQuery);

$(document).ready(function() {

    var tooltipVal;

    // -----------------------

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
        chartPadding: {
            left: 0
        },
        axisX:{
            labelInterpolationFnc: function(value) {
              return value + " мес";
            }
        },
        axisY: {
            position: 'end',
            offset: 90,
            scaleMinSpace: 28
        }

    });

    var rangSlider = document.getElementById('range-slider');

    noUiSlider.create(rangSlider, {
        start: 500,
        step: 1,
        range: {
            min: 420,
            max: 1600
        },
        tooltips: true,
        pips: {
            mode: 'values',
            values: [420, 1600],
            density: 0
        }
    });

    rangSlider.noUiSlider.on('update', function( values, handle ) {

        if(+values[0] < 1000) {

            tooltipVal = +values[0]  + " K";

        } else {

            tooltipVal = +values[0] / 1000  + " M";

        }

        $(".range-slider").find(".noUi-tooltip").html( tooltipVal);

    });

});