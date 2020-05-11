const mongoose=require('mongoose');
const Schema=mongoose.Schema;



const rendezvousschema=mongoose.model('rdv',new mongoose.Schema({   //tjiblna collection min base  de donne


date:{
    type:String,
    required: true, 
    trim: true, 
},

heure:{
    type:String,
    required: true, 
    trim: true, 
},

nom:{
    type:String,
    required: true, 
    trim: true, 
},

prenom:{
    type:String,
    required: true, 
    trim: true, 
},

tel:{
    type:Number,
    required: true, 
    trim: true, 
},

email:{
    type:String,
    required: true, 
    trim: true, 
},

})

);


module.exports=rendezvousschema;