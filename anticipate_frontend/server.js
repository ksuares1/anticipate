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


