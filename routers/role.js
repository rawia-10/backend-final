
const roleCtr = require ('../controllers/role')


const router=require('express').Router();



router.post ('/addrole', roleCtr.ajouterRole)





module.exports = router;