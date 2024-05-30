const express = require('express');
const router = express.Router();
let name;
router.get('/',(req,res)=>{
    res.sendFile(__dirname+'/Main/Images/loginPanel.jpg');
})
router.get('/shoes/:name',(req,res)=>{
    res.send(`Get Product ${req.params.name}`)
})
module.exports = router;