const secretairemodel=require("../models/secretairemodel")
const bcrypt = require ('bcryptjs');
const jwt = require ('jsonwebtoken')




module.exports={


  addsecretaire:function(req, res){

      const secretaire=secretairemodel({
        nom:req.body.nom,
        prenom:req.body.prenom,
        email:req.body.email,
        password:req.body.password,
        address:req.body.address,
        tel:req.body.tel,
        genre:req.body.genre,
        date_naissance:req.body.date_naissance,
        role:req.body.role,
       

      
         
  
      });
      secretaire.save(function (err)
      {
        if(err)
        {console.log(err)
         res.json ({state:'no',msg:'vous avez un erreur'})
        }
        else
        {
          res.json({state:'yes',msg:"secretaire ajouter"})
        }
      })

  },

  
  


getall:function(req,res){
   
        secretairemodel.find({},function(err,secretaire){ 
        if (err){
          res.json({state:"no",msg:"vous avez un erreur"})
        }
        else{
          res.json(secretaire)
        }
      })
      
},

getbyid: function(req, res){
    //find c'est une methode  utilisee pour chercher les donnée  dans une collection
    // secretairemodel.find({recherche par seul attribue kifma nom wila prenom})
    secretairemodel.findOne({_id:req.params.id},function(err,secretaire){   //nab3yhouha direct fi params mich body
    if (err){
      res.json({state:"no",msg:"vous avez un erreur"})
    }
    else{
      res.json(secretaire)
    }
  })
  },


deletesecretaire: function(req, res){
    //find c'est une methode  utilisee pour chercher les donnée  dans une collection
    // secretairemodel.find({recherche par seul attribue kifma nom wila prenom})
    secretairemodel.remove({_id:req.params.id},function(err,secretaire){   //nab3yhouha direct fi params mich body
    if (err){
      res.json({state:"no",msg:"vous avez un erreur"})
    }
    else{
      res.json({state:"yes",msg:"secretaire supprime"})
    }
  })
  },
  
updatesecretaire: function(req, res){

    secretairemodel.update({_id:req.params.id},{$set:req.body},
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
      res.json({state:"yes",msg:"secretaire a modifier"})
    }
  })
  },
  

  authentification : function (req, res) {
    secretairemodel.findOne({email: req.body.email}).populate('role').exec( function (err, userInfo) {
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
}



}
    