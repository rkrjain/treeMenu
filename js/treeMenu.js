(function($) {

	$.fn.treeMenu = function (options) {
		
		var settings = $.extend({
			expandTrigger : 0,					//0=both, 1=icon, 2=label
			selectionTrigger : 0,				//0=both, 1=icon, 2=label
			alignIcon : 1,						//1=left, 2=right
			defaultExpandLevel : 2,				//the level, starting from 0, to which the menu should be expanded by default
			keyConnector : "/",					//character which will be used to generate the key using the hierarchy, default is "/" 
			levelIndent : 20, 					//so many pixels padding will be applied to each level of nesting in multiples
			data : sampleData,					//data to construct the menu
			theme : "lightness"					//lightness(default), sky-grey, pure-sky, greyness, round-white, round-grey
		}, options),
		
		iconAlignClass = (settings.alignIcon == 2) ? "content-right" : "content-left",
		iconTriggerClass = (settings.expandTrigger == 1 || settings.expandTrigger == 0) ? "trigger" : "",
		labelTriggerClass = (settings.expandTrigger == 2 || settings.expandTrigger == 0) ? "trigger" : "",
		iconSelectionClass = (settings.selectionTrigger == 1 || settings.selectionTrigger == 0) ? "selection" : "",
		labelSelectionClass = (settings.selectionTrigger == 2 || settings.selectionTrigger == 0) ? "selection" : "",
		targetElement = this;

		this.each(function(key, val) {

			var menuHTML = _constructMenuItems(settings.data);
			
			$(targetElement).html("")
							.append(menuHTML)
							.addClass(settings.theme);

			_expandToLevel(settings.defaultExpandLevel);
			
			_bindEvents();
		});
		
		function _constructMenuItems(dataList, n) {
			
			n = n || 1;
			var menuList = $('<ul></ul>');
			menuList.addClass("menu-list");

			dataList.forEach(function(v, k) {

				var isParent = (typeof v.items != 'undefined' && v.items.length > 0);

				var menuItem = $('<li></li>')
					.addClass("clearfix menu-item")
					.addClass("level-" + n)
					.addClass(iconAlignClass)
					.addClass(((isParent) ? " acchmnu-parent " : ""))
					.attr({
						"data-key" : v.key,
						"data-text" : v.text,
						"data-levelname" : v.levelName,
						"data-hierarchykey" : v.hierarchyKey,
						"data-hierarchytext" : v.hierarchyText
					});

				var menuIcon = $('<span></span>')
					.addClass("icon")
					.addClass(iconTriggerClass)
					.addClass(iconSelectionClass)
					.attr("href", "javascript:void(0)")
					.css({
						marginLeft : settings.levelIndent * n
					});

				var menuLabel = $('<a></a>')
					.addClass("label")
					.addClass(labelTriggerClass)
					.addClass(labelSelectionClass)
					.attr({
						href : "javascript:void(0)",
						title : v.key
					})
					.text(v.text)
					.css({
						paddingLeft : settings.levelIndent * n
					});

				menuItem.append(menuIcon).append(menuLabel);

				if (isParent) {
					menuItem.append(_constructMenuItems(v.items, n+1));
				}

				menuList.append(menuItem);
			});

			return menuList;
		};

		function _expandToLevel (level) {
			var accmenuComponent = $(targetElement),
				levelFirstChild = accmenuComponent.find(".level-1:first-child"),
				levelOneParent = levelFirstChild.parent(),
				levelCounter = 0;

			while (levelCounter <= level) {
				levelFirstChild.addClass("acchmnu-expand");
				var menuLevel = levelCounter + 1;
				var menuLevelSelector = ".menu-item.level-" + menuLevel;
				levelCounter++;
				levelFirstChild = accmenuComponent.find(".level-" + menuLevel + ":first-child");
			}
		};
		
		function _bindEvents () {
			
			$(targetElement).find(".trigger").on("click", function(e) {
				var tgtElem = $(this),
					menuItem = tgtElem.closest(".menu-item"),
					siblings = menuItem.siblings(".menu-item");

				menuItem.find(".acchmnu-expand").removeClass("acchmnu-expand");
				siblings.removeClass("acchmnu-expand").find(".acchmnu-expand").removeClass("acchmnu-expand");

				var _dataKey = menuItem.data("key"),
					_dataText = menuItem.data("text"),
					_dataLevelName = menuItem.data("levelname"),
					_dataHierarchyKey = menuItem.data("hierarchykey");

				if (menuItem.hasClass("acchmnu-expand")) {
					menuItem.removeClass("acchmnu-expand");
					menuItem.addClass("acchmnu-collapse");
				} else {
					menuItem.removeClass("acchmnu-collapse");
					menuItem.addClass("acchmnu-expand");
				}
			});
			$(targetElement).find(".selection").on("click", function(e) {
				var tgtElem = $(this),
					menuItem = tgtElem.closest(".menu-item"),
					siblings = menuItem.siblings(".menu-item");

				$(targetElement).find(".label").removeClass("acchmnu-selected");
				menuItem.find(" > .label").addClass("acchmnu-selected");
			});
		};
		
		this.hierarchySelection = function (hierarchyKey) {
			var selectionParameter = "data-hierarchykey",
				selectionElement = $('.menu-item[' + selectionParameter + '="' + hierarchyKey + '"]'),
				selectionParent = selectionElement.parent().closest(".acchmnu-parent");

			selectionElement.removeClass("acchmnu-collapse");
			selectionElement.addClass("acchmnu-expand");
			$(".accmenu-component > ul li").addClass("acchmnu-collapse");

			while(selectionParent.hasClass("acchmnu-parent")) {
				selectionParent.removeClass("acchmnu-collapse");
				selectionParent.addClass("acchmnu-expand");
				selectionParent.siblings().removeClass("acchmnu-expand");
				selectionParent = selectionParent.parent().closest(".acchmnu-parent");
			}

			selectionElement.find(".trigger:first").trigger("click");
			selectionElement.trigger("menu-on-select");
		}
		
		return this;		
	};
})(jQuery);
