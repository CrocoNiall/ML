var sendgrid  = require('sendgrid')(process.env.MLEMAILKEY);

var sendMail = function(reqBody, res){

//build email tempplate
  var emailBody = '<h1>Hello Melissa</h1>'
  emailBody += '<p><b>Someone is trying to contact you!</b></p>'
  emailBody += '<b>Name: '+reqBody.emailContent.name+' </b><br>'
  emailBody += '<b>Email: '+reqBody.emailContent.email+' </b><br>'
  emailBody += '<b>Subject: '+reqBody.emailContent.subject+' </b><br><br>'
  emailBody += '<p>' + reqBody.emailContent.text + '</p><br>'
  emailBody += '<p><i>Regards, yourself. </i></p>'

  var tempEmail = {
      to:       process.env.MLEMAILTO,
      from:     process.env.MLEMAILFROM,
      subject:  'Someone is trying to contact you!',
      html: emailBody
  }

//send email via sendgrid
  sendgrid.send(tempEmail, function(err, json) {
     //if errors, reply 500 else reply 200. 
      if (err) { 
        console.error(err); 
        res.status(500).send();
      } else {
        res.status(200).send();        
      }
  });
}

module.exports = {
  sendContactReq: sendMail
};