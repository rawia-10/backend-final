const sendmodel = require('../models/email')
const nodemailer = require('nodemailer')
process.env.NODE_TLS_REJECT_UNAUTHORIZED='0'
module.exports ={

    
    sendmail : function(req,res){

        var transporter = nodemailer.createTransport({
            host: 'smtp.gmail.com',
            port: 465,
          service: 'gmail',
          auth: {
            user: 'ajilirawia2@gmail.com',
            pass: 'rawiaajili2..'
          }
        });
        
        var mailOptions = {

            from: ' "Rawya Ajili "  ',
            to: req.body.to,
            subject: req.body.subject,
            text: req.body.text,

        };
        
        transporter.sendMail(mailOptions, function(error, info){
          if (error) {
            console.log(error);
            console.log(mailOptions)
          } else {
            console.log('Email sent: ' + info.response);
            res.json(info)
          }
        })
        transporter.close();
        
    }

}