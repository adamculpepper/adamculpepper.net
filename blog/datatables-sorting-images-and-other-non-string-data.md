---
title: 'DataTables Sorting images and other non-string data'
date: 2019-07-04T15:41:00Z
author: Adam Culpepper
summary: summary goes here - check me out!
tags:
- jquery
- datatables

---

I recently ran into a problem using DataTables where I wanted to display a column's cell content as a FontAwesome icon instead of the `true` or `false` boolean values that my data returned, only later to find out that I also wanted to sort by that column. DataTables doesn't do a great job of sorting data that isn't string based. To help fix this problem, I came up with a fix that allowed me to display the FontAwesome icons I wanted to use and still be able to sort by that column.

For this, I still displayed the `true` or `false` data in the cell, but I used a `<span>` tag wrapped around that data with a CSS class of "hidden" on it alongside the icon. Side note: I use a helper class to set that "hidden" class to `display:none`

The commented out return inside the render function on `ProductActive` is what my final code ended up being. I used a ternary for the icon class so the return statement was all on one line, but for this example, I expanded the code into an if statement to make it easier to read, but I wanted to leave my final return render as well.

``` css
<style>
.hidden {display:none;}
</style>
```

``` javascript
$('#products').DataTable({
	order: [ 4, 'desc' ],
	columns: [
		{ data: 'ProductName', title: 'Product' },
		{ data: 'ProductPrice', title: 'Price' },
		{ data: 'ProductDescription', title: 'Description' },
		{
			data: 'ProductActive',
			title: 'Active',
			render: function (data, type, row, meta) {
				//return '<i class="fa fa-2x fa-' + (data == true ? 'check text-green' : 'times text-red') + '" aria-hidden="true"></i><span class="hidden">' + data + '</span>';
				if (data == true) {
				    return '<i class="fa fa-check" aria-hidden="true"></i><span class="hidden">' + data + '</span>';
				} else if (data == false) {
				    return '<i class="fa fa-times" aria-hidden="true"></i><span class="hidden">' + data + '</span>';
				}
			}
		},
	]
});
```
