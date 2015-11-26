angular.module('todoListApp', [])
    .controller('mainCtrl', function($scope, dataService){

      $scope.helloConsole = dataService.helloConsole

      $scope.change = function(){
        console.log('An input has been changed');
      }

      dataService.getTodos(function(response){
        console.log(response.data);
          $scope.todos = response.data
      })


    })//End mainCtrl
    .service('dataService', function($http){

      this.helloConsole = function(){
        console.log('This is the hello console service!');
      }

      this.getTodos = function(callback){
        $http.get('mock/todos.json')
          .then(callback)
        }


    });//End dataService
