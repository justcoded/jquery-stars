$(document).ready(function(){
	hljs.initHighlightingOnLoad();
	$('#stars1').jstars({
		image_path: 'images'
	});

	$('#stars2').jstars({
		image_path: 'images',
		style: 'blue'
	});

	$('#stars3').jstars({
		image_path: 'images',
		style: 'yellow',
		frequency: 19
	});

	$('#stars4').jstars({
		image_path: 'images',
		style: 'green'
	});

	$('#stars5').jstars({
		image_path: 'images',
		style: 'red',
		frequency: 1
	});

	$('#stars6').jstars({
		image_path: 'images',
		style: 'rand'
	});
	
})