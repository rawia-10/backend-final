const mongoose=require('mongoose');
const Schema=mongoose.Schema;

const user=require("./usermodel")

const patientschema=user.discriminator('patient',new mongoose.Schema({   //tjiblna collection min base  de donne

 


/* rendezvous:[
    {
        type:Schema.Types.ObjectId,  //nda5lou rendez  vous par id ta3ou
        ref:'rendezvous' //ref de la collection rendez vous
        }

] */
})

);


module.exports=patientschema;