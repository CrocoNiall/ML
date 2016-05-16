var sendgrid  = require('sendgrid')(process.env.MLEMAILKEY);

var sendMail = function(reqBody){


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

  sendgrid.send(tempEmail, function(err, json) {
      
      if (err) { return console.error(err); }

  });
}

module.exports = {
  sendContactReq: sendMail
};