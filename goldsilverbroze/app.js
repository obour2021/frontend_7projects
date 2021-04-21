let app = angular.module("goldApp", []);
app.controller("goldController", function ($scope){
    $scope.showGold = false;
    $scope.showSilver = false;
    $scope.showBronze= false;
    $scope.toggleGold = function() {
        $scope.showGold= !$scope.showGold;
    }
    $scope.toggleSilver = function() {
        $scope.showSilver= !$scope.showSilver;
    }
    $scope.toggleBronze = function() {
        $scope.showBronze= !$scope.showBronze;
    }
    
    $scope.leaders = [
        {"pic": "pics/1.png", "rank": 1},
        {"pic": "pics/2.png", "rank": 1},
        {"pic": "pics/3.png", "rank": 1},
        {"pic": "pics/4.png", "rank": 2},
        {"pic": "pics/5.png", "rank": 2},
        {"pic": "pics/6.png", "rank": 2},
        {"pic": "pics/7.png", "rank": 3},
        {"pic": "pics/8.png", "rank": 3},
        {"pic": "pics/9.png", "rank": 3}

    ]

   

});