$(document).ready(function(){
	hljs.initHighlightingOnLoad();
	initAnchors();
	initStars();
})
// initialize smooth anchor links
function initAnchors() {
	new SmoothScroll({
		anchorLinks: '.nav > li > a',
		extraOffset: function() {
			var totalHeight = 0;
			jQuery('.navbar-fixed-top').each(function(){
				totalHeight += jQuery(this).outerHeight();
			});
			return totalHeight;
		},
		activeClasses: 'link'
	});
}

// initialize stars
function initStars() {

	$('#examples').jstars({
		image_path: 'images'
	});

	$('#example-blue').jstars({
		image_path: 'images',
		style: 'blue',
    frequency: 15
	});

	$('#example-yellow').jstars({
		image_path: 'images',
		style: 'yellow',
		frequency: 19
	});

	$('#example-green').jstars({
		image_path: 'images',
		style: 'green'
	});

	$('#example-red').jstars({
		image_path: 'images',
		style: 'red',
		frequency: 5
	});

	$('#example-rand').jstars({
		image_path: 'images',
		style: 'rand'
	});

	$('#custom').jstars({
		image_path: 'images',
    image: 'candy-cane-stars.png',
		style: 'white',
    width: 34,
    height: 34,
    delay: 700,
    frequency: 5
	});  
  
}
