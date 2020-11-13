---
author: Adam Culpepper
title: Remove Title field on Web Forms in Business Catalyst (in both jQuery & CSS)
date: 2012-08-10T06:21:00Z
summary: ''
tags:
- business-catalyst
- css
- jquery
---

<strong>CSS</strong>
``` css
<style>
	label[for=Title], select#Title {display:none;}
	table.webform td {line-height:normal;}
</style>
```


<strong>jQuery</strong>
``` javascript
$(document).ready(function() {
    $(".selector label[for='Title']").parent().parent().find('td').remove);
});
```
