const express = require("express");
const http = require("http");
const app = express();

//BodyParser
var bodyParser = require("body-parser");
app.use(bodyParser.urlencoded({ extended: true }));

// checks request to ensure cc and bcc are not undefined or empty strings

function checkRequest(req) {
  var data = {
    from: req.body.from + "@freeemailerservice.com",
    to: req.body.to,
    subject: req.body.subject,
    text: req.body.text
  };

  if (req.body.cc !== undefined && req.body.cc !== "") {
    data.cc = req.body.cc;
  }
  if (req.body.bcc !== undefined && req.body.bcc !== "") {
    data.bcc = req.body.bcc;
  }

  return data;
}
module.exports = checkRequest;
