var galleryCtrl = angular.module('galleryCtrl', []);
galleryCtrl.controller('galleryController', function($scope, $http){
    $scope.posts = [];

    $http.get('/post')
        .success(function(data){
            console.log(JSON.stringify(data));
            $scope.posts = data;
        })
        .error(function(data) {
            console.log('Error: ' + data);
        });

        $scope.deletePost = function(id){
            $http.delete('/post/' + id)
                .success(function(data){
                    console.log(JSON.stringify(data));
                    $scope.posts = data;
                })
                .error(function(data) {
                    console.log('Error: ' + data);
                });
        };
});
