angular.module('ML')
  .controller('MLController', MLController)

function MLController($rootScope, $http) {
  var self = this;
  self.emailMsg = ''
  self.emailName = ''
  self.emailEmail = ''
  self.emailSubject = ''


  self.sendContact = function(){
      var reqBody = {
        name: self.emailName,
        subject: self.emailSubject,
        email: self.emailEmail,
        text: self.emailMsg
      }
    $http.put('/api/contact', {emailContent: reqBody}).then(function(res){
      console.log(res)
    })
  }




  $rootScope.$on('$stateChangeSuccess', function() {
   document.body.scrollTop = document.documentElement.scrollTop = 0;
});
}