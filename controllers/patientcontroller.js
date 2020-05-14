const patientmodel=require("../models/patientmodel")
const bcrypt = require ('bcryptjs');
const jwt = require ('jsonwebtoken')
const nodemailer=require('nodemailer')

let transporter = nodemailer.createTransport({
  service: 'gmail',
  auth: {
       email: process.env.EMAIL ,
      //'abc@gmail.com', // TODO: your gmail account
      password: process.env.PASSWORD 
      //'1234' // TODO: your gmail password
  }
});
module.exports={

addpatient:function(req,res){
      const patient=new patientmodel(
        {
          nom:req.body.nom,
          prenom:req.body.prenom,
          email:req.body.email,
          address:req.body.address,
          tel:req.body.tel,
          genre:req.body.genre,
          date_naissance:req.body.date_naissance,
        password:req.body.password,
        role: req.body.role,
         // rendezvous:req.body.rendezvous,
            
            });
            patient.save()
            .then(patient=>{
              // transporter.sendMail({
              //     to:patient.email,
              //     from:"ajilirawia2@gmail.com",
              //     subject:"signup success",
              //     html:"<h1>welcome to MyDoc</h1>"
              // })
              res.json({message:"saved successfully"})
          })
          .catch(err=>{
              console.log(err)
          })
     
    },

getall:function(req,res){
   
  patientmodel.find({}).populate('rendezvous').exec(function(err,patient){ 
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
      { 
        nom:req.body.nom,
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
profile:function(req, res)  {
  var decoded = jwt.verify(req.headers['authorization'], process.env.SECRET_KEY)

  patientmodel.findOne({
    _id: decoded._id
  })
    .then(patientmodel => {
      if (patientmodel) {
        res.json(patientmodel)
      } else {
        res.send('patient does not exist')
      }
    })
    .catch(err => {
      res.send('error: ' + err)
    })
}





}
    