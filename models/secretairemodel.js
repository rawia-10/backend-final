const mongoose=require('mongoose');
const Schema=mongoose.Schema;
const user=require("./usermodel")


const secretaireschema=user.discriminator('secretaire',new mongoose.Schema({   //tjiblna collection min base  de donnee




})

);


module.exports=secretaireschema;