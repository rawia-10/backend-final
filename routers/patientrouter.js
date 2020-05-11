const patientcontroller=require("../controllers/patientcontroller")


const router=require('express').Router();

router.post("/addpatient",patientcontroller.addpatient);
 router.get("/getall",patientcontroller.getall);
router.get("/getbyid/:id",patientcontroller.getbyid);
router.delete("/delete/:id",patientcontroller.deletepatient);
router.put("/update/:id",patientcontroller.updatepatient); 
router.post("/login",patientcontroller.authentification)


module.exports=router;






