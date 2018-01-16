(function($){

	$(window).on("load",function(){

        // var w = window,
        // d = document,
        // e = d.documentElement,
        // g = d.getElementsByTagName('body')[0],
        // bodyWidth = w.innerWidth || e.clientWidth || g.clientWidth;

		// $(".scroll").mCustomScrollbar({
  //           // callbacks: {
  //           //    whileScrolling: function(){ OnScroll(); }
  //           // }
  //       });

        if( $("#range-slider").length > 0 ) {

            var rangeVal = $(".range-slider").find(".noUi-value-large");

            var rangeValTxt;

            rangeVal.each(function() {

                rangeValTxt = $(this).text();

                if( +rangeValTxt < 1000 ) {

                    $(this).html( +rangeValTxt + " K" );

                } else {

                    $(this).html( +rangeValTxt / 1000 + " M" );

                }

            });

        }

        if( $(".ct-chart-2").length > 0 ) {

            var chartParent = $(".ct-chart-2").closest(".ct-chart-2-wrapp");
            var cart_2_vals = $(".ct-chart-2").find(".ct-bar");
            var indexBar = 0;
            var chartValBox;
            var topChartValCoord, leftChartValCoord;

            cart_2_vals.each(function() {

                $(this).attr("data-index-bar", indexBar);

                chartParent.append("<div class='ct-bar-val' data-index-bar-val = "+ indexBar +">"+ $(this).attr("ct:value") +"</div>");                

                chartValBox = chartParent.find(".ct-bar-val[data-index-bar-val = '"+ indexBar +"']");

                topChartValCoord = parseInt( $(this).attr("y2") );
                leftChartValCoord = parseInt( $(this).attr("x2") );

                chartValBox.css({
                    "bottom" : -topChartValCoord + 150 + "px",
                    "left" : leftChartValCoord - 21 + "px"
                });

                indexBar++;

            });
            
        }

        // if(bodyWidth <= 768) {

        //     $(".object-nav").mCustomScrollbar();

        // } else {

        //     $(".object-nav").mCustomScrollbar("destroy");

        // }

        // if(bodyWidth <= 900) {

        //     $(".main-nav-box").mCustomScrollbar();

        // } else {

        //     $(".main-nav-box").mCustomScrollbar("destroy");

        // }

        $(".full-height").each( function() {

            flexHeight = $(window).height() - $(this).offset().top - parseInt($(".main-wrapper").css("padding-bottom") );

            $(this).css({
                "height" : flexHeight + "px"
            });

            $(this).find(".content").css({
                "min-height" : flexHeight - $(this).find(".footer").outerHeight() + "px"
            });

        });

	});


    $(window).resize(function() {

        var w = window,
        d = document,
        e = d.documentElement,
        g = d.getElementsByTagName('body')[0],
        bodyWidth = w.innerWidth || e.clientWidth || g.clientWidth;

        // if(bodyWidth <= 768) {

        //     $(".object-nav").mCustomScrollbar();

        // } else {

        //     $(".object-nav").mCustomScrollbar("destroy");

        // }

        if( bodyWidth > 900 && $("#contact_form").hasClass("fixed") ) {

            $("#contact_form").css({
                "width" : $(".contact_form_wrapp").width() + "px",
                "left" : $(".contact_form_wrapp").offset().left  + "px"
            });

        }

        $(".scroll").each(function() {

            const ps = new PerfectScrollbar(this, {
              wheelSpeed: .5
            });
            
            ps.update();

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

    $(".scroll").each(function() {

        new PerfectScrollbar(this, {
          wheelSpeed: .5
        });

    });

    $("#object_page").on('ps-scroll-y', () => {

        if( $("#contact_form").length > 0 ) {

            var contactFormCoord = $("#contact_form").offset().top;

            if(contactFormCoord <= 0 && !$("#contact_form").hasClass("fixed")) {

                $(".contact_form_wrapp").css({
                    "height" : $("#contact_form").height() + "px"
                });

                $("#contact_form").addClass("fixed");

                $("#contact_form").css({
                    "width" : $(".contact_form_wrapp").width() + "px",
                    "left" : $(".contact_form_wrapp").offset().left  + "px"
                });

            } else if( contactFormCoord <= $(".contact_form_wrapp").offset().top) {

                $("#contact_form").removeClass("fixed");

                $("#contact_form").css({
                    "width" : 100 + "%",
                    "left" : 0
                });

                $(".contact_form_wrapp").css({
                    "padding-top" : 0
                });

            }

        }

    });

    // ---------------------------------

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
        fade: true
    });

    if( $(".ct-chart").length > 0 ) {

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

    }

    if( $(".ct-chart-2").length > 0 ) {

        var chart_2 = new Chartist.Bar('.ct-chart-2', {

                labels: ["74112", "Tulsa", "United States"],
                  series: [1.7, 2.4 , 1.6]
                }, {
                  distributeSeries: true,
                  chartPadding: {
                    left: -40
                }
            });

    }

    if( $("#range-slider").length > 0 ) {

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

    }


});