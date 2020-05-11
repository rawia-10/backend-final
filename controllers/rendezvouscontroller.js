const rendezvousmodel=require("../models/rendezvousmodel")



module.exports={

addrendezvous:function(req,res){
      const rendezvous=new rendezvousmodel(
        {
          date:req.body.date,
          heure:req.body.heure,
          email:req.body.email,
          tel:req.body.tel,
          nom:req.body.nom,
          prenom:req.body.prenom,
         
            
            });
            rendezvous.save(function(err)
            {

                
       if(err){
    res.json({state:"no"})
      }
    //on utilise API REST res.json
      else
      {
      res.json({state:'ok',msg:'rendezvous est  ajouter'}) }
      })
    },

getall:function(req,res){
   
        rendezvousmodel.find({},function(err,rendezvous){ 
        if (err){
          res.json({state:"no",msg:"vous avez un erreur"})
        }
        else{
          res.json(rendezvous)
        }
      })
      
},

getbyid: function(req, res){
    //find c'est une methode  utilisee pour chercher les donnée  dans une collection
    // rendezvousmodel.find({recherche par seul attribue kifma nom wila prenom})
    rendezvousmodel.findOne({_id:req.params.id},function(err,rendezvous){   //nab3yhouha direct fi params mich body
    if (err){
      res.json({state:"no",msg:"vous avez un erreur"})
    }
    else{
      res.json(rendezvous)
    }
  })
  },


deleterendezvous: function(req, res){
    //find c'est une methode  utilisee pour chercher les donnée  dans une collection
    // rendezvousmodel.find({recherche par seul attribue kifma nom wila prenom})
    rendezvousmodel.remove({_id:req.params.id},function(err,rendezvous){   //nab3yhouha direct fi params mich body
    if (err){
      res.json({state:"no",msg:"vous avez un erreur"})
    }
    else{
      res.json({state:"yes",msg:"rendezvous supprime"})
    }
  })
  },
  
updaterendezvous: function(req, res){

    rendezvousmodel.update({_id:req.params.id},{$set:req.body},
      { 
        date:req.body.date,
        heure:req.body.heure,
        email:req.body.email,
        tel:req.body.tel,
        nom:req.body.nom,
        prenom:req.body.prenom,
         
      },function(err)
      {  
    if (err){
      res.json({state:"no",msg:"vous avez un erreur"})
    }
    else{
      res.json({state:"yes",msg:"rendezvous a modifier"})
    }
  })
  },
  




}
    