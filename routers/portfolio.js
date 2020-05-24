


const portfoliocontroller=require("../controllers/portfolio")
const router=require('express').Router();

router.post("/addportfolio",portfoliocontroller.addportfolio);
router.get("/getall",portfoliocontroller.getall);
router.get("/getbyid/:id",portfoliocontroller.getbyid);
router.delete("/delete/:id",portfoliocontroller.deleteportfolio);
router.put("/update/:id",portfoliocontroller.updateportfolio); 


module.exports=router;






