const mongoose=require('mongoose');
const Schema=mongoose.Schema;

const user=require("./usermodel")

const medecinschema=user.discriminator('medecin',new mongoose.Schema({   //tjiblna collection min base  de donne

 
    image:
    {type:String,
        required: false, 
    trim: true, 
    },

    specialite:
    {type:String,
        required: false, 
    trim: true, 
    } ,
     assurance_maladie:
    {type:String,
        required: false, 
    trim: true, 
    },
    fix:
   {type:String,
       required: false, 
   trim: true, 
   }
    

})

);


module.exports=medecinschema;