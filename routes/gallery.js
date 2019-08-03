const express = require('express')
const router = express.Router()

var API_KEY = process.env.THE_API_KEY;
var DOMAIN = 'boston.techtogether.io';
var mailgun = require('mailgun-js')({ apiKey: API_KEY, domain: DOMAIN });

const data = {
  from: 'Name <me@samples.mailgun.org>',
  to: 'sponsor@techtogether.io',
  subject: 'Subject',
  text: 'Body Text'
}

const data2 = {
  from: 'TechTogehter Boston <sponsor@techtogether.io>',
  to: 'email',
  subject: 'Automated Message from TechTogether Boston [Do Not Reply]',
  text: 'Your message on the TechTogether Boston website was sent! Thank you for reaching out. We will try to get back to you as soon as possible.'
}

router.get('/gallery', function (req, res) {
  res.render('gallery', { output: req.params.name });
})

router.get('/gallery/form/:abc', function (req, res) {
  res.render('form');
})

router.post('/gallery/form', function (req, res, next) {
  data.from = req.body.name + " <" + req.body.email + ">";
  data.subject = "Email from " + req.body.company;
  data.text = req.body.message + "\n\nThis message was sent from the TechTogether Boston gallery website through Mailgun. If you have any questions or concerns, please direct them to someone on the tech team.";
  data2.to = "<" + req.body.email + ">";

  // sendMail();
  // sendMail2();
  
  res.redirect('back');
});

function sendMail() {
  mailgun.messages().send(data, (error, body) => {
    if (error) {
      console.log("Error: " + error);
    }
    console.log(body);
  });
}

function sendMail2() {
  mailgun.messages().send(data2, (error, body) => {
    if (error) {
      console.log("Error: " + error);
    }
    console.log(body);
  });
}

module.exports = router;

