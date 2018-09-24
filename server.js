require("dotenv").config();
const express = require("express");
const http = require("http");
const app = express();  
const bodyParser = require("body-parser");

//Components
var checkRequest = require("./components/checkRequest");
var sendMail = require("./components/sendMail")

app.use(bodyParser.urlencoded({ extended: true }));

//Server
const port = process.env.PORT || 5000;
const server = http.createServer(app);
server.listen(port);
console.log("Running on port " + port);


app.post("/", function(req, res) {

  // checks request for invalid fields
  data = checkRequest(req)

  // Sends email via sendMail component
  sendMail(req,res,data)

});

