# Tree Menu

This Menu is a tree-style or accordion style menu which provides the user (developer) a functionality of nesting upto any-level. The component works on a DATASOURCE which will should be a JSON and the menu us constructed dynamically. There is no restriction on the depth of nesting.

The code is purely written in HTML, JS, CSS and the data is in JSON format.

The project scaffolding contains the below structure:


## Get Started

1. Download and extract the contents of the zip from <https://github.com/rgjain/treeMenu/archive/gh-pages.zip>  into your project folder
2. Include the treeMenu.js into your page.
3. Include the treeMenu.css into you page.
4. Include the chosen theme CSS file into your page. You can add all, but it is unnecessary.
5. Initialize the plugin using the below code.
6. Customize using the options.

This is the complete sample code - [demo here](http://rgjain.github.io/treeMenu)
```
<!doctype html>
<html>
	<head>
		<link rel="stylesheet" href="css/treeMenu.css" >
		<link rel="stylesheet" href="css/greyness.css" >
		<link rel="stylesheet" href="css/pure-sky.css" >
		<link rel="stylesheet" href="css/round-grey.css" >
		<link rel="stylesheet" href="css/round-white.css" >
		<link rel="stylesheet" href="css/sky-grey.css" >
		<script type="text/javascript" src="js/jquery-1.10.0.min.js"></script>
		<script type="text/javascript" src="js/sampleData.json"></script>
		<script type="text/javascript" src="js/treeMenu.js"></script>
		
		<script type="text/javascript">
			$(document).ready(function(){
				$("#componentContainer1").treeMenu({
					theme : "lightness",
					defaultExpandLevel : 1
				});
				$("#componentContainer2").treeMenu({
					theme : "round-white",
					defaultExpandLevel : 2
				});
				$("#componentContainer3").treeMenu({
					theme : "pure-sky",
					defaultExpandLevel : 3
				});
			});
		</script>
	</head>
	
	<body>
		<div class="page-wrap">
			<div class="component-wrap">
				<div class="accmenu-component" id="componentContainer1" ></div>
				<div class="accmenu-component" id="componentContainer2" ></div>
				<div class="accmenu-component" id="componentContainer3" ></div>
			</div>
		</div>
	</body>
</html>
```

## Features

* Easy to setup. As easy as any jQuery plugin
* Supports nesting upto any level (no limit to the levels of nesting)
* JSON powered menu construction. The level of nesting depends on the nesting in the data
* Theme-able. There are a few themes available with the package. It also support custom themeing.


## Options

`expandTrigger` (default: 0) - use this option to set the trigger to the icon/label/both.
```
0 - both
1 - icon
2 - label
```

--------------

`selectionTrigger` (default: 0) - use ths option to set the trigger for selection of the menu item. Selection fires an event "**menu-on-select**"
```
0 - both
1 - icon
2 - label
```

-----------

`alignIcon` (default: 1) - align the icon to the left or right.
```
1 - left
2 - right
```

-----------

`defaultExpandLevel` (default: 2) - this option will expand menu to the specified when it is fist loaded. 
```
1, 2, 3 ..... n where n will be the number of levels of nesting you have in the menu
```

--------------

`levelIndent` (default: 20px) - the indentation for the child menu items in pixels. This can also be managed using CSS.

-------------

`data` - most important. JSON for the construction of the menu. Refer a [sample] for the structure.

--------------

`theme` - themeing for you menu. Make your menu look the way you want. We have provided a few pre-loaded themes.
```
1. lightness(default)
2. sky-grey
3. pure-sky
4. greyness
5. round-white
6. round-grey
```
Each theme has its own CSS file. Refer to any of the theme CSS file to get a stint of how to write a theme file. 
Note: the theme name should be used as the class as usual and the value of `theme` will added as a class to the target element.

------------

`keyConnector` (default: /) - this option is to construct an **hierarchy key**. The **hierarcky key** is constructed and is available as a data attribute to each menu item. The `keyConnector` will be used as a separator. This option will be useful for dynamc selection of the menu item.

------------


## Methods
There is one method which is exposed.

`hierarchySelection` - this takes the **hierarchyKey** as the parameter and does the menu selection based on the **hierarchyKey**.
```
Usage:
$("...").treeMenu().hierarchySelection(hierarchyKey);
```

## Browser support

* Chrome v44.
* Firefox v38.
* Internet Explorer 9+. Not tested on IE8, doesn't mean that it will not work.
* Safari v5.
* Opera - not tested, but nothing stops it from working. 


## License

The code is available under the [MIT license](LICENSE.txt).
