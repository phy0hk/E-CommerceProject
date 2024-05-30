const express = require('express');
const router = express.Router();
router.get('/LoginStyle.css',(req,res)=>{
    res.sendFile(__dirname+'/Main/css/LoginStyle.css');
})
router.get('/RegisterStyle.css',(req,res)=>{
    res.sendFile(__dirname+'/Main/css/RegisterStyle.css');
})
module.exports = router;