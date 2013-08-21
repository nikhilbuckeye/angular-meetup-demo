function HomeController($scope, $log) {
  $log.log("invoked HomeController");
  
  $scope.miamiBarPercent = 50;
  $scope.bostonBarPercent = 50;

  $scope.addNewPlayer = function() {
	  $log.log("adding new player");
	  $log.log("player name: " + $scope.newPlayerName);
	  $log.log("player rating: " + $scope.newPlayerRating.toString());
	  $log.log("player team: " + $scope.newPlayerTeam);
	  
	  $scope.players.push(
		  { "name" : $scope.newPlayerName,
			"rating" : $scope.newPlayerRating,
			"team" : $scope.newPlayerTeam,
			"onCourt" : false
	  });
	  
	  $scope.newPlayerName = "";
	  $scope.newPlayerRating = "";
	  
	  reCalculateMatchupBar();
  }

  function reCalculateMatchupBar() {
	  miamiTotal = getTotal("Miami Heat");
	  bostonTotal = getTotal("Boston Celtics");
	  
	  $scope.miamiBarPercent = (miamiTotal / (miamiTotal + bostonTotal))*100;
	  $scope.bostonBarPercent = 100 - $scope.miamiBarPercent;
	  
	  $log.log("miami total: " + miamiTotal);
	  $log.log("boston total: " + bostonTotal);
  }

  function getTotal(team) {
	  total = 0;
	  for (var i = 0; i < $scope.players.length; i++) {
		  if ($scope.players[i].team == team) {
			  total += $scope.players[i].rating;
		  }
	  }
	  return total;
  }
}