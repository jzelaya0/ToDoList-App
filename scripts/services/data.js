'use strict'

angular.module('todoListApp')
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
