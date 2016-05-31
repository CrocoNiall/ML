var app = angular.module('ML', ['ui.router', 'mm.foundation', 'ng-slide-down', 'duScroll'])
app.config(MainRouter)

function MainRouter($stateProvider, $urlRouterProvider, $locationProvider) {
    //catch all URL mismatches - forwards all errors to '/'
    $urlRouterProvider.otherwise('/');
        $locationProvider.html5Mode({
        enabled: true,
        requireBase: false
    });

    $stateProvider
        .state('home', {
            url: '/',
            templateUrl: '/states/pages/home.html'
        })
        .state('contact', {
            url: '/contact',
            templateUrl: '/states/pages/contact.html'
        })
        .state('ux', {
            url: '/ux',
            templateUrl: '/states/pages/ux.html'
        })
        .state('workOveriew', {
            url: '/work?scroll',
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
        .state('bridge', {
            url: '/work/bridge',
            templateUrl: '/states/pages/bridge.html'
        })
        .state('pwell', {
            url: '/work/pwell',
            templateUrl: '/states/pages/pwell.html'
        })
}