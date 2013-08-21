angular.module('app', ['ui.bootstrap', 'truncate', 'StringFilterModule', 'googleModule']).
	config(['$routeProvider', function($routeProvider) {
		$routeProvider.
			when('/home', {templateUrl: '/assets/templates/home.html', controller: HomeController}).
			when('/match', {templateUrl: '/assets/templates/match.html', controller: MatchController}).
			when('/team', {templateUrl: '/assets/templates/team.html', controller: TeamController}).
			otherwise({redirectTo:'/home'});
	}]);