const patientcontroller=require("../controllers/patientcontroller")
const patient =require("../models/patientmodel")
const express = require('express')

const mongoose = require('mongoose')
const requireLogin  = require('../middlware/requireLogin')
// const Post =  mongoose.model("Post")
// const User = mongoose.model("User")
const router=require('express').Router();

// router.get('/patient/:id',requireLogin,(req,res)=>{
//     patient.findOne({_id:req.params.id})
//     .select("-password")
//     // .then(user=>{
//     //      Post.find({postedBy:req.params.id})
//     //      .populate("postedBy","_id name")
//     //      .exec((err,posts)=>{
//     //          if(err){
//     //              return res.status(422).json({error:err})
//     //          }
//     //          res.json({user,posts})
//     //      })
//     // }).catch(err=>{
//     //     return res.status(404).json({error:"User not found"})
//     // })
// })

router.get('/profile',patientcontroller.profile)
router.post("/addpatient",patientcontroller.addpatient);
 router.get("/getall",patientcontroller.getall);
router.get("/getbyid/:id",patientcontroller.getbyid);
router.delete("/delete/:id",patientcontroller.deletepatient);
router.put("/update/:id",patientcontroller.updatepatient); 
router.post("/login",patientcontroller.authentification)


module.exports=router;






