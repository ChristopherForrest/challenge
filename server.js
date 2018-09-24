require("dotenv").config();
const express = require("express");
const http = require("http");
const app = express();  

// SendGrid
const sgMail = require("@sendgrid/mail");
sgMail.setApiKey(process.env.SENDGRID_API_KEY);

// Mailgun
var mailgun = require("mailgun-js");
var api_key = process.env.MAILGUN_API_KEY;
var DOMAIN = process.env.MAILGUN_DOMAIN;
var mailgun = require("mailgun-js")({ apiKey: api_key, domain: DOMAIN });

//BodyParser
var bodyParser = require("body-parser");
app.use(bodyParser.urlencoded({ extended: true }));

//Server
const port = process.env.PORT || 5000;
const server = http.createServer(app);
server.listen(port);
console.log("Running on port " + port);

// const emailValidation = /[A-Z0-9._%+-]+@[A-Z0-9.-]+.[A-Z]{2,4}/igm;

app.post("/", function(req, res) {

  // default object with required fields
  var data = {
    from: req.body.from + '@freeemailerservice.com',
    to: req.body.to,
    subject: req.body.subject,
    text: req.body.text
  };

  // forming object before sending as mailgun && Sendgrid will break if cc or bcc is empty / undefined
  
  if (req.body.cc !== (!undefined && !"")) {
    data.cc = req.body.cc;
  }

  if (req.body.bcc !== (!undefined && !"")) {
    data.bcc = req.body.bcc;
  }

  // Mailgun returns error object else is undefined. SendGrid sends if error with mailgun.
  mailgun.messages().send(data, function(error, body) {
    
    if (error == undefined) {
      console.log("sending via mailgun...");
      res.sendStatus(200);  // Send status OK
    } 
    else {
      console.log("sending via sendgrid..");

      sgMail.send(data, function(error, body) {
        
        if (error !== null) {
          res.sendStatus(400); // Send error back to client as SendGrid has also returned an error.
        } 
        else {
          res.sendStatus(200); // Send status OK
        }
      }).catch(function(error){

      })

      
    }
  });
});

