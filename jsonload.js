var myApp = angular.module('myApp', []);

myApp.controller('jsonCtrl', function($scope, $http) {
    $http.get('employees.json').success(function(data) {
        $scope.employees = data;
    });

    $scope.addEmp = function() {
        $scope.employees.push({name: $scope.empName, mon1: $scope.empMon1, mon2: $scope.empMon2, mon3: $scope.empMon3});
    }

    $scope.reversedMessage = function() {
        return $scope.empName.split("").reverse().join("");
    }
});
