angular.module('todoListApp', [])
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
    .service('dataService', function($http){
      // Test service
      this.helloConsole = function(){
        console.log('This is the hello console service!');
      }
      // Request to get todo items
      this.getTodos = function(callback){
        $http.get('mock/todos.json')
          .then(callback)
        }

      // Request to delete todo item
      this.deleteTodo = function(todo){
        console.log("The " + todo + " has been deleted!");
        //simulate communication to API
      }
      // Request to save todo item
      this.saveTodo = function(todo){
        console.log("The " + todo + " was Saved!");
        //simulate communication to API
      }

    });//End dataService
