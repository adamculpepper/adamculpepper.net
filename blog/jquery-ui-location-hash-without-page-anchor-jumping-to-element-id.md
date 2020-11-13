---
author: Adam Culpepper
title: jQuery UI, Location hash without page anchor jumping to element ID
date: 2013-06-21T21:57:00Z
summary: ''
tags:
- jquery-ui
- jquery

---

If you're using jQuery UI tabs and you don't want the page to jump to that tab element, here's how to do it:

``` javascript
$('#tabs').tabs();

$('#tabs ul li a').click(function(e) {
	var pos = $(window).scrollTop();
	location.hash = $(this).attr('href');
	$(window).scrollTop(pos);
});
```