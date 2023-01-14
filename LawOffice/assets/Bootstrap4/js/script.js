
/*================== Read More Text ==================*/
$(function () {
    var showChar = 180;
    var moretext = "Read More +";
    var lesstext = "Read Less -";
    $('.comments-space').each(function () {
        var content = $(this).html();
        if (content.length > showChar) {
            var show_content = content.substr(0, showChar);
            var hide_content = content.substr(showChar, content.length - showChar);
            var html = show_content +
                '<span class="remaining-contents"><span>' +
                hide_content +
                '</span>' +

                '<a href="" class="morelink read-text mt-15 link-style " style="display:block;">' +
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
$(function () {
    var showChar = 130;
    var moretext = "Continue Reading";
    var lesstext = "Stop Reading";
    $('.comments-spaces').each(function () {
        var content = $(this).html();
        if (content.length > showChar) {
            var show_content = content.substr(0, showChar);
            var hide_content = content.substr(showChar, content.length - showChar);
            var html = show_content +
                '<span class="remaining-contents"><span>' +
                hide_content +
                '</span>' +

                '<a href="" class="morelinks continue-text mt-15 link-style" style="display:block;">' +
                moretext +
                '</a>' + '</span>';;

            $(this).html(html);
        }
    });

    $(".morelinks").click(function () {

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
$(function () {
    var showChar = 160;
    var moretext = "Read More +";
    var lesstext = "Read Less -";
    $('.comments-spacess').each(function () {
        var content = $(this).html();
        if (content.length > showChar) {
            var show_content = content.substr(0, showChar);
            var hide_content = content.substr(showChar, content.length - showChar);
            var html = show_content +
                '<span class="remaining-contents"><span>' +
                hide_content +
                '</span>' +

                '<a href="" class="morelinkss read-text mt-15 link-style " style="display:block;">' +
                moretext +
                '</a>' + '</span>';;

            $(this).html(html);
        }
    });

    $(".morelinkss").click(function () {

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
        displayedItems: 16,
        showItems: 4
    });


});
/*===================== Owl Carousel Slider ======================*/
//Init the carousel
$(function () {
    $('#owl-two').owlCarousel({
        loop: true,
        autoplay: true,
        autoplayTimeout: 3000,
        margin: 0,
        dots: false,
        nav: true,
        slideBy: 1,
        item: 1,
        navText: ['<i class="flaticon-left-chevron" aria-hidden="true"></i>', '<i class="flaticon-chevron" aria-hidden="true"></i>'],
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
                items: 1,
                dots: false,
                nav: true,
            },
            768: {
                items: 1,
                dots: false,
                nav: true,
            },
            830: {
                items: 1,
                dots: false,
                nav: true,
            },
            1000: {
                items: 1,
                dots: false,
                nav: true,
            }
        }
    });


});
$(function () {
    $('#owl-one').owlCarousel({
        loop: true,
        margin: 20,
        dots: true,
        nav: false,
        slideBy: 3,
        item: 3,
        stagePadding: 15,
        responsiveClass: true,
        responsive: {
            0: {
                items: 1,
                dots: false,
                nav: true,
            },
            400: {
                items: 1,
                dots: true,
                nav: false,
            },
            741: {
                items: 1,
                dots: true,
                nav: false,
            },

            768: {
                items: 2,
                dots: true,
                nav: false,
            },
            830: {
                items: 3,
                dots: true,
                nav: false,
            },
            1000: {
                items: 3,
                dots: true,
                nav: false,
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
        navText: ['<i class="flaticon-back-1" aria-hidden="true"></i>', '<i class="flaticon-next-1" aria-hidden="true"></i>'],
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
                items: 1,
                dots: false,
                nav: true,
            },
            768: {
                items: 1,
                dots: false,
                nav: true,
            },
            830: {
                items: 1,
                dots: false,
                nav: true,
            },
            1000: {
                items: 1,
                dots: false,
                nav: true,
            }
        }
    });
});
/*===================== Scroll Top Function Script ======================*/
$(function () {
    $(window).scroll(function () {
        var scroll = $(window).scrollTop();
        var width = $(window).width();
        if (scroll >= 980) {
            $("nav").addClass("fixed-top smooth");

            $("#about").css("transition", "all .4s ease");

        } else {
            $("nav").removeClass("fixed-top smooth");
        }

        if (width <= 1024) {
            if (scroll >= 680) {
                $("nav").addClass("fixed-top smooth");
            } else {
                $("nav").removeClass("fixed-top smooth");
            }
        }


        if (width <= 768) {
            if (scroll >= 380) {
                $("nav").addClass("fixed-top smooth");
            } else {
                $("nav").removeClass("fixed-top smooth");
            }
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
            $(".service-load-border").fadeOut('slow');


        }
        $('html,body').animate({
            scrollTop: $(this).offset().center
        }, 1500);
    });
});
$(function () {
    $(".none-display").slice(0, 3).show();
    $("#load-another").on('click', function (e) {
        e.preventDefault();
        $(".none-display:hidden").slice(0, 3).slideDown();
        if ($(".none-display:hidden").length == 0) {
            $("#load-another").fadeOut('slow');
            $(".btn-blog-load").fadeOut('slow');

        }
        $('html,body').animate({
            scrollTop: $(this).offset().center
        }, 1500);
    });
});
//kjshfkjshsahkjdsahdjks


