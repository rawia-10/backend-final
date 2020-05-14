


const rendezvouscontroller=require("../controllers/rendezvouscontroller")
const requireLogin  = require('../middlware/requireLogin')
const rendezvousmodel=require("../models/rendezvousmodel")
const router=require('express').Router();

router.post("/addrdv",rendezvouscontroller.addrendezvous);
router.get("/getall",rendezvouscontroller.getall);
router.get("/getbyid/:id",rendezvouscontroller.getbyid);
router.delete("/delete/:id",rendezvouscontroller.deleterendezvous);
router.put("/update/:id",rendezvouscontroller.updaterendezvous); 


router.get('/myrdv',requireLogin,(req,res)=>{
    rendezvousmodel.find({rdvBy:req.user._id})
    .populate("rdvBy","_id name")
    .then(myrdv=>{
        res.json({myrdv})
    })
    .catch(err=>{
        console.log(err)
    })
})
module.exports=router;






