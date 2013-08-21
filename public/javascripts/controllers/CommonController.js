function CommonController($scope, $log) {
  $log.log("invoked CommonController");

    $scope.players = [
      {
       "name": "Dwayne Wade",
       "team" : "Miami Heat",
       "rating" : 92,
       "onCourt" : true
      },

      {
    	  "name": "Rajon Rondo",
      "team" : "Boston Celtics",
      "rating" : 92,
      "onCourt" : false
      }
    ];
}