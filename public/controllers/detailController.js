var detailCtrl = angular.module('detailCtrl', []);
detailCtrl.controller('detailController', function($scope, $http, $routeParams){
    $scope.post = {};

    var id = $routeParams.id;
    $http.get('/post/' + id)
        .success(function(data){
            console.log(JSON.stringify(data));
            $scope.post = data;
        })
        .error(function(data) {
            console.log('Error: ' + data);
        });
});
