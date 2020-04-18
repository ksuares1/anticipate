const express = require("express");
const morgan =require("morgan");
const session= require('express-session');
const http = require('http');
const mongoose = require("mongoose");
const routes = require("./routes");
const app = express();
const passport = require('./passport');
const PORT = process.env.PORT || 3001;

const server = http.createServer(app);
// const MessagingResponse = require('twilio').twiml.MessagingResponse;

// Define middleware here
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
// Serve up static assets (usually on heroku)
if (process.env.NODE_ENV === "production") {
  app.use(express.static("client/build"));
}
// Add routes, both API and view
app.use(routes);


// logging the req.session
app.use((req, res, next) => {
  console.log('req.session', req.session);
  return next();
});


// calls serializeUser and deserializeUser
//express session
app.use(
  session({
    secret: 'do-not-expose',
  })
)

app.use(passport.initialize())
app.use(passport.session())

// Connect to the Mongo DB
mongoose.connect(process.env.MONGODB_URI || "mongodb://localhost:27017/anticipatesignup");

// mongoose.connect(process.env.MONGODB_URI || "mongodb://localhost/patientlist");

// Start the API server
app.listen(PORT, function () {
  console.log(`🌎  ==> API Server now listening on PORT ${PORT}!`);
});


//Twilio Server 

app.post('/sms', (req, res) => {
  const twiml = new MessagingResponse();

  twiml.message('The Robots are coming! Head for the hills!');

  res.writeHead(200, {'Content-Type': 'text/xml'});
  res.end(twiml.toString());
});

http.createServer(app).listen(1337, () => {
  console.log('Express server listening on port 1337');
});

//End of Twilio server 