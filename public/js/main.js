var app = angular.module('ML', ['ui.router', 'mm.foundation', 'ng-slide-down'])
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