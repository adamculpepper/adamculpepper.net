---
author: Adam Culpepper
title: "<HR> tag CSS styling (cross-browser compliant)"
date: 2012-08-21T01:09:00Z
summary: ''
tags:
- html
- css
---

Here's the 3 sets of code I use when styling a HR (horizontal rule) in CSS. This is for a styled border (dotted), solid color and a background image. For the background image, I've never been able to get IE to work right. What HR code do you use for cross-browser compatibility?

<b>Note: the problem with IE background images is the shaded border (left and top) that won't go away.</b>

<b>HR border (dotted)</b> - has to offset the background with the parent element's BG color.
``` css
hr {
	border:1px dotted #F0F;
	border-style:none none dotted;
	color:#FFF;
	background:#FFF;
}
```
<hr>

<b>HR color (solid color)</b>
``` css
hr {
	border:0;
	color:#F0F;
	background:#F0F;
	height:1px;
}
```
<hr>

<b>HR background image</b> - IE is a bust when it comes to background images, so I have a fallback.
``` css
<style>
hr {
	border:0;
	background:url(/images/line_hr.gif) repeat-x;
	height:10px;
}
</style>

<!--[if IE]>
<style>
hr {
	border:2px dotted #F0F;
	color:#F0F;
	background:#F0F;
	height:1px;
}
</style>
<![endif]-->
```