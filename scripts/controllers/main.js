'use strict';

angular.module('todoListApp')
  .controller('mainCtrl', function($scope, dataService){
    // Add a new todo
    $scope.addTodo = function(){
      var todo = {name: "This is a new todo!"}
      $scope.todos.push(todo);
    }

    // Check for changes in edit
    $scope.change = function(){
      console.log('An input has been changed');
    }

    // Show all todo items
    dataService.getTodos(function(response){
      console.log(response.data);
        $scope.todos = response.data
    })

    // Delete todo
    $scope.deleteTodo = function(todo, $index){
      dataService.deleteTodo(todo.name);
      $scope.todos.splice($index, 1)
    }

    // Save Todo
    $scope.saveTodo = function(todo){
      dataService.saveTodo(todo);
    }


  })//End mainCtrl
