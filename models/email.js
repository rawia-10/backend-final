const mongoose = require('mongoose')
const schema = mongoose.Schema()
// https://myaccount.google.com/lesssecureapps === active
const sendschema = mongoose.model('sendmail', new mongoose.Schema({

    to:{
        type:String,
        required:true,
        trim:true
    },
    subject:{
        type:String,
        required:true,
        trim:true
    },
    text:{
        type:String,
        required:true,
        trim:true
    }

}))

module.exports  = sendschema ;