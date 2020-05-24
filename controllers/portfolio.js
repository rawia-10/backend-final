const portfoliomodel=require("../models/portfolio")



module.exports={

addportfolio:function(req,res){
      const portfolio=new portfoliomodel(
        {
          remarque:req.body.remarque,
          ordonnace:req.body.ordonnace,
         
         
            
            });
            portfolio.save(function(err)
            {

                
       if(err){
    res.json({state:"no"})
      }
    //on utilise API REST res.json
      else
      {
      res.json({state:'ok',msg:'portfolio est  ajouter'}) }
      })
    },

getall:function(req,res){
   
        portfoliomodel.find({},function(err,portfolio){ 
        if (err){
          res.json({state:"no",msg:"vous avez un erreur"})
        }
        else{
          res.json(portfolio)
        }
      })
      
},

getbyid: function(req, res){
    //find c'est une methode  utilisee pour chercher les donnée  dans une collection
    // portfoliomodel.find({recherche par seul attribue kifma nom wila prenom})
    portfoliomodel.findOne({_id:req.params.id},function(err,portfolio){   //nab3yhouha direct fi params mich body
    if (err){
      res.json({state:"no",msg:"vous avez un erreur"})
    }
    else{
      res.json(portfolio)
    }
  })
  },


deleteportfolio: function(req, res){
    //find c'est une methode  utilisee pour chercher les donnée  dans une collection
    // portfoliomodel.find({recherche par seul attribue kifma nom wila prenom})
    portfoliomodel.remove({_id:req.params.id},function(err,portfolio){   //nab3yhouha direct fi params mich body
    if (err){
      res.json({state:"no",msg:"vous avez un erreur"})
    }
    else{
      res.json({state:"yes",msg:"portfolio supprime"})
    }
  })
  },
  
updateportfolio: function(req, res){

    portfoliomodel.update({_id:req.params.id},{$set:req.body},
      { 
        remarque:req.body.remarque,
        ordonnace:req.body.ordonnace,
         
      },function(err)
      {  
    if (err){
      res.json({state:"no",msg:"vous avez un erreur"})
    }
    else{
      res.json({state:"yes",msg:"portfolio a modifier"})
    }
  })
  },
  




}
    