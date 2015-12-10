var app = angular.module('slackApp', ['ngRoute']);

app.config(['$routeProvider', function($routeProvider) {
	$routeProvider.when('/', {
		templateUrl: '/pages/channels.html',
		controller: 'channelCtrl'
	}).when('/wish', {
		templateUrl: '/pages/wishlist.html',
		controller: 'wishCtrl'
	});
}]);

app.controller('channelCtrl', ['$scope', '$http', function ($scope, $http) {
	$scope.message = "Look at all these slack channels!!!";

	$http({
		url: '/channels',
		method: 'get'
	}).then(function(res) {
		$scope.channels = res.data;
	});
}]);

app.controller('wishCtrl', ['$scope', '$http', function($scope, $http) {
	$scope.message = "What Slack channels would you like to see in the future?";

	$scope.submit = function () {
		var channel = {name: $scope.newChannel};

		$http({
			url: '/channels',
			method: 'post',
			data: JSON.stringify({newChannel: channel})
		}).then(function(res) {
			alert('Bam! New Channel!');
		});
	}

}]);