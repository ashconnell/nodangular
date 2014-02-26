app.config(function($stateProvider, $urlRouterProvider){

    $urlRouterProvider.otherwise('/main');

    $stateProvider

        .state('login', {
            url: '/login',
            templateUrl: 'views/login.html',
            controller: 'Login'
        })

        .state('app', {
            abstract: true,
            templateUrl: 'views/app.html',
            controller: 'App'
        })

        .state('app.main', {
            url: '/main',
            templateUrl: 'views/app-main.html',
            controller: 'AppMain'
        });

});