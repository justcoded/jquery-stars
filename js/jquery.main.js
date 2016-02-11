$(document).ready(function(){
	hljs.initHighlightingOnLoad();
	initAnchors();
	initStars();
})
// initialize smooth anchor links
function initAnchors() {
	new SmoothScroll({
		anchorLinks: '.navbar a[href^="#"]:not([href="#"])',
		extraOffset: function() {
			var totalHeight = 0;
			jQuery('.navbar').each(function(){
				totalHeight += jQuery(this).outerHeight();
			});
			return totalHeight;
		},
		activeClasses: 'link'
	});
}

// initialize stars
function initStars() {
	$('#example-1').jstars({
		image_path: 'images'
	});

	$('#example-2').jstars({
		image_path: 'images',
		style: 'blue'
	});

	$('#example-3').jstars({
		image_path: 'images',
		style: 'yellow',
		frequency: 19
	});

	$('#example-4').jstars({
		image_path: 'images',
		style: 'green'
	});

	$('#example-5').jstars({
		image_path: 'images',
		style: 'red',
		frequency: 1
	});

	$('#example-6').jstars({
		image_path: 'images',
		style: 'rand'
	});
}
