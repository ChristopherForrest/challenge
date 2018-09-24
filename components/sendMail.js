// SendGrid
const sgMail = require("@sendgrid/mail");
sgMail.setApiKey(process.env.SENDGRID_API_KEY);

// Mailgun
var mailgun = require("mailgun-js");
var api_key = process.env.MAILGUN_API_KEY;
var DOMAIN = process.env.MAILGUN_DOMAIN;
var mailgun = require("mailgun-js")({ apiKey: api_key, domain: DOMAIN });


function sendMail(req,res,data){

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

}

module.exports = sendMail;