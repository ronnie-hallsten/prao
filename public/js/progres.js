angular.module('prao').controller('ProgressDemoCtrl', function ($scope) {
    $scope.x = 50;
    $scope.max = 100;
    $scope.add = function () {
        $scope.x = $scope.x + 5
        if($scope.x>100) {
            $scope.x = 100;
        }
    }
    $scope.remove = function () {
        $scope.x = $scope.x - 5
        if($scope.x<0) {
            $scope.x = 0;
        }
    }

});






