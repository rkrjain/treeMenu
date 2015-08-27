# Tree Menu

This Menu is a tree-style or accordion style menu which provides the user (developer) a functionality of nesting upto any-level. The component works on a DATASOURCE which will should be a JSON and the menu us constructed dynamically. There is no restriction on the depth of nesting.

The code is purely written in HTML, JS, CSS and the data is in JSON format.

The project scaffolding contains the below structure:


## Get Started

1. Download the latest stable release from
   [html5boilerplate.com](https://html5boilerplate.com/) or create a
   custom build using [Initializr](http://www.initializr.com).
2. Clone the git repo — `git clone
   https://github.com/h5bp/html5-boilerplate.git` - and checkout the
   [tagged release](https://github.com/h5bp/html5-boilerplate/releases)
   you'd like to use.


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

* Chrome *(latest 2)*
* Firefox *(latest 2)*
* Internet Explorer 9+. Not tested on IE8, doesn't mean that it will not work.
* Opera *(latest 2)*
* Safari *(latest 2)*


## License

The code is available under the [MIT license](LICENSE.txt).
