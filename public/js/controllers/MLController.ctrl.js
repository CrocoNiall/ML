angular.module('ML')
  .controller('MLController', MLController)

function MLController($rootScope) {
  $rootScope.$on('$stateChangeSuccess', function() {
   document.body.scrollTop = document.documentElement.scrollTop = 0;
});
}