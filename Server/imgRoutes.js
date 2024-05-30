const express = require('express');
const router = express.Router();
router.get('/loginPanel.jpg',(req,res)=>{
    res.sendFile(__dirname+'/Main/Images/loginPanel.jpg');
})
router.get('/registerPanel.png',(req,res)=>{
    res.sendFile(__dirname+'/Main/Images/registerPanel.png');
})
module.exports = router;