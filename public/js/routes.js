app.config(function($stateProvider, $urlRouterProvider){

    $urlRouterProvider.otherwise('/app');

    $stateProvider

        .state('login', {
            url: '/login',
            templateUrl: 'partials/login.html',
            controller: 'Login'
        })

        .state('app', {
            abstract: true,
            templateUrl: 'partials/app.html',
            controller: 'App'
        })

        .state('app.main', {
            url: '/main',
            templateUrl: 'partials/app.main.html',
            controller: 'App.Main'
        });

});