var googleDirective = angular.module('googleModule', []);

googleDirective.directive("search",  function() {
	var definition =  {
		restrict: "EAC",
		replace: true,
		scope: {name:'@playerName'},
		link: function postLink($scope, $element, $attrs) {	
			var value = $element.html();
			console.log("https://www.google.com/#fp=b9a685e5356340ac&q=" + name);
			$element.after(value);			
		}
	};	
	return definition;
});
