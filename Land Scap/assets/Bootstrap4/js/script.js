
/*================== Read More Text ==================*/

$(function () {
    var showChar = 670;
    var moretext = "More About";
    var lesstext = "Less About";
    $('.comments-space').each(function () {
        var content = $(this).html();
        if (content.length > showChar) {
            var show_content = content.substr(0, showChar);
            var hide_content = content.substr(showChar, content.length - showChar);
            var html = show_content +
                '<span class="remaining-contents"><span>' +
                hide_content +
                '</span>' +

                '<a href="" class="morelink btn btn-about-text mt-15" style="display:block;">' +
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
        displayedItems: 12,
        showItems: 4
    });


});

/*===================== Owl Carousel Slider ======================*/
$(function () {
    $('#owl-two').owlCarousel({
        loop: false,
        margin: 20,
        dots: false,
        nav: true,
        slideBy: 3,
        item: 3,
        navText: ["<i class='flaticon-left'></i>", "<i class='flaticon-next'></i>"],
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
                items: 2,
                dots: false,
                nav: true
            },
            768: {
                items: 2,
                dots: false,
                nav: true
            },
            830: {
                items: 2,
                dots: false,
                nav: true
            },
            1000: {
                items: 3,
                dots: false,
                nav: true
            }
        }
    });
});
$(function () {
    $('#owl-one').owlCarousel({
        loop: true,
        margin: 0,
        dots: false,
        nav: true,
        slideBy: 1,
        item: 1,
        navText: ["<i class='flaticon-last-track-left-arrow'></i>", "<i class='flaticon-right-arrow'></i>"],
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
$(function () {
    $('.owl-carousel').owlCarousel({
        loop: true,
        margin: 0,
        dots: true,
        nav: false,
        slideBy: 1,
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
            768: {
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

/*===================== Scroll Top Function Script ======================*/
$(function () {

    $(window).scroll(function () {
        var scroll = $(window).scrollTop();
        if (scroll >= 100) {
            $("#home nav").addClass("sleep fixed-top");

        } else {

            $("#home nav").removeClass(" sleep fixed-top ");


        }


    });
});

/*===================== Another Load More Script ======================*/
$(function () {
    $(".no-display").slice(0, 4).show();
    $("#load-more").on('click', function (e) {
        e.preventDefault();
        $(".no-display:hidden").slice(0, 2).slideDown();
        if ($(".no-display:hidden").length == 0) {
            $("#load-more").fadeOut('slow');


        }
        $('html,body').animate({
            scrollTop: $(this).offset().center
        }, 1500);
    });
});
/*===================== Filter Section Script ======================*/
$(document).ready(function () {
    // var filterizd = $(".filtr-container").filterizr({})
    $(".btn-act").on('click', function () {
        $(".btn-act").removeClass("active");
        $(this).addClass("active");
    });
});
filterSelection("garden");

function filterSelection(c) {
    var x, i;
    x = document.getElementsByClassName("filterDiv");
    if (c == "garden") c = "";
    for (i = 0; i < x.length; i++) {
        w3RemoveClass(x[i], "show");
        if (x[i].className.indexOf(c) > -1) w3AddClass(x[i], "show");
    }
}

function w3AddClass(element, name) {
    var i, arr1, arr2;
    arr1 = element.className.split(" ");
    arr2 = name.split(" ");
    for (i = 0; i < arr2.length; i++) {
        if (arr1.indexOf(arr2[i]) == -1) {
            element.className += " " + arr2[i];
        }
    }
}

function w3RemoveClass(element, name) {
    var i, arr1, arr2;
    arr1 = element.className.split(" ");
    arr2 = name.split(" ");
    for (i = 0; i < arr2.length; i++) {
        while (arr1.indexOf(arr2[i]) > -1) {
            arr1.splice(arr1.indexOf(arr2[i]), 1);
        }
    }
    element.className = arr1.join(" ");
}
