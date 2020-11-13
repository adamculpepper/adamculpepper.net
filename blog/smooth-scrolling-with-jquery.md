---
author: Adam Culpepper
title: Smooth scrolling with jQuery
date: 2012-08-26T02:21:00Z
summary: ''
tags:
- jquery
---

There's plenty of jQuery libraries out there for "smooth scrolling", but the fact is, 91.3% of them aren't required to pull off this affect. The jQuery code below replies only on jQuery itself. Keep it simple.

``` javascript
$(document).ready(function() {
	$('a[href^="#"]').click(function(e){
		e.preventDefault();
		$('html,body').animate({scrollTop:$(this.hash).offset().top}, 800, 'swing');
	});
});
```

[Demo](http://jsfiddle.net/adamculpepper/RybYW){.btn}{.btn-primary}
