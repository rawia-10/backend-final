const express = require('express');
const sendSms = require('../controllers/sms');
const router=require('express').Router();
const app = express();
router.post('/send', (req, res) => {
    const {  phone,message } = req.body;
    const user = {
      message,
      phone
    };
  
  
    // const welcomeMessage = 'Welcome to Opalod! Your verification code is 54875';
  
    sendSms(user.phone, welcomeMessage);
  
    res.status(201).send({
      message: message,
      data: user
    })
  });
  module.exports = router;