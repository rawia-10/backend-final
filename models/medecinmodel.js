const mongoose=require('mongoose');
const Schema=mongoose.Schema;
const user=require("./usermodel")


const medecinschema=user.discriminator('medecin',new mongoose.Schema({   //tjiblna collection min base  de donne


specialite:{
    type:String,
    required: false, 
    trim: true, 
},

fix:{
    type:String,
    required: false, 
    trim: true, 
},

atitude_professionelle:{
    type:String,
    required: false, 
    trim: true, 
},


image:{
    type:String,
    required: true, 
    trim: true, 
},



assurance_maladie:{
    type:String,
    required: false, 
    trim: true, 
},
horaire_travail:{
    type:String,
    required: false, 
    trim: true,  
},


})

);


module.exports=medecinschema;