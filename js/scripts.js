$(window).load(function() {

    $("select").each(function() {

        var parentBlock = $(this).closest(".select-block");

        parentBlock.find(".select2-container").css({
            "width" : parentBlock.width() + "px"
        });

    });

    // ----------------------------------

    $(".full-height").each( function() {

        flexHeight = $(window).height() - $(this).offset().top - parseInt($(".main-wrapper").css("padding-bottom") );

        $(this).css({
            "height" : flexHeight + "px"
        });

        $(this).find(".content").css({
            "min-height" : flexHeight - $(this).find(".footer").outerHeight() + "px"
        });

    });

    // ------------------------

    if( $(window).width() <= 900) {

        $(".main-wrapper").css({"padding-top": $(".header-site").outerHeight(true) + "px" });

    } else {

        $(".main-wrapper").css({"padding-top": 0 + "px" });

    }

});

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

    // var flexibleAttr;
    // var bottomCoord;
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

    var popupName;
    var popupBlock;
    var popupBox;

    // ---------------------------

    getFooterPosition();

    // getDocumentOffsetTop();

    // getFullHeight();

    getMapParams();

    getFavoriteArticlesBlockHeight();

    getShapeHeaderParams();

    getAdaptivePositionElements();

    getTableElemsPosition();

    getHeightElements();

    // getSelectWidth();

    // getRespHeaderPosition();

    $(window).resize(function() {

        if( $(".footer").length > 0 && $(".two-cols-wrapp").length == 0 ) {

            $(".wrapper").css({"min-height" : $(window).height() + "px"});

            $(".wrapper").css({"padding-bottom" :  $(".footer").outerHeight(true) + "px"});

        }

        // -------------------------

        bodyWidth = w.innerWidth || e.clientWidth || g.clientWidth;

        // -------------------------

        // getDocumentOffsetTop();

        // getFullHeight();

        getMapParams();

        getFavoriteArticlesBlockHeight();

        getAdaptivePositionElements();

        getTableElemsPosition();

        getDropdownRightMenuHeight();

        getShapeHeaderParams();        

        // getRespHeaderPosition();

        getSelectWidth();

        setTimeout(function() {

            getFullHeight();

        }, 300);

        getHeightElements();

        // -------------------------

        if( bodyWidth <= 900) {

            $(".main-wrapper").css({"padding-top": $(".header-site").outerHeight(true) + "px" });

        } else {

            $(".main-wrapper").css({"padding-top": 0 + "px" });

        }

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

        // -------------------------

        if( bodyWidth > 1024 ) {

            $(".map-3_block").css( {
                "max-width" : $(window).width() - $("#search_box").width() + "px"
            });

            if( $("#search_box").hasClass("hide") ) {

                $("#search_box").css({
                    "width" : 370 + "px"
                });

            } else {

                $("#search_box").css({
                    "width" : 100 + "%"
                });

            }

        } else if ( bodyWidth >= 768 && bodyWidth <= 1024){

            $(".map-3_block").css( {
                "max-width" : 100 + "%"
            });

            if( $("#search_box").hasClass("hide") ) {

                $("#search_box").css({
                    "width" : 0
                });

            } else {

                $("#search_box").css({
                    "width" : 370 + "px"
                });

            }

        } else {

            $(".map-3_block").css( {
                "max-width" : 100 + "%"
            });

            if( $("#search_box").hasClass("hide") ) {

                $("#search_box").css({
                    "width" : 0
                });

            } else {

                $("#search_box").css({
                    "width" : 100 + "%"
                });

            }

        }

    });

    $(function() {

        $(".select-block").click(function() {

            $(".select2-container--open").css({"width" : $(this).width() + "px !important"});

            if( $(this).closest(".dropdown-menu").length > 0 ) {

                $(this).addClass("select_active");

            }

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
                
                dropdownMenu.fadeIn(200);

                dropdownMenu.css({
                    "z-index" : 2
                });

                $(this).addClass("active");

                var rightDropdownCoord = dropdownMenu.offset().left + dropdownMenu.outerWidth();

                var wrapperRightCoord = $(".wrapper").offset().left + $(".wrapper").width();

                if( rightDropdownCoord > wrapperRightCoord) {

                    dropdownMenu.offset({left : (wrapperRightCoord - dropdownMenu.outerWidth()) });

                }

            } else {

                dropdownMenu.fadeOut(200);

                dropdownMenu.css({
                    "z-index" : 1
                });

                $(this).removeClass("active");

            }

        });

        $(".search-btn.show").click(function(e) {

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

                        $(this).css({
                            "z-index" : 1
                        });

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

            select_element = $(".select-block");

            if (!hide_element.is(e.target)

                && hide_element.has(e.target).length === 0 
                && !hide_element.find(".select-block").hasClass("select_active") ) {

                if(hide_element.hasClass("dropdown-menu")) {

                    hide_element.fadeOut(200);

                    hide_element.css({
                        "z-index" : 1
                    });

                    $(".dropdown-menu-btn").removeClass("active");

                }

            }

            if (!select_element.is(e.target)
                && select_element.has(e.target).length === 0) {
                select_element.removeClass("select_active");
            }

        });
        

    });


    // $(function() {

    //     $(".show-resp-nav").click(function() {

    //         var respNav = $(".main-nav-box")

    //         if( respNav.is(":hidden") ) {
                
    //             respNav.fadeIn(200);

    //             respNav.css({
    //                 "top" : 
    //             });

    //             $(this).addClass("active");

    //         } else {

    //             respNav.fadeOut(200);

    //             $(this).removeClass("active");

    //         }

    //     });

    // });


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

                    hide_element.closest(".menu-right-block").find(".respmenubtn").removeClass("active");
            }

        });

        $(this).keydown(function(eventObject){

            if (eventObject.which == 27) {

                $('.dropdown-menu-right').fadeOut(300);

                $('.dropdown-menu-right').closest(".menu-right-block").find(".respmenubtn").removeClass("active");

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

                if( mainNav.hasClass("main-nav-box") ) {

                    topOffset = $(".header-site").outerHeight();

                } else {

                    topOffset = 0;

                }

                // topOffset = $(".header-site").height();

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

        // $("[data-respnav]").find("a").click(function(e) {

        //     if( $(this).hasClass(".dropdown-menu-btn") ) {

        //         e.preventDefault();

        //         return false;

        //     } else {

        //         $(this).closest("[data-respnav]").fadeOut(300);

        //         navName = $(this).closest("[data-respnav]").attr("data-respnav");

        //         $("[data-navbtn = '"+ navName +"']").removeClass("active");

        //     }

        // });

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

    $(function() {

        $(".show_popup").click(function(e) {

            e.preventDefault();

            popupName = $(this).attr("data-popup");
            popupBlock = $("[data-popup-name = '"+ popupName +"']");

            if( popupBlock.hasClass("inner-popup") ) {

                popupBlock.css({
                    "z-index" : 16
                });

            } else {

                popupBlock.css({
                    "z-index" : 10
                });

            }            

            popupBlock.animate({
                "opacity" : 1
            }, 400);

        });

         $(this).keydown(function(eventObject){

            if (eventObject.which == 27) {

                $("[data-popup-name]").each(function() {

                    if ( $(this).is(":visible") ) {

                        $(this).animate({
                            "opacity" : 0
                        }, 400);

                        setTimeout(function() {

                            $(this).css({
                                "z-index" : -1
                            });

                        }, 500);

                    }

                });

            }

        });

        $(".close-popup, .popup-bg").click(function() {

            popupBlock = $(this).closest(".popup-wrapp");

            popupBlock.animate({
                "opacity" : 0
            }, 400);

            setTimeout(function() {

                popupBlock.css({
                    "z-index" : -1
                });

            }, 500);

        });

    });

    $(function() {

        var parenBlock;
        var indexMark;
        var ratingTooltip;
        var tooltipInfo;

        $(".c-rating__item").hover(function() {

            parenBlock = $(this).closest(".rating-wrapp");

            indexMark = $(this).attr("data-index");

            ratingTooltip = parenBlock.find(".rating-tooltip");

            tooltipInfo = ratingTooltip.find("p");

            tooltipInfo.each(function() {

                if( $(this).attr("data-index") == indexMark ) {

                    $(this).filter("[data-index = '"+indexMark+"']").css({"display" : "block"});

                } else {

                    $(this).css({"display" : "none"});

                }

            });

        });

        $(".c-rating__item").click(function() {

            parenBlock = $(this).closest(".rating-wrapp");
            ratingTooltip = parenBlock.find(".rating-tooltip");
            ratingTooltip.css({
                "display" : "inline-block"
            });
            tooltipInfo.each(function() {

                if( $(this).attr("data-index") == indexMark ) {

                    $(this).filter("[data-index = '"+indexMark+"']").css({"display" : "block"});

                } else {

                    $(this).css({"display" : "none"});

                }

            });

        });

    });

    $(function() {

        var questionTooltip;

        $(".question-box").find(".tooltip").fadeOut(50);

        $(".checkboxes-wrapp input[type='checkbox']").click(function() {

            var checkboxBlock = $(this).closest(".checkbox-block");            

            if( checkboxBlock.next(".checkboxes-inner").length > 0 ) {

                var innersCheckboxes = checkboxBlock.next(".checkboxes-inner");

                if( $(this).is(":checked") ) {

                    innersCheckboxes.find("input[type = 'checkbox']").each(function() {

                        if( !$(this).is(":checked") ) {

                            $(this).click();

                        }

                    });

                } else {

                    innersCheckboxes.find("input[type = 'checkbox']").each(function() {

                        if( $(this).is(":checked") ) {

                            $(this).click();

                        }

                    });

                }

            }

        });

        $(".question-icon").click(function(e) {

            e.preventDefault();

            parenBlock = $(this).closest(".question-box");

            questionTooltip = parenBlock.find(".tooltip");

            if(questionTooltip.is(":hidden")) {

                questionTooltip.fadeIn(200);

                questionTooltip.css({
                    "top" :  - questionTooltip.height() / 2 + "px"
                });

            } else {

                questionTooltip.fadeOut(200);

            }

        });

        $(".close-tooltip").click(function() {

            questionTooltip = $(this).closest(".tooltip");

            questionTooltip.fadeOut(200);

        });

        $(this).keydown(function(eventObject){

            if (eventObject.which == 27) {

                $(".question-box .tooltip").each(function() {

                    if( $(this).is(":visible") ) {

                        $(this).fadeOut(200);

                    }

                });
            }

        });

        // $(document).mouseup(function (e){

        //     hide_element = $('.tooltip');

        //     if (!hide_element.is(e.target)

        //         && hide_element.has(e.target).length === 0) {

        //             hide_element.fadeOut(300);      
        //     }

        // });

    });

    $(function() {

        var priceList;
        var activePriceList;
        var activelistArr = [];
        var indexActiveList;

        $(".price-inputs-wrapp").each(function() {

            priceList = $(".price-inputs-wrapp").find(".price-list");

            priceList.each(function() {

                if( $(this).hasClass("active") ) {

                    activelistArr.push(true);

                } else {

                    activelistArr.push(false);

                }

            });

            priceList.css({"display" : "none"});

            $.each(activelistArr, function(key, val) {

                if( val == true ) {

                    indexActiveList = key;

                    return false;

                } else {

                    indexActiveList = 0;

                }

            });

            priceList.eq(indexActiveList).css({"display" : "block"});

        });

        $(".price-list li").click(function() {

            parentBlock = $(this).closest(".price-list");

            parentBLockWrapp = parentBlock.closest(".price-inputs-wrapp");

            var inputPrice = parentBlock.attr("data-prices");

            var priceVal = parseInt( $(this).find(".price-val").html() );

            var activeInputPrice = parentBLockWrapp.find("input[data-input-price = '" + inputPrice + "']");

            activeInputPrice.val( priceVal );

            parentBlock.css({
                "display" : "none"
            });

            parentBlock.siblings().css({
                "display" : "block"
            });

            parentBlock.siblings().find("li").each(function() {

                if( parseInt( $(this).find(".price-val").html() ) > priceVal  ) {

                    $(this).css({
                        "display" : "block"
                    });

                } else {

                    $(this).css({
                        "display" : "none"
                    });

                }

            });

            activeInputPrice.siblings().focus();

        });

        $(".price-inputs-wrapp .price-input").click(function() {

            parentBlock = $(this).closest(".price-inputs-wrapp");

            var inputPrice = $(this).attr("data-input-price");

            var priceList = parentBlock.find(".price-list");

            var priceListActive = priceList.filter("[data-prices = '" + inputPrice  + "']");

            if( priceListActive.is(":hidden") ) {

                priceList.each(function() {

                    if( $(this).attr("data-prices") != inputPrice ) {

                        $(this).css({
                            "display" : "none"
                        });

                    }

                });

                priceListActive.css({
                    "display" : "block"
                });

            }

        });

    });

    // -------------------

    $(function() {

        var minSearchBoxWidth = 370;

        if( $("#search_box").hasClass("hide") ) {

            $(".sell-list-btn").removeClass("active");

        } else {

            $(".sell-list-btn").addClass("active");

        }

        $(".map-3_block").css( {
            "max-width" : $(window).width() - $("#search_box").width() + "px"
        });

        $(".sell-list-btn").click(function() {

            $("#search_box").toggleClass("hide");

            if( bodyWidth > 1024 ) {

                $(".map-3_block").css( {
                    "max-width" : $(window).width() - $("#search_box").width() + "px"
                });

                if( $("#search_box").hasClass("hide") ) {

                    $("#search_box").css({
                        "width" : 370 + "px"
                    });

                    $(this).removeClass("active");

                } else {

                    $("#search_box").css({
                        "width" : 100 + "%"
                    });

                    $(this).addClass("active");

                }

            } else if ( bodyWidth >= 768 && bodyWidth <= 1024){

                $(".map-3_block").css( {
                    "max-width" : 100 + "%"
                });

                if( $("#search_box").hasClass("hide") ) {

                    $("#search_box").css({
                        "width" : 0
                    });

                    $(this).removeClass("active");

                } else {

                    $("#search_box").css({
                        "width" : 370 + "px"
                    });

                    $(this).addClass("active");

                }

            } else {

                $(".map-3_block").css( {
                    "max-width" : 100 + "%"
                });

                if( $("#search_box").hasClass("hide") ) {

                    $("#search_box").css({
                        "width" : 0
                    });

                    $(this).removeClass("active");

                } else {

                    $("#search_box").css({
                        "width" : 100 + "%"
                    });

                    $(this).addClass("active");

                }

            }

        });

    });

    // ----------------

    $(function() {

        $(".select-vals li").click(function() {

            var selectValsName = $(this).closest(".dropdown-menu").attr("data-menu-index");

            var selectVal = $(this).attr("data-val");

            $(".menuinput_val").filter("[data-menuinput-index = '"+ selectValsName +"']").val(selectVal);

            $(this).closest(".dropdown-menu-block").find(".dropdown-menu-btn[data-menu-index = '"+ selectValsName +"'] span").text(selectVal);

            $(this).addClass("active");
            $(this).siblings().removeClass("active");

        });

    });

    // -----------------

    $(function() {

        var articleMinHeigth;
        var slidingArticle;
        var slidingArticleLink;
        var articleMinHeigth;

        $(".sliding-article").each(function() {

            articleMinHeigth = parseInt( $(this).attr("data-minheigth") );

            slidingArticleLink = $(".more-link_sliding[data-sliding-link = '"+ $(this).attr("data-sliding-article") +"']");

            if( $(this).height() > articleMinHeigth ) {

                $(this).css({
                    "height" : articleMinHeigth + "px"
                });

                slidingArticleLink.removeClass("active");

            }

        });

        $(".more-link_sliding").click(function(e) {

            e.preventDefault();

            slidingArticle = $("[data-sliding-article = '" + $(this).attr("data-sliding-link") + "']");

            articleMinHeigth = parseInt( slidingArticle.attr("data-minheigth") );

            if( slidingArticle.height() > articleMinHeigth ) {

                slidingArticle.animate({
                    "height" : articleMinHeigth + "px"
                }, 300);

                $(this).removeClass("active");

            } else {

                slidingArticle.animate({
                    "height" : slidingArticle.find(".inner-sliding").height() + "px"
                }, 300);

                $(this).addClass("active");

                setTimeout(function() {

                    slidingArticle.css({
                        "height" : "auto"
                    });

                }, 400);

            }

        });

    });

    // -----------------

    $(function() {

        var rangeLine;
        var rangeWidth;
        var startRange;
        var endRange;
        var rangeOnePercent;
        var rangeVal;
        var rangeTxt;
        var leftOffset;

        $(".range-line-block").each(function() {

            rangeLine = $(this).find(".range-line");

            rangeWidth = rangeLine.width();

            startRange = parseInt( $(this).find(".range-start").attr("data-range-val") );
            endRange = parseInt( $(this).find(".range-end").attr("data-range-val") );

            rangeOnePercent = ( endRange - startRange ) / 100;

            $(this).find(".range-val").each(function() {

                rangeVal = parseInt( $(this).attr("data-range-val") );

                rangeTxt = $(this).find(".val-txt");

                if( rangeVal < 1000000 ) {

                    rangeTxt.html( new String( ( rangeVal / 1000 ) ).replace(".", ",") + " K" );

                } else if( rangeVal >= 100000 ) {

                    rangeTxt.html( new String( ( rangeVal / 1000000 ) ).replace(".", ",") + " M" );

                }

                if( !$(this).hasClass("range-default") ) {

                    leftOffset = ( rangeVal - startRange ) / rangeOnePercent;

                    $(this).css({
                        "left" : leftOffset + "%"
                    });

                }

            });

        });

        $(".range-val").click(function() {

            var rangeInput = $(this).closest(".range-line-block").find(".range-input");

            rangeVal = parseInt( $(this).attr("data-range-val") );

            rangeInput.val(rangeVal);

            $(this).addClass("active");

            $(this).siblings().removeClass("active");

        });

    });

    // -----------------
    $(function() {

        $(".inner-nav-btn").click(function() {

            parentBlock = $(this).closest("li");

            var innerNav = parentBlock.find(".inner-nav_wrapp");

            if(innerNav.is(":hidden")) {

                innerNav.slideDown(200);

                $(this).addClass("active");

            } else {

                innerNav.slideUp(200);

                $(this).removeClass("active");

            }

        });

    });

    // Navigation scroll

    $(function() {
        $('a[href*=#]:not([href=#])').click(function() {
            if (location.pathname.replace(/^\//,'') == this.pathname.replace(/^\//,'') && location.hostname == this.hostname) {

                var target = $(this.hash);
                target = target.length ? target : $('[name=' + this.hash.slice(1) +']');
                if (target.length) {

                    $('html,body').animate({
                        scrollTop: target.offset().top
                    }, 900);                        

                    return false;
                }
            }
        });
    });

    // function getDocumentOffsetTop() {

    //     // if( bodyWidth <= 900) {

    //     //     $(".main-wrapper").css({"padding-top": $(".header-site").outerHeight(true) + "px" });

    //     // } else {

    //     //     $(".main-wrapper").css({"padding-top": 0 + "px" });

    //     // }

    // }


    function getFooterPosition() {

        if( $(".footer").length > 0 && $(".two-cols-wrapp").length == 0) {

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

    }

    function getFullHeight() {

        $(".full-height").css({
            "height" : "auto"
        });

        $(".full-height").each( function() {

            flexHeight = $(window).height() - $(this).offset().top - parseInt($(".main-wrapper").css("padding-bottom") );

            $(this).css({
                "height" : flexHeight + "px"
            });

            $(this).find(".content").css({
                "min-height" : flexHeight - $(this).find(".footer").outerHeight() + "px"
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
                "width" : "auto"
            });

            parentBlock.find(".select2-container").css({
                "width" : parentBlock.width() + "px"
            });

        });

    }

    function getDropdownRightMenuHeight() {

        if( $(".dropdown-menu-right").is(":visible")) {

            $(".dropdown-menu-right").css({
                "top" : $(".respmenubtn").height() + "px",
                "max-height" : $(window).height() - ( $(".dropdown-menu-right").offset().top - $(window).scrollTop() ) + "px"
            });

        }

    }

    function getHeightElements() {

        $("[data-flexible]").css({
            "height" : "auto"
        });

        $("[data-flexible]").each(function() {

            var flexElemName = $(this).attr("data-flexible");

            var topCoord =  $(this).offset().top;

            var bottomCoord = $("[data-coord = '"+ flexElemName +"']").offset().top;

            $(this).css({
                "height" : bottomCoord - topCoord + "px"
            });


        });

    }

    function getRespHeaderPosition() {

        if( bodyWidth <= 900 ) {

            var respNavigationIndex;
            var topCoord;

            $(".resp-navigation").each(function() {

                respNavigationIndex = parseInt($(this).attr("data-header-index"));

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
