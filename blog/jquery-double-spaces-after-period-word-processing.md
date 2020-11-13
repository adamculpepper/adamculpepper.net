---
author: Adam Culpepper
title: jQuery - Double spaces after period (word processing)
date: 2012-08-10T06:11:00Z
summary: ''
tags:
- jquery
---

``` javascript
$(document).ready(function() {
    var str = $("#content").html().replace(/\. /g, '.&nbsp;&nbsp;');
    $("#content").html(str);
});
```
