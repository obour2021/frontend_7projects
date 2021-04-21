let app = angular.module("ShoppingListApp", []);
app.controller("ListController", function($scope){
    $scope.list = ["Milk", "Cheese", "Eggs"];

    $scope.addItem = function(z){
        $scope.list.push(z);
    }
    $scope.remove = function(x){
        let removeItem = $scope.list.indexOf(x);
        $scope.list.splice(removeItem, 1);
    }
    $scope.recover = function(y){
        $scope.list.push(y)

    }
   
});