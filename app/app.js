var app = angular.module('gradients', ['ngRoute', 'ngAnimate', 'toaster']);

app.config(['$routeProvider',
  function ($routeProvider) {
        $routeProvider.
        when('/login', {
            title: 'Login',
            templateUrl: 'partials/login.html',
            controller: 'authCtrl',
        })
            .when('/logout', {
                title: 'Logout',
                templateUrl: 'partials/login.html',
                controller: 'authCtrl',
            })
            .when('/signup', {
                title: 'Signup',
                templateUrl: 'partials/signup.html',
                controller: 'authCtrl',
            })
            .when('/dashboard', {
                title: 'Dashboard',
                templateUrl: 'partials/dashboard.html',
                controller: 'getSnippets',
                controllerAs: 'loadSnippets'
            })
            .when('/', {
                title: 'Gradients',
                templateUrl: 'partials/gradients.html',
                controller: 'authCtrl',
            })
            .otherwise({
                redirectTo: '/login'
            });
  }])
    .run(function ($rootScope, $location, Data) {
        $rootScope.authenticated = false;
        // $rootScope.$on("$routeChangeStart", function (event, next, current) {
            $rootScope.user = {};
            Data.get('session').then(function (results) {
                if (results.uid) {
                    $rootScope.authenticated = true;
                    $rootScope.user = {
                        uid: results.uid,
                        name: results.name,
                        email:results.email
                    }
                    // $rootScope.uid = results.uid;
                    // $rootScope.name = results.name;
                    // $rootScope.email = results.email;
                } else {
                    if (!$rootScope.user.name) {
                        $rootScope.authenticated = false;
                    };
                    // var nextUrl = next.$$route.originalPath;
                    // if (nextUrl == '/signup' || nextUrl == '/login') {

                    // } else {
                    //     $location.path("/login");
                    // }
                }
            // });
        });
    });