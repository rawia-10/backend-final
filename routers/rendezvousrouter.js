


const rendezvouscontroller=require("../controllers/rendezvouscontroller")


const router=require('express').Router();

router.post("/addrdv",rendezvouscontroller.addrendezvous);
router.get("/getall",rendezvouscontroller.getall);
router.get("/getbyid/:id",rendezvouscontroller.getbyid);
router.delete("/delete/:id",rendezvouscontroller.deleterendezvous);
router.put("/update/:id",rendezvouscontroller.updaterendezvous); 


module.exports=router;






