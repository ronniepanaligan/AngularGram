var addCtrl = angular.module('addPostCtrl', []);
addCtrl.controller('addPostController', function($scope, $http, filepickerService){
    $scope.post = {};

    $scope.createPost = function(){
        $http.post('/post', $scope.post)
            .success(function(data){
                console.log(JSON.stringify(data));

                $scope.post = {};
            })
            .error(function(data) {
                console.log('Error: ' + data);
            });
    };

    $scope.upload = function(){
        filepickerService.pick(
            {
                mimetype: 'image/*',
                language: 'en',
                services: ['COMPUTER','DROPBOX','GOOGLE_DRIVE','IMAGE_SEARCH', 'FACEBOOK', 'INSTAGRAM'],
                openTo: 'IMAGE_SEARCH'
            },
            function(Blob){
                console.log(JSON.stringify(Blob));
                $scope.post.picture = Blob;
                $scope.$apply();
            }
        );
    };

    $scope.uploadMultiple = function(){
        filepickerService.pickMultiple(
            {
                mimetype: 'image/*',
                language: 'en',
                maxFiles: 3, //pickMultiple has one more option
                services: ['COMPUTER','DROPBOX','GOOGLE_DRIVE','IMAGE_SEARCH', 'FACEBOOK', 'INSTAGRAM'],
                openTo: 'IMAGE_SEARCH'
            },
      function(Blob){
                console.log(JSON.stringify(Blob));
                $scope.post.morePictures = Blob;
                $scope.$apply();
            }
        );
    };
});
