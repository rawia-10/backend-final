require('dotenv').config();

const accountSid = "ACce2c15086800287cb141a03e9afbba65";
const authToken = "bc63dca201060d5e7b1246cec8559668";

const sendSms = (phone, message) => {
  const client = require('twilio')(accountSid, authToken);
  client.messages
    .create({
       body: message,
       from: "+21628566911",
       to: phone
     })
    .then(message => console.log(message.sid));
}

module.exports = sendSms;