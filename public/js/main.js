var app = angular.module('ML', ['ui.router', 'mm.foundation'])
app.config(MainRouter)

function MainRouter($stateProvider, $urlRouterProvider) {
    //catch all URL mismatches - forwards all errors to '/'
    $urlRouterProvider.otherwise('/');

    $stateProvider
        .state('home', {
            url: '/',
            templateUrl: '/states/pages/home.html'
        })
}