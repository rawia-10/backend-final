const patientcontroller=require("../controllers/patientcontroller")

const mongoose = require('mongoose')

const router=require('express').Router();




router.post("/addpatient",patientcontroller.addpatient);
 router.get("/getall",patientcontroller.getall);
router.get("/getbyid/:id",patientcontroller.getbyid);
router.delete("/delete/:id",patientcontroller.deletepatient);
router.put("/update/:id",patientcontroller.updatepatient); 
router.post("/login",patientcontroller.authentification)
router.post("/reset",patientcontroller.resetpwd)
router.post("/newpwd",patientcontroller.newpassword)

module.exports=router;






