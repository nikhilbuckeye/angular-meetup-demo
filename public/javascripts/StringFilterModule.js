angular.module('StringFilterModule', []).
  filter('prettyName', function() {
    return function(input) {
	    	if (input != null) {
	    		var names = input.split(' ');
	    		for (var i = 0; i < names.length; i++) {
	    			names[i] = names[i].charAt(0).toUpperCase() + names[i].slice(1);
	    		}
	    		return names.join(' ');
	    	} else {
	    		return "";
	    	}
    };
})
;