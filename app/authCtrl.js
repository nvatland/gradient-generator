app.controller('authCtrl', function ($scope, $rootScope, $routeParams, $location, $http, Data) {
    //initially set those objects to null to avoid undefined error
    $scope.login = {};
    $scope.signup = {};
    $scope.message = '';
    $scope.doLogin = function (user) {
        Data.post('login', {
            user: user
        }).then(function (results) {
            Data.toast(results);
            console.log(results);
            $rootScope.user.name = results.name;
            $rootScope.user.uid = results.uid;
            $rootScope.user.email = results.email;
            console.log($rootScope.user);
            $scope.$apply;
            $rootScope.authenticated = true;
            if (results.status == "success") {
                $location.path('dashboard');
            }
        });
    };
    $scope.signup = {email:'',password:'',name:''};
    $scope.signUp = function (user) {
        Data.post('signUp', {
            user: user
        }).then(function (results) {
            Data.toast(results);
            if (results.status == "success") {
                $rootScope.user.name = results.name;
                $rootScope.user.uid = results.uid;
                $rootScope.user.email = results.email;
                $rootScope.authenticated = true;
                $location.path('dashboard');
            }
        });
    };
    
    $scope.logout = function () {
        console.log('LOG OUT');
        $rootScope.authenticated = false;
        $rootScope.user = {};
        Data.get('logout').then(function (results) {
            Data.toast(results);
            $location.path('/login');

        });
    }
    
    $scope.saveSnippet = function(snippets) {
        console.log(snippets);
        console.log($rootScope.user.uid);
        console.log('here');
        snippets.uid = $rootScope.user.uid;
        console.log(snippets);
            Data.post('snippets', {
                snippet: snippets
            }).then(function(results) {
                Data.toast(results);
                console.log('testing');
                console.log(results);
            });
        $scope.snippetForm = {};
    }

});

app.controller('getSnippets', function($scope, $rootScope, $routeParams, $location, $http, Data){
        if ($rootScope.user.uid) {
            console.log($rootScope.user);
            var uid = $rootScope.user.uid;
            console.log(uid);
            $scope.snippets = [];
            $http.get('api/v1/snippets/' + uid).success(function(data, status, headers, config){
                if(data.message) {$scope.errormessage = data.message};
                $scope.snippets = data.snippets;
                console.log($scope.snippets);
            });
        } else {
            $location.path('/login');
        }
        
    
});

