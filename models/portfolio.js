const mongoose=require('mongoose');
const Schema=mongoose.Schema;

const portfolioschema=mongoose.model('portfolio',new mongoose.Schema({   //tjiblna collection min base  de donne




    remarque:{
    type:String,
    required: false, 
    trim: true, 
},

ordonnance:{
    type:String,
    required: false, 
    trim: true, 
},


})

);


module.exports=portfolioschema;