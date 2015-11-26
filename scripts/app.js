angular.module('todoListApp', [])
    .controller('mainCtrl', function($scope){
      $scope.helloWorld = function(){
        console.log('Hello there! This is the helloWorld function in the mainCtrl');
      }

      $scope.todos = [
        {"name" : "clean the house"},
        {"name" : "water the dog"},
        {"name" : "pay dem bills"},
        {"name" : "run"},
        {"name" : "swim"}
      ]

    });//End mainCtrl
