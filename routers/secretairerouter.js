
const secretairecontroller=require("../controllers/secretairecontroller")
const router=require('express').Router();

router.post("/addsecretaire",secretairecontroller.addsecretaire);
 router.get("/getall",secretairecontroller.getall);
router.get("/getbyid/:id",secretairecontroller.getbyid);
router.delete("/delete/:id",secretairecontroller.deletesecretaire);
router.put("/update/:id",secretairecontroller.updatesecretaire); 
router.post("/login",secretairecontroller.authentification)


module.exports=router;






