---
author: Adam Culpepper
title: Hide dead or broken images using jQuery
date: 2012-08-10T06:01:00Z
summary: ''
tags:
- jquery
---

A while back I was building a custom "Web App" for Business Catalyst that my client could easily update on the back-end to update a gallery of images. If you're familiar with Business Catalyst and it's "Web App" module, you know that if a data field is blank, it won't drop the data. The problem was that these images all needed to open in a lightbox once clicked. Looking back, I could have used jQuery's `.wrap()` or similar to wrap each image. I choose to hide/remove all images that didn't load. This had to be done to give the client enough spots on the back-end to upload images for each gallery set they wanted. At the time I used `.hide()`, but later changed it to `.remove()`.

``` javascript
$(document).ready(function() {
	$("img").error(function(){
		$(this).remove();
	});
});
```
