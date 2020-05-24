const medecincontroller=require("../controllers/medecincontroller")
const multer=require("multer")
const upload=multer({dest:__dirname+"/upload/images/"})

const router=require('express').Router();

router.post("/addmedecin",upload.single("image"),medecincontroller.addmedecin);
 router.get("/getall",medecincontroller.getall);
router.get("/getbyid/:id",medecincontroller.getbyid);
router.delete("/delete/:id",medecincontroller.deletemedecin);
router.put("/update/:id",medecincontroller.updatemedecin); 
router.get("/getfile/:image",medecincontroller.getfile)
router.post("/login",medecincontroller.authentification)


module.exports=router;






