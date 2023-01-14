//console.log("usman");

/*================== Read More Text ==================*/

$(function () {
    var showChar = 120;
    var moretext = "Continue Reading &nbsp;";
    var lesstext = "Stop Reading  &nbsp;";
    $('.comments-space').each(function () {
        var content = $(this).html();
        if (content.length > showChar) {
            var show_content = content.substr(0, showChar);
            var hide_content = content.substr(showChar, content.length - showChar);
            var html = show_content + '<span class="remaining-contents"><span>' + hide_content + '</span>' +
                '<a href="" class="morelinksss read-text" style="display:block; margin-top:30px">' + moretext + '</a>' +
                '</span>';
            $(this).html(html);
        }
    });

    $(".morelinksss").click(function () {

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
    var showChar = 578;
    var moretext = "Know More &nbsp;";
    var lesstext = "Know Less &nbsp;";
    $('.comments-spaces').each(function () {
        var content = $(this).html();
        if (content.length > showChar) {
            var show_content = content.substr(0, showChar);
            var hide_content = content.substr(showChar, content.length - showChar);
            var html = show_content + '<span class="remaining-contents"><span>' + hide_content + '</span>' +
                '<div class="btn-wrapper mt-90">' +
                '<a href="" class="morelinks btn btn-known" style="display:block;">' + moretext + '</a>' +
                '</span>' + '</div>';
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

/*===================== Load More Images ======================*/
$(document).ready(function () {

    $('.loadMore').loadMoreResults({
        displayedItems: 6,
        showItems: 3

    });

});


/*===================== Owl Carousel Slider ======================*/
$(function () {
    $('#owl-one').owlCarousel({
        loop: true,
        margin: 0,
        dots: true,
        nav: false,
        item: 1,
        responsiveClass: true,
        responsive: {
            0: {
                items: 1,
                dots: true,
                nav: false
            },
            400: {
                items: 1,
                dots: true,
                nav: false
            },
            600: {
                items: 1,
                dots: true,
                nav: false
            },
            800: {
                items: 1,
                dots: true,
                nav: false
            },
            1000: {
                items: 1,
                dots: true,
                nav: false
            }
        }
    });
});
$(function () {
    $('.owl-carousel').owlCarousel({
        loop: true,
        margin: 0,
        dots: true,
        nav: false,
        item: 1,
        responsiveClass: true,
        responsive: {
            0: {
                items: 1,
                dots: true,
                nav: false
            },
            400: {
                items: 1,
                dots: true,
                nav: false
            },
            600: {
                items: 1,
                dots: true,
                nav: false
            },
            800: {
                items: 1,
                dots: true,
                nav: false
            },
            1000: {
                items: 1,
                dots: true,
                nav: false
            }
        }
    });
});

/*===================== Slick Slider ======================*/


/*===================== Scroll Top Function Script ======================*/
$(function () {
    $(window).scroll(function () {
        var scroll = $(window).scrollTop();
        var w_width = $(window).width();
        if (w_width <= 480) {
            if (scroll >= 100) {
                $("nav").addClass("fixed-top sleep nav-bg-color ");
                $(".navbar-brand img").addClass("scroll-logo-width d-block");
                //$("#logo-none").addClass("on-scroll-logo-none");


            } else {
                $("nav").removeClass("fixed-top sleep nav-bg-color");
                //$("#logo-none").addClass("on-scroll-logo-none");
                $(".navbar-brand img").removeClass("scroll-logo-width");
            }
        } else if (scroll >= 100) {
            $("nav").addClass("fixed-top sleep nav-bg-color");
            $(".navbar-brand img").addClass("scroll-logo-width ml-5");
            $(".nav-item").addClass("nav-setting-on-scroll");

        } else {
            $("nav").removeClass("fixed-top sleep nav-bg-color");
            $(".navbar-brand img").removeClass("scroll-logo-width ml-5");
            $(".nav-item").removeClass("nav-setting-on-scroll");

        }
    });
});
$(function () {
    $(window).scroll(function () {
        var scroll = $(window).scrollTop();
        var w_width = $(window).width();
        if (w_width <= 480) {
            if (scroll >= 270) {
                $("nav").addClass("easy-nav-on-scroll");
            } else {
                $("nav").removeClass("easy-nav-on-scroll");
            }
        } else if (scroll >= 50) {
            $("nav").addClass("easy-nav-on-scroll");
        } else {
            $("nav").removeClass("easy-nav-on-scroll");
        }
    });
});
/*===================== Nav tabs active Function Script ======================*/
$(function () {
    $('.tab-active').on('click',
        function () {
            $('.tab-active').removeClass('dark-active');
            $(this).addClass('dark-active');
        });
});

/*===================== Another Load More Script ======================*/
$(".no-display").slice(0, 6).show();
$("#load-more").on('click', function (e) {
    e.preventDefault();
    $(".no-display:hidden").slice(0, 3).slideDown();
    if ($(".no-display:hidden").length == 0) {
        $("#load-more").fadeOut('slow');
        $(".btn-load-box").fadeOut('slow');
    }
    $('html,body').animate({
        scrollTop: $(this).offset().center
    }, 1500);
});

/*=====================Active Class Script ======================*/
$(function () {
    $('.form-check-label').on('click',
        function () {
            $('.form-check-label').removeClass('radio-active');
            $(this).addClass('radio-active');
        });
});
/*=====================Timer Function Script ======================*/
function makeTimer() {

    //      var endTime = new Date("29 April 2018 9:56:00 GMT+01:00");  
    var endTime = new Date("8 September 2019 9:56:00 GMT+01:00");
    endTime = (Date.parse(endTime) / 1000);

    var now = new Date();
    now = (Date.parse(now) / 1000);

    var timeLeft = endTime - now;

    var days = Math.floor(timeLeft / 86400);
    var hours = Math.floor((timeLeft - (days * 86400)) / 3600);
    var minutes = Math.floor((timeLeft - (days * 86400) - (hours * 3600)) / 60);
    var seconds = Math.floor((timeLeft - (days * 86400) - (hours * 3600) - (minutes * 60)));

    if (hours < "10") {
        hours = "0" + hours;
    }
    if (minutes < "10") {
        minutes = "0" + minutes;
    }
    if (seconds < "10") {
        seconds = "0" + seconds;
    }

    $("#days").html(days);
    $("#hours").html(hours);
    $("#minutes").html(minutes);
    $("#seconds").html(seconds);

}

setInterval(function () {
    makeTimer();
}, 1000);