const patientmodel=require("../models/patientmodel")
const bcrypt = require ('bcryptjs');
const jwt = require ('jsonwebtoken')
const nodemailer = require('nodemailer')
process.env.NODE_TLS_REJECT_UNAUTHORIZED='0'
const crypto = require('crypto')


module.exports={


  addpatient:function(req, res){

      const patient=patientmodel({
        nom:req.body.nom,
        prenom:req.body.prenom,
        email:req.body.email,
        password:req.body.password,
        address:req.body.address,
        tel:req.body.tel,
        genre:req.body.genre,
        date_naissance:req.body.date_naissance,
        role:req.body.role,
        remarque:req.body.remarque,
        

      
         
  
      });
      patient.save(function (err)
      {
        if(err)
        {console.log(err)
         res.json ({state:'no',msg:'vous avez un erreur'})
        }
        else
        {
          res.json({state:'yes',msg:"patient ajouter"})
        }
      })

  },

  
  


getall:function(req,res){
   
        patientmodel.find(function(err,patient){ 
        if (err){
          res.json({state:"no",msg:"vous avez un erreur"})
        }
        else{
          res.json(patient)
        }
      })
      
},

getbyid: function(req, res){
    //find c'est une methode  utilisee pour chercher les donnée  dans une collection
    // patientmodel.find({recherche par seul attribue kifma nom wila prenom})
    patientmodel.findOne({_id:req.params.id},function(err,patient){   //nab3yhouha direct fi params mich body
    if (err){
      res.json({state:"no",msg:"vous avez un erreur"})
    }
    else{
      res.json(patient)
    }
  })
  },


deletepatient: function(req, res){
    //find c'est une methode  utilisee pour chercher les donnée  dans une collection
    // patientmodel.find({recherche par seul attribue kifma nom wila prenom})
    patientmodel.remove({_id:req.params.id},function(err,patient){   //nab3yhouha direct fi params mich body
    if (err){
      res.json({state:"no",msg:"vous avez un erreur"})
    }
    else{
      res.json({state:"yes",msg:"patient supprime"})
    }
  })
  },
  
updatepatient: function(req, res){

    patientmodel.update({_id:req.params.id},{$set:req.body},
      { nom:req.body.nom,
        prenom:req.body.prenom,
        email:req.body.email,
        password:req.body.password,
        address:req.body.address,
        tel:req.body.tel,
        genre:req.body.genre,
        date_naissance:req.body.date_naissance,

     

            
      },function(err)
      {  
    if (err){
      res.json({state:"no",msg:"vous avez un erreur"})
    }
    else{
      res.json({state:"yes",msg:"patient a modifier"})
    }
  })
  },
  

  authentification : function (req, res) {
    patientmodel.findOne({email: req.body.email}).populate('role').exec( function (err, userInfo) {
    if (err) {

        console.log(err)
    }
    else {
//COMPARER pss utilisateur bil pass token
        if (bcrypt.compareSync(req.body.password, userInfo.password)) {

            const token = jwt.sign({id: userInfo._id}, req.app.get('secretKey'), {expiresIn: '1h'});

            res.json({status: "success", message: 'user found ', data: {user: userInfo, token: token}});
        }
        else {

            res.json({status: 'error', message: 'invalid email or password', data: null});
        }
    }
});
},
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
  
},
resetpwd:function(req,res){
  var transporter = nodemailer.createTransport({
    host: 'smtp.gmail.com',
    port: 465,
  service: 'gmail',
  auth: {
    user: 'ajilirawia2@gmail.com',
    pass: 'rawiaajili2..'
  }
});
  crypto.randomBytes(32,(err,buffer)=>{
    if(err){
        console.log(err)
    }
    const token = buffer.toString("hex")
    patientmodel.findOne({email:req.body.email})
    .then(user=>{
        if(!user){
            return res.status(422).json({error:"User dont exists with that email"})
        }
        user.resetToken = token
        user.expireToken = Date.now() + 3600000
        user.save().then((result)=>{
            transporter.sendMail({
                to:user.email,
                from:"ajilirawia2@gmail.com",
                subject:"password reset",
                html:`
                <p>You requested for password reset</p>
                <h5>click in this <a href="${patientmodel.email}/reset/${token}">link</a> to reset password</h5>
                `
            })
            res.json({message:"check your email"})
        })

    })
})
},
newpassword:function(req,res){
  const newPassword = req.body.password
    const sentToken = req.body.token
    patientmodel.findOne({resetToken:sentToken,expireToken:{$gt:Date.now()}})
    .then(user=>{
        if(!user){
            return res.status(422).json({error:"Try again session expired"})
        }
        bcrypt.hash(newPassword,12).then(hashedpassword=>{
           user.password = hashedpassword
           user.resetToken = undefined
           user.expireToken = undefined
           user.save().then((saveduser)=>{
               res.json({message:"password updated success"})
           })
        })
    }).catch(err=>{
        console.log(err)
    })
}




}
    