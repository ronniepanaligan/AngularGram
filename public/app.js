var app = angular.module('angularGram', ['addPostCtrl', 'galleryCtrl','detailCtrl', 'ngRoute', 'angular-filepicker'])
    .config(function($routeProvider, filepickerProvider){
        //The route provider handles the client request to switch route
        $routeProvider.when('/addPost', {
            templateUrl: 'partials/addPost.html',
            controller: 'addPostController'
        })
        .when('/gallery', {
            templateUrl: 'partials/gallery.html',
            controller: 'galleryController'
        })
        .when('/profile', {
            templateUrl: 'partials/profile.html',
            controller: 'galleryController'
        })
        .when('/messages', {
            templateUrl: 'partials/messages.html',
            controller: 'galleryController'
        })
        .when('/login', {
          templateUrl: 'partials/login.html',

        })
        .when('/detail/:id', {
            templateUrl: 'partials/detail.html',
            controller: 'detailController'
        })

        .otherwise({redirectTo:'/addPost'});
        //Add the API key to use filestack service
        filepickerProvider.setKey('AMhgEBKZRuOTbXKdQf1GAz');
});
