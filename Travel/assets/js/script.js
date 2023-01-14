// console.log("Usman haider khan");
/*================== Read More Text ==================*/
$(function() {
	var showChar = 560;
	var moretext = "More About";
	var lesstext = "Less About";
	$(".comments-space").each(function() {
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
	
	$(".morelink").click(function() {
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
$(function() {
	var showChar = 67;
	var moretext = "Read More +";
	var lesstext = "Read Less -";
	$(".comments-spaces").each(function() {
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
	
	$(".morelinks").click(function() {
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
$(function() {
	var showChar = 160;
	var moretext = "Read More +";
	var lesstext = "Read Less -";
	$(".comments-spacess").each(function() {
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
	
	$(".morelinkss").click(function() {
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
$(function() {
	$("a").smoothScroll();
});
/*======================= Nav Active Class =======================*/
$(function() {
	$("nav ul li").on("click", function() {
		$("nav ul li").removeClass("active");
		$(this).addClass("active");
	});
});
/*===================== Owl Carousel Slider ======================*/
//Init the carousel

$(function() {
	$("#owl-one").owlCarousel({
		loop: false,
		margin: 20,
		dots: true,
		nav: false,
		stagePadding: 60,
		slideBy: 3,
		item: 3,
		stagePadding: 15,
		responsiveClass: true,
		responsive: {
			0: {
				items: 1,
				dots: true,
				nav: false,
				
			},
			480: {
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
				nav: false
			},
			830: {
				items: 3,
				dots: true,
				nav: false
			},
			1000: {
				items: 3,
				dots: true,
				nav: false
			}
		}
	});
});
$(function() {
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
$(function() {
	$(".no-display")
	.slice(0, 6)
	.show();
	$("#load-more").on("click", function(e) {
		e.preventDefault();
		$(".no-display:hidden")
		.slice(0, 3)
		.slideDown();
		if ($(".no-display:hidden").length == 0) {
			$("#load-more").html("No More Content");
			
			// $(".btn-load-border").fadeOut("slow");
		}
		$("html,body").animate(
			{
				scrollTop: $(this).offset().center
			},
			1500
			);
		});
	});
	$(function() {
		$(".none-display")
		.slice(0, 3)
		.show();
		$("#load-another").on("click", function(e) {
			e.preventDefault();
			$(".none-display:hidden")
			.slice(0, 3)
			.slideDown();
			if ($(".none-display:hidden").length == 0) {
				$("#load-another").html("No More Content");
				// $(".btn-load-blog").fadeOut("slow");
			}
			$("html,body").animate(
				{
					scrollTop: $(this).offset().center
				},
				1500
				);
			});
		});
		
		/*===================== Scroll Top  Script ======================*/
		// $(function() {
		// 	$(window).scroll(function() {
		// 		var scroll = $(window).scrollTop();
		// 		// var width = $(window).width();
		// 		if (scroll >= 100) {
		// 			$("nav").addClass("nav-bg-color");
		// 		} else {
		// 			$("nav").removeClass("nav-bg-color");
		// 		}
		// 	});
		// });
		