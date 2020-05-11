const mongoose=require('mongoose');
const bcrypt=require("bcryptjs")

const Schema=mongoose.Schema;


//heritage pour eviter gaspiage de la memoire
 const baseOptions={
    discriminatorKey:'userType',
    //our discriminator key could be anything
    collection:'users'
} 
//les discriminateurs sont un mecanisme d'heritage de schema
//un discriminateur est une fonction modelet nous permettra de specifie
//un cle comme "usertype" avec cette cle  nous pouvons stocker diff entites (vendeur,acheteur )dans une collection 

const userschema=mongoose.model('user',new mongoose.Schema({   //tjiblna collection min base  de donne
nom:{
    type:String,
    required: true, //obligatoire
    trim: true, //éviter les espaces
},
prenom:{
    type:String,
    required: true, 
    trim: true, 
},

email:{
    type:String,
    required: true, 
    trim: true, 
},
password:{
    type:String,
    required: true, 
    trim: true, 
},
tel:{
    type:Number,
    required: true, 
    trim: true, 
},
address:{
    type:String,
    required: true, 
    trim: true, 
},

genre:{
    type:String,
    required: true, 
    trim: true, 
},
date_naissance:{
    type:String,
    required: true, 
    trim: true, 
},

CreatedAt:{
    type:Date,
    required: false, 
    trim: true, 
},

UpdatedAt:{
    type:Date,
    required: false, 
    trim: true, 
},
IsActive:{
    type:Boolean,
    required: false, 
    trim: true, 
},
role :{

    type : Schema.Types.ObjectID,
    ref :'role'


}
})
//bycrype c'est une fonction de hashage nous l'utiliserons pour hashage de mot de passe 
.pre("save",function(){
    this.password=bcrypt.hashSync(this.password,10);
    //stocker lehashage  dans bd
    
})

);


module.exports=userschema;