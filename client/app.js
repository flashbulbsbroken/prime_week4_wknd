var app = angular.module('myApp', []);

app.controller('MainController', ['$scope', function($scope) {

    //empty array for task items
    $scope.taskList = [];

    $scope.numTasks = "";

    //sets date for jumbotron header
    $scope.currentTime = moment().format('dddd, MMM Do');

    //pushes text and date from input into empty array
    $scope.addTask = function() {

        $scope.taskList.push({task:$scope.taskName, date:$scope.taskDate});

        $scope.taskName = ""; //resets text input

        $scope.taskDate = ""; //resets date input

    };

    //changes task to tasks when applicable
    $scope.totalTasks = function() {

        if($scope.taskList.length > 1) {

            $scope.numTasks = $scope.taskList.length + ' tasks';

        }if($scope.taskList.length == 1) {

            $scope.numTasks = $scope.taskList.length + ' task';

        }else{

            $scope.numTasks = $scope.taskList.length + ' tasks';

        }
            return $scope.numTasks;
        };

    //deletes item from array when delete button is clicked
    $scope.delete = function(index) {

        $scope.taskList.splice(index, 1);

    };

}]);
