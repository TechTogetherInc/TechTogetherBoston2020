const express = require('express')
const bodyParser = require('body-parser')
const app = express()
const path = require('path')

require('dotenv').config();

var API_KEY = process.env.THE_API_KEY;
var PORT = process.env.PORT || 8000;
var DOMAIN = 'boston.techtogether.io';
var mailgun = require('mailgun-js')({ apiKey: API_KEY, domain: DOMAIN });

const data = {
  from: 'Name <me@samples.mailgun.org>',
  to: 'sponsor@techtogether.io',
  subject: 'Subject',
  text: 'Body Text'
};

const data2 = {
    from: 'TechTogehter Boston <sponsor@techtogether.io>',
    to: 'email',
    subject: 'Automated Message from TechTogether Boston [Do Not Reply]',
    text: 'Your message on the TechTogether Boston website was sent! Thank you for reaching out. We will try to get back to you as soon as possible.'
}

app.use(bodyParser.urlencoded({ extended: true }))
app.use(express.static('public'))
app.set('view engine', 'ejs')

app.get('/', function (req, res) {
  res.render('index');
})

app.post('/form', function (req, res) {
  data.from = req.body.name + " <" + req.body.email + ">";
  data.subject = "Email from " + req.body.company;
  data.text = req.body.message + "\n\nThis message was sent from the TechTogether Boston gallery website through Mailgun. If you have any questions or concerns, please direct them to someone on the tech team.";  

  data2.to = "<" + req.body.email + ">";

  console.log("testing, this is the body text: " + data.text);

  sendMail();
  sendMail2();
  res.redirect('back');
})

app.listen(PORT, function () {
  console.log('Listening...');
})

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