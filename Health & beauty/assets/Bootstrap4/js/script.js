
/*================== Read More Text ==================*/

$(function () {
    var showChar = 710;
    var moretext = "Read More";
    var lesstext = "Read Less";
    $('.comments-space').each(function () {
        var content = $(this).html();
        if (content.length > showChar) {
            var show_content = content.substr(0, showChar);
            var hide_content = content.substr(showChar, content.length - showChar);
            var html = show_content +
                '<span class="remaining-contents"><span>' +
                hide_content +
                '</span>' +

                '<a href="" class="morelink read-more-btn mt-15 mb-3 link-style " style="display:block;">' +
                moretext +
                '</a>' + '</span>';;

            $(this).html(html);
        }
    });

    $(".morelink").click(function () {

        if ($(this).hasClass("less")) {
            $(this).removeClass("less");
            $(this).html(moretext);
        } else {
            $(this).addClass("less");
            $(this).html(lesstext);
        }
        $(this).parent().prev().toggle();
        $(this).prev().toggle();
        return false;
    });
});


/*===================== Smooth Scrolling ======================*/
$(function () {
    $('a').smoothScroll();
});
/*======================= Nav Active Class =======================*/

$(function () {
    $('.nav-item').on('click',
        function () {
            $('.nav-item').removeClass('active');
            $(this).addClass('active');
        });
});

$(function () {
    $('#work .btn-filter').on('click',
        function () {
            $('.btn-filter').removeClass('active-bg');
            $(this).addClass('active-bg');
        });
});

/*===================== Load More Images ======================*/
$(document).ready(function () {

    $('.loadMore').loadMoreResults({
        displayedItems: 9,
        showItems: 3
    });


});

/*===================== Owl Carousel Slider ======================*/
//Init the carousel
$(function () {
    $('#owl-one').owlCarousel({
        loop: true,
        margin: 30,
        dots: false,
        nav: true,
        slideBy: 4,
        stagePadding: 20,
        item: 4,
        navText: ["<i class='flaticon-last-track-left-arrow'> </i>", "<i class='flaticon-right-arrow'> </i>"],
        responsiveClass: true,
        responsive: {
            0: {
                items: 1,
                dots: false,
                nav: true,
            },
            400: {
                items: 1,
                dots: false,
                nav: true,
            },
            600: {
                items: 2,
                dots: false,
                nav: true
            },
            768: {
                items: 3,
                dots: false,
                nav: true
            },
            830: {
                items: 3,
                dots: false,
                nav: true
            },
            1000: {
                items: 4,
                dots: false,
                nav: true
            }
        }
    });
});
$(function () {
    $('.owl-carousel').owlCarousel({
        loop: true,
        margin: 0,
        dots: false,
        nav: true,
        slideBy: 1,
        item: 1,
        navText: ["<i class='flaticon-last-track-left-arrow'></i>", "<i class='flaticon-right-arrow'> </i>"],
        responsiveClass: true,
        responsive: {
            0: {
                items: 1,
                dots: false,
                nav: true
            },
            400: {
                items: 1,
                dots: false,
                nav: true
            },
            600: {
                items: 1,
                dots: false,
                nav: true
            },
            768: {
                items: 1,
                dots: false,
                nav: true
            },
            830: {
                items: 1,
                dots: false,
                nav: true
            },
            1000: {
                items: 1,
                dots: false,
                nav: true
            }
        }
    });
});

/*===================== Scroll Top Function Script ======================*/
$(function () {

    $(window).scroll(function () {
        var scroll = $(window).scrollTop();
        if (scroll >= 100) {
            $("nav").addClass("");

        } else {
            $("nav").removeClass("");


        }


    });
});

/*===================== Another Load More Script ======================*/
$(function () {
    $(".no-display").slice(0, 8).show();
    $("#load-more").on('click', function (e) {
        e.preventDefault();
        $(".no-display:hidden").slice(0, 4).slideDown();
        if ($(".no-display:hidden").length == 0) {
            $("#load-more").fadeOut('slow');


        }
        $('html,body').animate({
            scrollTop: $(this).offset().center
        }, 1500);
    });
});
/*===================== Filter Section Script ======================*/
jQuery(document).ready(function () {

    function detect_active() {
        // get active
        var get_active = $("#dp-slider .dp_item:first-child").data("class");
        $("#dp-dots li").removeClass("active");
        $("#dp-dots li[data-class=" + get_active + "]").addClass("active");
    }
    $("#dp-next").click(function () {
        var total = $(".dp_item").length;
        $("#dp-slider .dp_item:first-child").hide().appendTo("#dp-slider").fadeIn();
        $.each($('.dp_item'), function (index, dp_item) {
            $(dp_item).attr('data-position', index + 1);
        });
        detect_active();

    });

    $("#dp-prev").click(function () {
        var total = $(".dp_item").length;
        $("#dp-slider .dp_item:last-child").hide().prependTo("#dp-slider").fadeIn();
        $.each($('.dp_item'), function (index, dp_item) {
            $(dp_item).attr('data-position', index + 1);
        });

        detect_active();
    });

    $("#dp-dots li").click(function () {
        $("#dp-dots li").removeClass("active");
        $(this).addClass("active");
        var get_slide = $(this).attr('data-class');
        console.log(get_slide);
        $("#dp-slider .dp_item[data-class=" + get_slide + "]").hide().prependTo("#dp-slider").fadeIn();
        $.each($('.dp_item'), function (index, dp_item) {
            $(dp_item).attr('data-position', index + 1);
        });
    });


    $("body").on("click", "#dp-slider .dp_item:not(:first-child)", function () {
        var get_slide = $(this).attr('data-class');
        console.log(get_slide);
        $("#dp-slider .dp_item[data-class=" + get_slide + "]").hide().prependTo("#dp-slider").fadeIn();
        $.each($('.dp_item'), function (index, dp_item) {
            $(dp_item).attr('data-position', index + 1);
        });

        detect_active();
    });
});
/*===================== Filter Section Script ======================*/
$(function () {

    $(window).scroll(function () {
        var scroll = $(window).scrollTop();
        if (scroll >= 100) {
            $("nav").addClass("nav-bg-color");

        } else {
            $("nav").removeClass("nav-bg-color");


        }


    });
});
