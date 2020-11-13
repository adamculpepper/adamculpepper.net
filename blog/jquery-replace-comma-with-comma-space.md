---
author: Adam Culpepper
title: jQuery, Replace comma (,) with comma + space (, )
date: 2013-02-21T15:55:00Z
summary: ''
tags:
- javascript
- jquery
---

``` javascript
$(window).load(function() {
	$('.selector').each(function() {
		var string = $(this).html();
		$(this).html(string.replace(/,/g , ', '));
	});
});
```