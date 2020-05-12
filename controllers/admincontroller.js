const adminmodel=require("../models/adminmodel")
const bcrypt = require ('bcryptjs');
const jwt = require ('jsonwebtoken')




module.exports={


  addadmin:function(req, res){

      const admin=adminmodel({
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
      admin.save(function (err)
      {
        if(err)
        {console.log(err)
         res.json ({state:'no',msg:'vous avez un erreur'})
        }
        else
        {
          res.json({state:'yes',msg:"admin ajouter"})
        }
      })

  },

  
  


getall:function(req,res){
   
        adminmodel.find({},function(err,admin){ 
        if (err){
          res.json({state:"no",msg:"vous avez un erreur"})
        }
        else{
          res.json(admin)
        }
      })
      
},

getbyid: function(req, res){
    //find c'est une methode  utilisee pour chercher les donnée  dans une collection
    // adminmodel.find({recherche par seul attribue kifma nom wila prenom})
    adminmodel.findOne({_id:req.params.id},function(err,admin){   //nab3yhouha direct fi params mich body
    if (err){
      res.json({state:"no",msg:"vous avez un erreur"})
    }
    else{
      res.json(admin)
    }
  })
  },


deleteadmin: function(req, res){
    //find c'est une methode  utilisee pour chercher les donnée  dans une collection
    // adminmodel.find({recherche par seul attribue kifma nom wila prenom})
    adminmodel.remove({_id:req.params.id},function(err,admin){   //nab3yhouha direct fi params mich body
    if (err){
      res.json({state:"no",msg:"vous avez un erreur"})
    }
    else{
      res.json({state:"yes",msg:"admin supprime"})
    }
  })
  },
  
updateadmin: function(req, res){

    adminmodel.update({_id:req.params.id},{$set:req.body},
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
      res.json({state:"yes",msg:"admin a modifier"})
    }
  })
  },
  

  authentification : function (req, res) {
    adminmodel.findOne({email: req.body.email}).populate('role').exec( function (err, userInfo) {
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
    