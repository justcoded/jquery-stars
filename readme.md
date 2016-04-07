# jQuery cursor "Magic" animation plugin 

One of our good friends and clients asked us if can we duplicate "magic" visual effect on mousemove from flash example to his HTML site. The effect shows shine stars when you move mouse over some page elements. So we thought it would be nice to create such plugin and share it to the public.
We present our new jQuery plugin “jStars”. The plugin creates stars effect on mouse move for elements from jQuery selector. It's very easy to use:

```js
$('#container').jstars({
	image_path: 'images', // folder with stars assets
	style: 'white',          // optional, star color, default = white
	frequency: 5          // optional, from 1 to 19
});
```

Plugin has different styles of stars (in different color) so you can choose what matches your site background color best.
It is compatible with the latest browsers: Firefox, Google Chrome, Safari, Internet Explorer 9+. You can use this plugin with jQuery 1.4.1+.

Please check our online demo here: http://labs.justcoded.com/jstars/
