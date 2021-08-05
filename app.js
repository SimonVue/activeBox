$(function() {

/*		fixed header	*/
	let header = $("#header");
	let intro = $("#intro");
	let introH = intro.innerHeight() ; /*высота нашего intro*/
	let scrollPos = $(window).scrollTop(); /*позиция нашего скрола*/
	let nav = $("#nav");
	let navToggle = $("#navToggle");


	checkScroll(scrollPos, introH);

	$(window).on("scroll resize", function() {
		introH = intro.innerHeight();
		scrollPos = $(this).scrollTop();

		checkScroll(scrollPos, introH);
	});


	function checkScroll(scrollPos, introH) {
		if( scrollPos > introH ) {
			header.addClass("fixed");
		} else {
			header.removeClass("fixed");
		}
	}





	/*		smooth scroll 		*/

	$("[data-scroll]").on("click", function(event) {
		event.preventDefault();

		let elementId = $(this).data('scroll');
		let elementOffset = $(elementId).offset().top;

		nav.removeClass("show");


		$("html, body").animate({
			scrollTop: elementOffset - 50
		}, 600);

	});



	/*		 navToggle -	*/

	navToggle.on("click", function(event) {
		event.preventDefault();

		nav.toggleClass("show");
	});



	/*		 reviews: https://kenwheeler.github.io/slick/ -	*/

	let slider = $("#reviewsSlider");

	slider.slick({
	infinite: true,
	slidesToShow: 1,
	slidesToScroll: 1,
	fade: /*true,*/ false,
	arrows: false,
	dots: true
	});








});