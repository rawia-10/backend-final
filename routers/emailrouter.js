const router = require('express').Router()
const sendmailcontroller = require('../controllers/emailcontroller')


router.post('/send',sendmailcontroller.sendmail)
    
module.exports = router ;