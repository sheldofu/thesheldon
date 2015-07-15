var app = angular.module('sheldoBlog', ['ngRoute'])
.controller('Retrieve', function($scope, $http) {
    $http.get('https://blogapi.herokuapp.com/blog/all').success(function(data) {
            $scope.posts = data;
        });
});

app.controller('BlogCtrl',function($scope, $http) {
	// console.log('control');
})

/**
* Configure the Routes
*/
app.config(['$routeProvider', function ($routeProvider) {
$routeProvider
.when("/", {templateUrl: "partials/blog_all.html", controller: "BlogCtrl"})
.when("/post", {templateUrl: "partials/blog_item.html",controller: "BlogCtrl"})
// .otherwise("/404", {templateUrl: "partials/404.html", controller: "PageCtrl"});
}]);