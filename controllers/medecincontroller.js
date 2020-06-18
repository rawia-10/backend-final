const medecinmodel=require('../models/medecinmodel')
const fs=require('fs')
const multer=require('multer')
const upload=multer({dest:__dirname+"/uploads/images"})
const bcrypt = require ('bcryptjs');
const jwt = require ('jsonwebtoken')



module.exports={

    
  
    
      
  

    addmedecin:function(req, res){
        var file=__dirname+"/uploads/images/"+req.file.originalname
      fs.readFile(req.file.path,function(err,data){
      fs.writeFile(file,data,function(err){
        if(err)
        {res.json({state:"no",msg:"un erreur"})
        var response = {
            message: 'Sorry, file couldn\'t be uploaded.',
            filename: req.file.originalname}
        }
        else{
            response = {
                message: 'File uploaded successfully',
                filename: req.file.originalname };
          const medecin=medecinmodel({
      
            nom:req.body.nom,
            prenom:req.body.prenom,
            email:req.body.email,
            password:req.body.password,
            address:req.body.address,
            tel:req.body.tel,
            genre:req.body.genre,
            date_naissance:req.body.date_naissance,
            role:req.body.role,
            image:req.file.originalname,
            assurance_maladie:req.body.assurance_maladie,
            fix:req.body.fix,
            specialite:req.body.specialite,
            diplome:req.body.diplome  ,
            
          });
          medecin.save(function (err)
          {
            if(err)
            {console.log(err)
             res.json ({state:'no',msg:'vous avez un erreur'})
            }
            else
            {
              res.json({state:'yes',msg:"medecin ajouter"})
            }
          })
      
        
        }})})
      },
      getfile:function(req,res){
        {
      res.sendFile(__dirname+'/uploads/images/'+req.params.image)
        }
        
      },

  


getall:function(req,res){
   
        medecinmodel.find(function(err,medecin){ 
        if (err){
          res.json({state:"no",msg:"vous avez un erreur"})
        }
        else{
          res.json(medecin)
        }
      })
      
},

getbyid: function(req, res){
    //find c'est une methode  utilisee pour chercher les donnée  dans une collection
    // medecinmodel.find({recherche par seul attribue kifma nom wila prenom})
    medecinmodel.findOne({_id:req.params.id},function(err,medecin){   //nab3yhouha direct fi params mich body
    if (err){
      res.json({state:"no",msg:"vous avez un erreur"})
    }
    else{
      res.json(medecin)
    }
  })
  },


deletemedecin: function(req, res){
    //find c'est une methode  utilisee pour chercher les donnée  dans une collection
    // medecinmodel.find({recherche par seul attribue kifma nom wila prenom})
    medecinmodel.remove({_id:req.params.id},function(err,medecin){   //nab3yhouha direct fi params mich body
    if (err){
      res.json({state:"no",msg:"vous avez un erreur"})
    }
    else{
      res.json({state:"yes",msg:"medecin supprime"})
    }
  })
  },
  
updatemedecin: function(req, res){

    medecinmodel.update({_id:req.params.id},{$set:req.body},
      { nom:req.body.nom,
        prenom:req.body.prenom,
        email:req.body.email,
        password:req.body.password,
        address:req.body.address,
        tel:req.body.tel,
        genre:req.body.genre,
        date_naissance:req.body.date_naissance,
        assurance_maladie:req.body.assurance_maladie,
        fix:req.body.fix,
        specialite:req.body.specialite,
        image:req.file.originalname,
        diplome:req.body.diplome
     

            
      },function(err)
      {  
    if (err){
      res.json({state:"no",msg:"vous avez un erreur"})
    }
    else{
      res.json({state:"yes",msg:"medecin a modifier"})
    }
  })
  },
  

  authentification : function (req, res) {
    medecinmodel.findOne({email: req.body.email}).populate('role').exec( function (err, userInfo) {
    if (err) {

        console.log(err)
    }
    else {
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


}
    