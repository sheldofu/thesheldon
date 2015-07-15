angular.module('sheldoBlog', [])
.controller('Retrieve', function($scope, $http) {
    $http.get('https://blogapi.herokuapp.com/blog/all').success(function(data) {
            $scope.posts = data;
        });
});

/**
* Configure the Routes
*/
app.config(['$routeProvider', function ($routeProvider) {
$routeProvider
.when("/", {templateUrl: "partials/blog.html", controller: "BlogCtrl"})
.when("/blog/post", {templateUrl: "partials/blog_item.html",controller: "BlogCtrl"})
.otherwise("/404", {templateUrl: "partials/404.html", controller: "PageCtrl"});
}]);