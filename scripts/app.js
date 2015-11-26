angular.module('todoListApp', [])
    .controller('mainCtrl', function($scope){
      $scope.change = function(){
        console.log('An input has been changed');
      }

      $scope.todos = [
        {"name" : "clean the house"},
        {"name" : "water the dog"},
        {"name" : "pay dem bills"},
        {"name" : "run"},
        {"name" : "swim"}
      ]

    });//End mainCtrl
