const medecincontrollers=require("../controllers/medecincontroller");

const router=require('express').Router();
const multer=require('multer')
const upload=multer({dest:__dirname+"/uploads/images"})

router.post("/addmedecin",upload.single("image") ,medecincontrollers.addmedecin);//single=envoi une seul image kench fi post ni5dmouha
router.get("/getall",medecincontrollers.getall);
router.get("/getbyid/:id",medecincontrollers.getbyid);
router.delete("/delete/:id",medecincontrollers.deletemedecin);
router.put("/update/:id",medecincontrollers.updatemedecin); 
router.post("/login",medecincontrollers.authentification)
router.get("/getfile/:image",medecincontrollers.getfile);

module.exports=router;