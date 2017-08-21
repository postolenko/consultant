$(document).ready(function() {

    var w = window,
    d = document,
    e = d.documentElement,
    g = d.getElementsByTagName('body')[0],
    bodyWidth = w.innerWidth || e.clientWidth || g.clientWidth;

    // ----------------------------

    var setFooterPositionInterval;
    var contentCoor;
    var footerCoor;

    // ----------------------------

    getFooterPosition();

    getDocumentOffsetTop();

    $(window).resize(function() {

        $(".wrapper").css({"min-height" : $(window).height() + "px"});

        $(".wrapper").css({"padding-bottom" :  $(".footer").outerHeight(true) + "px"});

        // -------------------------

        bodyWidth = w.innerWidth || e.clientWidth || g.clientWidth;

        // -------------------------

        getDocumentOffsetTop();

        // -------------------------

        if( bodyWidth <= 900) {

            if( $(".main-nav-box").is(":visible") ) {

                $(".main-nav-box").css({
                    "top" : $(".header-site").outerHeight() + "px",
                    "height" : $(window).height() - $(".header-site").outerHeight() + "px"
                });

            }

        } else {

            $(".main-nav-box").css({
                "top" : 0 + "px",
                "height" : "auto"
            });

        }

    });


    $(function() {

        $(".select-block").click(function() {

            $(".select2-container--open").css({"width" : $(this).width() + "px !important"});

        });

    });

    $(function() {

        // $(".respmenubtn").click(function() {

        //     if( $(".main-nav-box").is(":hidden") ) {

        //         $(".main-nav-box").fadeIn(300);

        //         $(".main-nav-box").css({
        //             "top" : $(".header-site ").outerHeight() + "px"
        //         });

        //         $(this).addClass("active");

        //     } else {

        //         $(".main-nav-box").fadeOut(300);

        //         $(this).removeClass("active");

        //     }

        // });

        $(".show-resp-nav").click(function() {

            if( $(".main-nav-box").is(":hidden") ) {

                $(".main-nav-box").fadeIn(300);

                $(".main-nav-box").css({
                    "top" : $(".header-site ").outerHeight() + "px",
                    "height" : $(window).height() - $(".header-site").outerHeight() + "px"
                });

                $(this).addClass("active");

            } else {

                $(".main-nav-box").fadeOut(300);

                $(this).removeClass("active");

            }

        });

    });

    function getDocumentOffsetTop() {

         if( bodyWidth <= 900) {

            $(".main-wrapper").css({"padding-top": $(".header-site").height() + "px" });

        } else {

            $(".main-wrapper").css({"padding-top": 0 + "px" });

        }

    }


    function getFooterPosition() {

        $(".wrapper").css({"min-height" : $(window).height() + "px"});

        $(".wrapper").css({"padding-bottom" :  $(".footer").outerHeight(true) + "px"});

        setFooterPositionInterval = setInterval(function() {

            contentCoor = $(".content").offset().top + $(".content").height();
            footerCoor = $(".footer").offset().top;

            if( contentCoor != footerCoor ) {

                $(".wrapper").css({"min-height" : $(window).height() + "px"});

                $(".wrapper").css({"padding-bottom" :  $(".footer").outerHeight(true) + "px"});

                clearInterval(setFooterPositionInterval);

            }

        }, 35);

    }

});
