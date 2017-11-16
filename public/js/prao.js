var app = angular.module('prao', ['ui.bootstrap']);

app.controller('MainCtrl', function ($scope) {

    $scope.details = [
        {"name": "Employees"},
        {"name": "Test"},
        {"name": "Sommar"},
        {"name": "Support"}
    ];
    
    $scope.add = function(string) {
        $scope.details.push({ name: string });
    };
    
    $scope.remove = function(e) {
        console.log('Vi ska ta bort det här:', e);
        
        $scope.details.splice(e, 1);
    };
});
