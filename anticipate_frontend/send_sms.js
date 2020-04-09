// Download the helper library from https://www.twilio.com/docs/node/install
// Your Account Sid and Auth Token from twilio.com/console
// DANGER! This is insecure. See http://twil.io/secure
const accountSid = 'AC7e9ff4a49928de05e73a14226bc9bcd9';
const authToken = '19ac5ef3b4e8e29ea42621b1fcd6ae59';
const client = require('twilio')(accountSid, authToken);

client.messages
  .create({
     body: 'This is the ship that made the Kessel Run in fourteen parsecs?',
     from: '+19178096874',
     to: '+16466859898'
   })
  .then(message => console.log(message.sid));