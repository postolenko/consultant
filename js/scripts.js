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

    var thumbnailsHeightsArr = [];
    var thumbnails;
    var maxHeight;
    var lastThumbnail;
    var lastThimbMobileIndex = 2;
    var favoriteIndex;
    var favoriteThumbIndex;

    // ----------------------------

    getFooterPosition();

    getDocumentOffsetTop();

    getFullHeight();

    getMapParams();

    getFavoriteArticlesBlockHeight();

    getShapeHeaderParams();

    getAdaptivePositionElements();

    getTableElemsPosition();

    getSelectWidth();

    // getRespHeaderPosition();

    $(window).resize(function() {

        $(".wrapper").css({"min-height" : $(window).height() + "px"});

        $(".wrapper").css({"padding-bottom" :  $(".footer").outerHeight(true) + "px"});

        // -------------------------

        bodyWidth = w.innerWidth || e.clientWidth || g.clientWidth;

        // -------------------------

        getDocumentOffsetTop();

        getFullHeight();

        getMapParams();

        getFavoriteArticlesBlockHeight();

        getAdaptivePositionElements();

        getTableElemsPosition();

        getDropdownRightMenuHeight();

        getShapeHeaderParams();

        getSelectWidth();

        // getRespHeaderPosition();

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

        $(".respmenubtn").click(function() {

            if( $(".dropdown-menu-right").is(":hidden") ) {

                $(".dropdown-menu-right").fadeIn(300);

                getDropdownRightMenuHeight();

                $(this).addClass("active");

            } else {

                $(".dropdown-menu-right").fadeOut(300);

                $(this).removeClass("active");

            }

        });

        $(document).mouseup(function (e){

            hide_element = $('.dropdown-menu-right');

            if (!hide_element.is(e.target)

                && hide_element.has(e.target).length === 0) {

                    hide_element.fadeOut(300);

                    $(".respmenubtn").removeClass("active");         
            }

        });

        $(this).keydown(function(eventObject){

            if (eventObject.which == 27) {

                $('.dropdown-menu-right').fadeOut(300);

                $(".respmenubtn").removeClass("active");

            }

        });

    });

    $(function() {

        var navName;
        var mainNav;
        var topOffset;

        $(".show_nav").click(function() {

            navName = $(this).attr("data-navbtn");

            mainNav = $("[data-respnav = '"+ navName +"']");

            if( mainNav.is(":hidden") ) {

                mainNav.fadeIn(300);

                topOffset = $(".header-site").height();

                console.log(topOffset);

                mainNav.css({
                    "top" : topOffset + "px",
                    "height" : $(window).height() - topOffset + "px"
                });

                $(this).addClass("active");

            } else {

                mainNav.fadeOut(300);

                $(this).removeClass("active");

            }

        });

        $(this).keydown(function(eventObject){

            if (eventObject.which == 27) {

                $(".show_nav").removeClass("active");

                $("[data-respnav]").each(function() {

                    if ( $(this).is(":visible")  && bodyWidth < 900 ) {

                        $(this).fadeOut(300);

                    }

                });                

            }

        });

    });

    $(function() {

        $(".sort-sliding-block").each(function(){

            if($(this).hasClass("active-default")) {

                $(this).css({
                    "height" : "auto"
                });

            } else {

                $(this).slideUp(100);

            }

        });

        $(".slide-btn").click(function() {

            var sldeBlockName = $(this).attr("data-sliding-btn");

            var slidingBox = $(".sort-sliding-block").filter("[ data-sliding-box = '"+ sldeBlockName +"' ]");

            if( slidingBox.is(":hidden") ) {

                slidingBox.slideDown(300);

                $(this).text("Скрыть");

            } else {

                slidingBox.slideUp(300);

                $(this).text("Больше");

            }

        });

    });


    $(function() {

        var showDescLink;
        var dropdownDesc;
        var parentWrapp;

        $(".agent-desc").each(function() {

            showDescLink = $(this).find(".show-dropdown-desc");

            dropdownDesc = $(this).find(".dropdown-desc");

            if(showDescLink.hasClass("active")) {

                dropdownDesc.slideDown(300);

            } else {

                dropdownDesc.slideUp(300);

            }

        });

        $(".show-dropdown-desc").click(function(e) {

            e.preventDefault();

            parentWrapp = $(this).closest(".agent-desc");

            dropdownDesc = parentWrapp.find(".dropdown-desc");

            if(dropdownDesc.is(":hidden")) {

                dropdownDesc.slideDown(300);

                $(this).addClass("active");

            } else {

                dropdownDesc.slideUp(300);

                $(this).removeClass("active");

            }

        });

    });

    $(function() {

        $(".sliding-block-wrapp").each(function() {

            var slideBlockTitle = $(this).find(".sliding-title");
            var slidingBlock = $(this).find(".sliding-block");

            if(slideBlockTitle.hasClass("active")) {

                slidingBlock.slideDown(300);

            } else {

                slidingBlock.slideUp(300);

            }

        });


        $(".sliding-title").click(function() {

            var parentBlock = $(this).closest(".sliding-block-wrapp");

            var slidingBlock = parentBlock.find(".sliding-block");

            if(slidingBlock.is(":hidden")) {

                slidingBlock.slideDown(300);

                $(this).addClass("active");

            } else {

                slidingBlock.slideUp(300);

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
            "min-height" : "auto"
        });

        $(".full-height").each( function() {

            flexibleAttr = $(this).attr("data-flexible");

            bottomCoord = $("body, html").find("[data-coord = '"+ flexibleAttr +"']").offset().top;

            flexHeight = bottomCoord - $(this).offset().top;

            $(this).css({
                "min-height" : flexHeight + "px"
            });

        });

    }

    function getShapeHeaderParams() {

        $(".shape-header").each(function() {

            var rightLine = $(this).find(".line-right");
            var leftlineWidth = $(this).find(".line-left").outerWidth(true);
            var titleWidth = $(this).find("h2").outerWidth(true);

            rightLine.css({
                "width" : $(this).width() - leftlineWidth - titleWidth + "px"
            });

            var marginOffset = ( $(this).height() + rightLine.height() ) / 2;

            $(this).css({
                "margin-top" : -marginOffset + "px",
                "margin-bottom" : -marginOffset + "px"
            });

        });

    }


    function getMapParams() {

        if( $(".map-block").length > 0 ) {

            $(".map-block").css({
                "height" : $(window).height() - $(".content").offset().top + "px",
                "width" : $(".content").offset().left - $(".wrapper").offset().left - 3 + "px",
                "top" : $(".content").offset().top + "px",
                "left" : $(".wrapper").offset().left + 3 + "px"
            });

        }

    }

    function getFavoriteArticlesBlockHeight() {

        // var thumbnailsHeightsArr = [];
        // var maxHeight;

        for(favoriteIndex = 0; favoriteIndex <= $(".favorite-thumbnails").length - 1; favoriteIndex++) {

            thumbnailsHeightsArr[favoriteIndex] = [];

            thumbnails = $(".favorite-thumbnails:eq("+ favoriteIndex +")").find(".thumbnail");

            $(".favorite-thumbnails:eq("+ favoriteIndex +")").css({
                "height" : "auto"
            });

            if(bodyWidth > 768 ) {

                for(favoriteThumbIndex = 0; favoriteThumbIndex <= thumbnails.length - 1; favoriteThumbIndex++) {

                    thumbnailHeight = $(".favorite-thumbnails:eq("+ favoriteIndex +") .thumbnail:eq("+ favoriteThumbIndex +")").outerHeight();

                    thumbnailsHeightsArr[favoriteIndex][favoriteThumbIndex] = thumbnailHeight;

                }

                maxHeight = thumbnailsHeightsArr[favoriteIndex][0];

                for (favoriteThumbIndex = 0; favoriteThumbIndex < thumbnailsHeightsArr[favoriteIndex].length - 1; favoriteThumbIndex++) {

                    if (thumbnailsHeightsArr[favoriteIndex][favoriteThumbIndex] > maxHeight) maxHeight = myArray[favoriteThumbIndex];

                }                

            } else {

                if( thumbnails.length < 3) {

                    lastThumbnail = $(".favorite-thumbnails:eq("+ favoriteIndex +") .thumbnail:last-child()");

                } else {

                    lastThumbnail = $(".favorite-thumbnails:eq("+ favoriteIndex +") .thumbnail:eq("+ ( lastThimbMobileIndex) +") ");              

                }

                maxHeight = lastThumbnail.offset().top + lastThumbnail.outerHeight() - $(".favorite-thumbnails:eq("+ favoriteIndex +")").offset().top;           

            }

            $(".favorite-thumbnails:eq("+ favoriteIndex +")").css({
                "height" : maxHeight + "px"
            });

        }

    }

    function getAdaptivePositionElements() {

        $(".append-elem").each(function() {

            if( $(this).hasClass("desktop-position") ) {

                screenParam = parseInt( $(this).attr("data-min-screen") );

                indexElem = $(this).attr("data-append-descktop-elem");

                if( bodyWidth <= screenParam ) {

                    $("[data-append-elem = '"+ indexElem +"']").append($(this).children());

                }

                 if( bodyWidth > screenParam ) {

                    $("[data-append-descktop-elem = '"+ indexElem +"']").append($("[data-append-elem = '"+ indexElem +"']").children());

                }

            }

        });

    }

    function getTableElemsPosition() {

        $(".sales-table_1 .table-row").each(function() {

            var cell_3 = $(this).find(".cell-3");
            var cell_4 = $(this).find(".cell-4");
            var inner_1 = $(this).find(".inner_1");

            if( bodyWidth <= 768 ) {

                cell_3.append(inner_1);
   
               } else {
                cell_4.append(inner_1);

            }

        });

        $(".sales-table_2 .table-row").each(function() {

            var cell_2 = $(this).find(".cell-2");
            var cell_3 = $(this).find(".cell-3");
            var cell_4 = $(this).find(".cell-4");
            var cell_5 = $(this).find(".cell-5");
            var inner_1 = $(this).find(".inner_1");
            var inner_2 = $(this).find(".inner_2");            

            if( bodyWidth <= 768 ) {

                cell_2.append(inner_1);
                cell_3.append(inner_2);

            } else {

                cell_4.append(inner_1);
                cell_5.append(inner_2);

            }

        });

    }

    function getSelectWidth() {

        $("select").each(function() {

            var parentBlock = $(this).closest(".select-block");

            parentBlock.find(".select2-container").css({
                "width" : parentBlock.width() + "px"
            });

        });

    }

    function getDropdownRightMenuHeight() {

        if( $(".dropdown-menu-right").is(":visible") ) {

            $(".dropdown-menu-right").css({
                "top" : $(".respmenubtn").height() + "px",
                "max-height" : $(window).height() - ( $(".dropdown-menu-right").offset().top - $(window).scrollTop() ) + "px"
            });

        }

    }

    function getRespHeaderPosition() {

        if( bodyWidth <= 900 ) {

            var respNavigationIndex;
            var topCoord;

            $(".resp-navigation").each(function() {

                respNavigationIndex = parseInt($(this).attr("data-header-index"));

                console.log(respNavigationIndex);

                if( respNavigationIndex == 0 ) {

                    topCoord = 0;

                } else {

                    topCoord = $(".resp-navigation").eq(respNavigationIndex - 1).outerHeight();

                }

                $(".resp-navigation").eq(respNavigationIndex).css({
                    "top" : topCoord + "px"
                });


            });
            
        }

    }


});
