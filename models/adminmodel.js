const mongoose=require('mongoose');
const Schema=mongoose.Schema;
const user=require("./usermodel")


const adminschema=user.discriminator('admin',new mongoose.Schema({   //tjiblna collection min base  de donnee




})

);


module.exports=adminschema;