angular.module('ML')
  .controller('MLController', MLController)

function MLController($rootScope, $http, $state, $document, $stateParams) {
  var self = this;
  self.emailMsg = ''
  self.emailName = ''
  self.emailEmail = ''
  self.emailSubject = ''
  self.msgSent = false; 



  self.sendContact = function(){
      var reqBody = {
        name: self.emailName,
        subject: self.emailSubject,
        email: self.emailEmail,
        text: self.emailMsg
      }
      
    $http.put('/api/contact', {emailContent: reqBody})
      .then(function(res){

      self.emailMsg = ''
      self.emailName = ''
      self.emailEmail = ''
      self.emailSubject = ''
      
      if(res.status === 200){
        self.msgSent = true;
      } else {
        alert('Oops, something went wrong!')
      }
    })
  }

  self.goTo = function(stateName){
    $state.go(stateName)
  }
  self.scrollTo = function(id, duration){
    var time = duration | 1000
    var someElement = angular.element(document.getElementById(id));
    $document.scrollToElementAnimated(someElement, 0, time);
  }

  $rootScope.$on('$stateChangeSuccess', function() {
    document.body.scrollTop = document.documentElement.scrollTop = 0;
    if($stateParams.scroll) {
      setTimeout(function(){
        var someElement = angular.element(document.getElementById($stateParams.scroll));
        $document.scrollToElementAnimated(someElement, 0, 500);
      },100)
    }
  });
}