let app = angular.module("ComposersApp",[]);
app.controller("composersController", function ($scope){
        $scope.pieces = [
    { "pic": "pics/johan.PNG", "composer": "Johann Bach", "title": "Best try Gold" },
    { "pic": "pics/johan.PNG", "composer": "Johann Bach", "title": "Beginner" },
    { "pic": "pics/johan.PNG", "composer": "Johann Bach", "title": "Great attempt" },
    { "pic": "pics/johan.PNG", "composer": "Johann Bach", "title": "The blessings" },
    { "pic": "pics/johan.PNG", "composer": "Johann Bach", "title": "Final day" },
    { "pic": "pics/van.PNG", "composer": "Beethoven", "title": "The beast" },
    { "pic": "pics/van.PNG", "composer": "Beethoven", "title": "Pot of gold" },
    { "pic": "pics/van.PNG", "composer": "Beethoven", "title": "The great on" },
    { "pic": "pics/van.PNG", "composer": "Beethoven", "title": "It's not easy" },
    { "pic": "pics/van.PNG", "composer": "Beethoven", "title": "Forever young" },
    { "pic": "pics/wolfs.png", "composer": "Mozart", "title": "The bitter truth" },
    { "pic": "pics/wolfs.png", "composer": "Mozart", "title": "Air on the moon" },
    { "pic": "pics/wolfs.png", "composer": "Mozart", "title": "Don Glovanni" },
    { "pic": "pics/wolfs.png", "composer": "Mozart", "title": "Come back to me" },
    { "pic": "pics/wolfs.png", "composer": "Mozart", "title": "The lost" }
]
});