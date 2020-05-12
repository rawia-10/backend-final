
const admincontroller=require("../controllers/admincontroller")
const router=require('express').Router();

router.post("/addadmin",admincontroller.addadmin);
 router.get("/getall",admincontroller.getall);
router.get("/getbyid/:id",admincontroller.getbyid);
router.delete("/delete/:id",admincontroller.deleteadmin);
router.put("/update/:id",admincontroller.updateadmin); 
router.post("/login",admincontroller.authentification)


module.exports=router;






