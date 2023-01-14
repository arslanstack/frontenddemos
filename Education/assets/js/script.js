// console.log("Usman haider khan");
/*================== Read More Text ==================*/
$(function () {
	var showChar = 560;
	var moretext = "More About";
	var lesstext = "Less About";
	$(".comments-space").each(function () {
		var content = $(this).html();
		if (content.length > showChar) {
			var show_content = content.substr(0, showChar);
			var hide_content = content.substr(showChar, content.length - showChar);
			var html =
				show_content +
				'<span class="remaining-contents"><span>' +
				hide_content +
				"</span>" +
				'<a href="" class="morelink btn btn-read mt-15 link-style mb-3" style="display:block;">' +
				moretext +
				"</a>" +
				"</span>";

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
		$(this)
			.parent()
			.prev()
			.toggle();
		$(this)
			.prev()
			.toggle();
		return false;
	});
});
$(function () {
	var showChar = 67;
	var moretext = "Read More +";
	var lesstext = "Read Less -";
	$(".comments-spaces").each(function () {
		var content = $(this).html();
		if (content.length > showChar) {
			var show_content = content.substr(0, showChar);
			var hide_content = content.substr(showChar, content.length - showChar);
			var html =
				show_content +
				'<span class="remaining-contents"><span>' +
				hide_content +
				"</span>" +
				'<a href="" class="morelinks read-text mt-15 link-style" style="display:block;">' +
				moretext +
				"</a>" +
				"</span>";

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
		$(this)
			.parent()
			.prev()
			.toggle();
		$(this)
			.prev()
			.toggle();
		return false;
	});
});
$(function () {
	var showChar = 160;
	var moretext = "Read More +";
	var lesstext = "Read Less -";
	$(".comments-spacess").each(function () {
		var content = $(this).html();
		if (content.length > showChar) {
			var show_content = content.substr(0, showChar);
			var hide_content = content.substr(showChar, content.length - showChar);
			var html =
				show_content +
				'<span class="remaining-contents"><span>' +
				hide_content +
				"</span>" +
				'<a href="" class="morelinkss read-text mt-15 link-style " style="display:block;">' +
				moretext +
				"</a>" +
				"</span>";

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
		$(this)
			.parent()
			.prev()
			.toggle();
		$(this)
			.prev()
			.toggle();
		return false;
	});
});
/*===================== Smooth Scrolling ======================*/
$(function () {
	$("a").smoothScroll();
});
/*======================= Nav Active Class =======================*/
$(function () {
	$(".nav-item").on("click", function () {
		$(".nav-item").removeClass("active");
		$(this).addClass("active");
	});
});
$(function () {
	$("#work .btn-filter").on("click", function () {
		$(".btn-filter").removeClass("active-bg");
		$(this).addClass("active-bg");
	});
});
/*===================== Load More Images ======================*/
$(document).ready(function () {
	filterSelection("all");
});
/*===================== Owl Carousel Slider ======================*/
//Init the carousel

$(function () {
	var owl = $('#owl-one');
	$("#owl-one").owlCarousel({
		loop: false,
		margin: 20,
		dots: false,
		nav: false,
		slideBy: 4,
		item: 4,
		responsiveClass: true,
		responsive: {
			0: {
				items: 1,

			},
			480: {
				items: 1,

			},
			741: {
				items: 1,

			},

			768: {
				items: 2,
				dots: false,
				nav: false,
			},
			830: {
				items: 3,
				dots: false,
				nav: false,
			},
			1000: {
				items: 4,
				dots: false,
				nav: false,
				stagePadding: 10,

			}
		}
	});
	$('.right-arrow').click(function () {
		owl.trigger('next.owl.carousel');
	});

	$('.left-arrow').click(function () {
		owl.trigger('prev.owl.carousel', [300]);
	});
});
$(function () {
	$(".owl-carousel").owlCarousel({
		loop: true,
		autoplay: false,
		margin: 0,
		dots: true,
		nav: false,
		autoplayTimeout: 3000,
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
			830: {
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

/*===================== Another Load More Script ======================*/
$(function () {
	$(".no-display")
		.slice(0, 8)
		.show();
	$("#load-more").on("click", function (e) {
		e.preventDefault();
		$(".no-display:hidden")
			.slice(0, 4)
			.slideDown();
		if ($(".no-display:hidden").length == 0) {
			$("#load-more").html("No More Content");
			$("#load-more").css("width", "250px");
			// $(".btn-load-border").fadeOut("slow");
		}
		$("html,body").animate({
				scrollTop: $(this).offset().center
			},
			1500
		);
	});
});
$(function () {
	$(".none-display")
		.slice(0, 3)
		.show();
	$("#load-another").on("click", function (e) {
		e.preventDefault();
		$(".none-display:hidden")
			.slice(0, 3)
			.slideDown();
		if ($(".none-display:hidden").length == 0) {
			$("#load-another").html("No More Content");
			// $(".btn-load-blog").fadeOut("slow");
		}
		$("html,body").animate({
				scrollTop: $(this).offset().center
			},
			1500
		);
	});
});

/*===================== Scroll Top  Script ======================*/
$(function () {
	$(window).scroll(function () {
		var scroll = $(window).scrollTop();
		// var width = $(window).width();
		if (scroll >= 100) {
			$("nav").addClass("nav-bg-color");
		} else {
			$("nav").removeClass("nav-bg-color");
		}
	});
});

/*===================== Filter Script  Script ======================*/
function filterSelection(c) {
	var x, i;
	x = document.getElementsByClassName("column");
	if (c == "all") c = "";
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

// Add active class to the current button (highlight it)
$(function () {
	$(".btns").on("click", function () {
		$(".btns").removeClass("active");
		$(this).addClass("active");
	});
});
/*===================== Counter  Script ======================*/

$(function () {
	// Init
	var container = document.getElementById("contain"),
		inner = document.getElementById("inner");

	// Mouse
	var mouse = {
		_x: 0,
		_y: 0,
		x: 0,
		y: 0,
		updatePosition: function (event) {
			var e = event || window.event;
			this.x = e.clientX - this._x;
			this.y = (e.clientY - this._y) * -1;
		},
		setOrigin: function (e) {
			this._x = e.offsetLeft + Math.floor(e.offsetWidth / 2);
			this._y = e.offsetTop + Math.floor(e.offsetHeight / 2);
		},
		show: function () {
			return "(" + this.x + ", " + this.y + ")";
		}
	};

	// Track the mouse position relative to the center of the container.
	mouse.setOrigin(container);

	//-----------------------------------------

	var counter = 0;
	var updateRate = 10;
	var isTimeToUpdate = function () {
		return counter++ % updateRate === 0;
	};

	//-----------------------------------------

	var onMouseEnterHandler = function (event) {
		update(event);
	};

	var onMouseLeaveHandler = function () {
		inner.style = "";
	};

	var onMouseMoveHandler = function (event) {
		if (isTimeToUpdate()) {
			update(event);
		}
	};

	//-----------------------------------------

	var update = function (event) {
		mouse.updatePosition(event);
		updateTransformStyle(
			(mouse.y / inner.offsetHeight / 2).toFixed(2),
			(mouse.x / inner.offsetWidth / 2).toFixed(2)
		);
	};

	var updateTransformStyle = function (x, y) {
		var style = "rotateX(" + x + "deg) rotateY(" + y + "deg)";
		inner.style.transform = style;
		inner.style.webkitTransform = style;
		inner.style.mozTransform = style;
		inner.style.msTransform = style;
		inner.style.oTransform = style;
	};

	//-----------------------------------------

	container.onmouseenter = onMouseEnterHandler;
	container.onmouseleave = onMouseLeaveHandler;
	container.onmousemove = onMouseMoveHandler;
});