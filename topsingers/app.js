let app = angular.module("SingersApp", []);
    app.controller("SingersController", function($scope){
            $scope.singers = [
    { "pic": "pics/1.png", "name": "Esther", "gender": "female", "quality":"pics/dislike.png" },
    { "pic": "pics/2.png", "name": "Lydia", "gender": "female", "quality":"pics/like.png" },
    { "pic": "pics/3.png", "name": "Ben", "gender": "male", "quality":"pics/dislike.png" },
    { "pic": "pics/4.png", "name": "Josphine", "gender": "female", "quality":"pics/like.png" },
    { "pic": "pics/5.png", "name": "Gideon", "gender": "male", "quality":"pics/like.png" },
    { "pic": "pics/6.png", "name": "Francis", "gender": "male", "quality":"pics/dislike.png" },
    { "pic": "pics/7.png", "name": "Isaac", "gender": "male", "quality":"pics/like.png" },
    { "pic": "pics/8.png", "name": "Princess", "gender": "female", "quality":"pics/dislike.png" }
  ]

    });