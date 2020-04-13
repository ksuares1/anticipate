const http = require('http');
const express = require('express');
const mongoose = require("mongoose");
const routes = require("./routes");
const fs = require('fs');
const multer = require('multer');
const MessagingResponse = require('twilio').twiml.MessagingResponse;

const app = express();

app.use(express.urlencoded({ extended: true }));
app.use(express.json());

if (process.env.NODE_ENV === "production") {
  app.use(express.static("client/build"));
}

app.use(routes);

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

mongoose.connect(process.env.MONGODB_URI || "mongodb://localhost/patientlist");

// Start the API server
app.listen(PORT, function() {
  console.log(`🌎  ==> API Server now listening on PORT ${PORT}!`);
});

//Multer defined to save photo on mongoose database
app.use(multer({ dest: '../../assets/img/',
  rename: function (image, filename) {
    return filename;
  },
 }));

 app.post('/api/patients/:id',function(req,res){
  var newItem = new Item();
  newItem.img.data = fs.readFileSync(req.files.patientImage.path)
  newItem.img.contentType = 'image/png';
  newItem.save();
 });