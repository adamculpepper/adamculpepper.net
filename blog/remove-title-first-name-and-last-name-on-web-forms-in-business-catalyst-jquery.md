---
author: Adam Culpepper
title: Remove Title, First Name and Last Name on Web Forms in Business Catalyst (jQuery)
date: 2012-08-10T06:06:00Z
summary: ''
tags:
- business-catalyst
---

``` javascript
$(document).ready(function() {
    $("form label[for='Title']").parent().parent().find('td').remove();
    $("form label[for='FirstName']").parent().parent().find('td').remove();
    $("form label[for='LastName']").parent().parent().find('td').remove();
});
`
