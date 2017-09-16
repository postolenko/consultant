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

    var flexibleAttr;
    var bottomCoord;
    var flexHeight;

    // ----------------------------

    getFooterPosition();

    getDocumentOffsetTop();

    getFullHeight();

    $(window).resize(function() {

        $(".wrapper").css({"min-height" : $(window).height() + "px"});

        $(".wrapper").css({"padding-bottom" :  $(".footer").outerHeight(true) + "px"});

        // -------------------------

        bodyWidth = w.innerWidth || e.clientWidth || g.clientWidth;

        // -------------------------

        getDocumentOffsetTop();

        getFullHeight();

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

        var parent;
        var searchInput;
        var dataAttrIndex;
        var dropdownMenu;

        $(".dropdown-menu-btn").click(function() {

            dataAttrIndex = $(this).attr("data-menu-index");

            dropdownMenu = $(".dropdown-menu").filter("[data-menu-index = '"+ dataAttrIndex +"']");            

            if( dropdownMenu.is(":hidden") ) {
                
                dropdownMenu.fadeIn(300);

                $(this).addClass("active");

            } else {

                dropdownMenu.fadeOut(300);

                $(this).removeClass("active");

            }


        });

        $(".search-btn").click(function(e) {

            e.preventDefault();

            parent = $(this).closest(".search");

            searchInput = parent.find(".input-search");

            parent.addClass("active");

        });        

        $(".hide-input").click(function(e) {

            parent = $(this).closest(".search");

            parent.removeClass("active");

        });

        $(this).keydown(function(eventObject){

            if (eventObject.which == 27) {

                $('.search').removeClass("active");

                $(".dropdown-menu").each(function() {

                    if ( $(this).is(":visible") ) {

                        $(this).fadeOut(300);

                    }

                });                

            }

        });

        $(document).mouseup(function (e){

            hide_element = $('.search');

            if (!hide_element.is(e.target)

                && hide_element.has(e.target).length === 0) {

                    hide_element.removeClass("active");                
            }

        });

        $(document).mouseup(function (e){

            hide_element = $('.dropdown-menu');

            if (!hide_element.is(e.target)

                && hide_element.has(e.target).length === 0) {

                if(hide_element.hasClass("dropdown-menu")) {

                    hide_element.fadeOut(300);

                    dataAttrIndex = hide_element.attr("data-menu-index");

                    $(".dropdown-menu-btn").filter("[data-menu-index = '"+ dataAttrIndex +"']").removeClass("active");

                }

            }

        });

    });

    $(function() {

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


    function getFullHeight() {

        $(".full-height").css({
            "height" : "auto"
        });

        $(".full-height").each( function() {

            flexibleAttr = $(this).attr("data-flexible");

            bottomCoord = $("body, html").find("[data-coord = '"+ flexibleAttr +"']").offset().top;

            flexHeight = bottomCoord - $(this).offset().top;

            $(this).css({
                "height" : flexHeight + "px"
            });

        });

    }


});
