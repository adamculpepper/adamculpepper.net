---
author: Adam Culpepper
title: Date formatting with jQuery UI
date: 2012-08-11T23:25:00Z
summary: ''
tags:
- jquery-ui
- jquery
---

<p>If you're developing for a legacy CMS, you'll most likely need to change the way dates are formatted on the page. Using jQuery UI males this possible and here's how to do it!</p>

<strong>HTML</strong>
``` html
<span class="date">06-Aug-2012</span>
<span class="date">2012/06/Aug</span>
<span class="date">Monday, August 06, 2012</span>
```


<strong>jQuery</strong>
``` javascript
$(document).ready(function () {
	$('span.date').each(function() { 
		var dateFormat = $(this).text()
		var dateFormat = $.datepicker.formatDate('MM dd, yy', new Date(dateFormat));
		$(this).html(dateFormat + "<br>");
	});
});​
```

Date Formatting options: <a title="jQuery UI Datepicker FormatDate" href="http://docs.jquery.com/UI/Datepicker/formatDate" target="_blank">http://docs.jquery.com/UI/Datepicker/formatDate</a>
<div class="btn btn-primary"><a href="http://jsfiddle.net/adamculpepper/rHXcp/" target="_blank">View Demo</a></div>