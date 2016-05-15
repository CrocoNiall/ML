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
        .state('workOveriew', {
            url: '/work',
            templateUrl: '/states/pages/workOverview.html'
        })        
        .state('eut', {
            url: '/work/eut',
            templateUrl: '/states/pages/eut.html'
        })        
        .state('fm', {
            url: '/work/fm',
            templateUrl: '/states/pages/fm.html'
        })
        .state('urban', {
            url: '/work/urban',
            templateUrl: '/states/pages/urban.html'
        })
}