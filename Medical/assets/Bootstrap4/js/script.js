//console.log("usman");


$(function () {
    $(document).scroll(function () {
        var $nav = $(".fixed-top");
        $nav.toggleClass('scrolled', $(this).scrollTop() > $nav.height());
    });
});
$(function () {
    $(document).scroll(function () {
        var $nav2 = $(".navbar-brand");
        $nav2.toggleClass('scrolled', $(this).scrollTop() > $nav2.height());
    });
});
$(function () {
    $(document).scroll(function () {
        var $nav3 = $(".navbar-nav");
        $nav3.toggleClass('scrolled', $(this).scrollTop() > $nav3.height());
    });
});
$(function () {
    $(document).scroll(function () {
        var $nav4 = $(".navbar-light .navbar-nav .nav-link");
        $nav4.toggleClass('scrolled', $(this).scrollTop() > $nav4.height());
    });
});
$(function () {
    $(document).scroll(function () {
        var $nav4 = $(".logo1");
        $nav4.toggleClass('scrolled', $(this).scrollTop() > $nav4.height());
    });
});
$(function () {
    $(document).scroll(function () {
        var $nav4 = $(".navbar-toggler");
        $nav4.toggleClass('scrolled', $(this).scrollTop() > $nav4.height());
    });
});



/*================== Read More Text ==================*/
$(function () {
    var showChar = 250;
    var moretext = " ...";
    var lesstext = " ... less";
    $('.comments-space').each(function () {
        var content = $(this).html();
        if (content.length > showChar) {
            var show_content = content.substr(0, showChar);
            var hide_content = content.substr(showChar, content.length - showChar);
            var html = show_content + '<span class="remaining-contents"><span>' + hide_content +
                '</span><a href="" class="morelinks link-style" >' + moretext + '</a>'
                + '</span>';
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

/*===================== Load More Images ======================*/
$(function () {
    $('a').smoothScroll();
});
/*======================= Nav Active Class =======================*/

$(function () {
    $('.nav-link').on('click',
        function () {
            $('.nav-link').removeClass('nav-active');
            $(this).addClass('nav-active');
        });
});
/*======================= Counter Script Function =======================*/


$(document).ready(function () {


});
/*======================= Load Section Function =======================*/
var counters = [];
counters = $(".counter-value");
var countersQuantity = counters.length;
console.log(counters + "," + countersQuantity);
var counter = [];

for (i = 0; i < countersQuantity; i++) {
    counter[i] = parseInt(counters[i].innerHTML);
}
var count = function (start, value, id) {
    var localStart = start;
    setInterval(function () {
        if (localStart < value) {
            localStart++;
            counters[id].innerHTML = localStart;
        }
    }, 1);
}
var cond = true;
requestScrollAnimation((pos) => {
    var elAlert = document.getElementById("counter-section");
    var isVisible = isScrolledIntoView(elAlert, true);

    if (isVisible) {
        if (cond) {
            for (var j = 0; j < countersQuantity; j++) {
                count(0, counter[j], j);
            }
            cond = false;
        }


    }
});


/* ==================== Js Function to hide or Show the Different Sections  ================== */
$(function () {
    $("#neuro").hide();
    $("#ortho").show();
    $("#heart").hide();
    $("#dental").hide();
    $("#pp").hide();

    $("#neurolink").click((e) => {
        $("#neuro").show();
        $("#ortho").hide();
        $("#heart").hide();
        $("#dental").hide();
        $("#pp").hide();
    });
    $("#orthoLink").click(() => {
        $("#heart").hide();
        $("#dental").hide();
        $("#neuro").hide();
        $("#pp").hide();
        $("#ortho").show();
    });
    $("#heartLink").click(() => {
        $("#neuro").hide();
        $("#ortho").hide();
        $("#dental").hide();
        $("#pp").hide();
        $("#heart").show();
    });
    $("#dentalLink").click(() => {
        $("#neuro").hide();
        $("#ortho").hide();
        $("#heart").hide();
        $("#pp").hide();
        $("#dental").show();

    });
    $("#ppLink").click(() => {
        $("#neuro").hide();
        $("#ortho").hide();
        $("#heart").hide();
        $("#dental").hide();
        $("#pp").show();
    });
});
/* ==================== Js Function for the Change the hover Effect ================== */
//$(function () {
//    var neuLink = $("#neurolink");
//    var othoLink = $("#orthoLink");
//    var heartLink = $("#heartLink");
//    var dentalLink = $("#dentalLink");
//    var ppLink = $("#ppLink");


//    dentalLink.mouseenter((e) => {
//        dentalLink.css("background-color", "#e31f3b");
//        dentalLink.children("p").css("color", "white");
//        dentalLink.find("img").attr("src", "assets/Images/department/teeth-w.png");
//    });
//    dentalLink.mouseleave((e) => {
//        dentalLink.css("background-color", "transparent");
//        dentalLink.children("p").css("color", "#828282");
//        dentalLink.find("img").attr("src", "assets/Images/department/teeth.png");
//    });

//    heartLink.mouseenter((e) => {
//        heartLink.css("background-color", "#e31f3b");
//        heartLink.children("p").css("color", "white");
//        heartLink.find("img").attr("src", "assets/Images/department/heart-w.png");
//    });
//    heartLink.mouseleave((e) => {
//        heartLink.css("background-color", "transparent");
//        heartLink.children("p").css("color", "#828282");
//        heartLink.find("img").attr("src", "assets/Images/department/heart.png");
//    });
//    othoLink.mouseenter((e) => {
//        othoLink.css("background-color", "#e31f3b");
//        othoLink.children("p").css("color", "white");
//        othoLink.find("img").attr("src", "assets/Images/department/ortho.png");
//    });
//    othoLink.mouseleave((e) => {
//        othoLink.css("background-color", "transparent");
//        othoLink.children("p").css("color", "#828282");
//        othoLink.find("img").attr("src", "assets/Images/department/ortho-red.png");
//    });

//    neuLink.mouseenter((e) => {
//        neuLink.css("background-color", "#e31f3b");
//        neuLink.children("p").css("color", "white");
//        neuLink.find("img").attr("src", "assets/Images/department/brain-w.png");
//    });
//    neuLink.mouseleave((e) => {
//        neuLink.css("background-color", "transparent");
//        neuLink.children("p").css("color", "#828282");
//        neuLink.find("img").attr("src", "assets/Images/department/brain.png");
//    });
//    ppLink.mouseenter((e) => {
//        ppLink.css("background-color", "#e31f3b");
//        ppLink.children("p").css("color", "white");
//        ppLink.find("img").attr("src", "assets/Images/department/pp-w.png");
//    });
//    ppLink.mouseleave((e) => {
//        ppLink.css("background-color", "transparent");
//        ppLink.children("p").css("color", "#828282");
//        ppLink.find("img").attr("src", "assets/Images/department/pp.png");
//    });


//});
$(function () {
    $(".mi").on('click',
        function () {
            $('.mi').removeClass("nav-tabs-color");
            $(this).addClass("nav-tabs-color");

        });

});
/* ==================== Js Function for the Date Picker ================== */
$(function () {
    $("#datepicker").datepicker();
});
/* ==================== Js Function to give the class on Scroll ================== */
$(function () {
    $(window).scroll(function () {
        var scroll = $(window).scrollTop();
        var w_width = $(window).width();
        if (w_width <= 480) {
            if (scroll >= 350) {
                $("nav").addClass("fixed-top");
            } else {
                $("nav").removeClass("fixed-top");
            }
        }
        else if (scroll >= 100) {
            $("nav").addClass("fixed-top");
        } else {
            $("nav").removeClass("fixed-top");
        }
    });
});

/* ==================== Js Function Provide Active Class on Nav Link================== */
$(document).ready(function () {
    $(".nav-link").click(function () {
        $(this).addClass("active-me");
        $(".nav-link").not(this).removeClass("active-me");
    });


});

/* ==================== Js Function For the Slick Slider ================== */

$(function () {
    $('.multiple-items').slick({
        dots: true,
        arrows: false,
        slidesToScroll: 4,
        autoplay: false,
        infinite: true,
        speed: 300,
        slidesToShow: 4,
        slidesToScroll: 4,
        responsive: [
            {
                breakpoint: 1024,
                settings: {
                    slidesToShow: 3,
                    slidesToScroll: 3,
                    infinite: true,
                    dots: true
                }
            },
            {
                breakpoint: 600,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 2
                }
            },
            {
                breakpoint: 480,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1
                }
            }
        ]
    });

});
/* ==================== Js Function For the Owl Carousel Slider ================== */
$(function () {
    $('.owl-carousel').owlCarousel({
        loop: true,
        //autoplay: true,
        margin: 20,
        dots: false,
        responsiveClass: true,
        slideBy: '3',
        responsive: {
            0: {
                items: 1,
                nav: true
            },
            650: {
                items: 2,
                nav: true
            },
            750: {
                items: 2,
                nav: true
            },
            1000: {
                items: 3,
                nav: true,
                loop: true
            }
        }
    });
});
/*===================== Load More Images ======================*/
$(document).ready(function () {

    $('.loadMore').loadMoreResults({
        displayedItems: 6,
        showItems: 3

    });

});

/*===================== Load More List Tabs  ======================*/
$(document).ready(function () {

    var list = $(".list .list-group-item");
    var numToShow = 4;
    var button = $("#next");
    var numInList = list.length;
    list.hide();
    if (numInList > numToShow) {
        button.show();
    }
    list.slice(0, numToShow).show();

    button.click(function () {
        var showing = list.filter(':visible').length;
        list.slice(showing - 1, showing + numToShow).fadeIn();
        var nowShowing = list.filter(':visible').length;
        if (nowShowing >= numInList) {
            button.hide();
        }
    });

});
