const mongoose=require('mongoose');



const roleSchema=mongoose.model('role',new mongoose.Schema({




    nom: {
        type: String,
        required: true,
        trim: true,
    }




}));
module .exports = roleSchema;
