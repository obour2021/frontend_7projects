let app = angular.module("peopleChoose", []);
app.controller("peopleController", function($scope){
  $scope.collection=[];
  $scope.addThisOne = function(z){
      $scope.collection.push(z);
  }

    $scope.people = [
        {"pic": "pics/1.png", "name": "kwame Nkrumah"},
        {"pic": "pics/2.png", "name": "JJ Rawlings"},
        {"pic": "pics/3.png", "name": "JA Kuffour"},
        {"pic": "pics/4.png", "name": "John Mahama"},
        {"pic": "pics/5.png", "name": "Akufo Addo"},
        {"pic": "pics/6.png", "name": "Bawumia"},
        {"pic": "pics/7.png", "name": "Atta Mills"},
        {"pic": "pics/8.png", "name": "Ali Mahama"}
   ]
});
